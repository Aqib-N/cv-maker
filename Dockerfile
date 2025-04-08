# Use Node.js 18 Alpine as base image
FROM node:18-alpine AS base
LABEL maintainer="CV-Maker Development Team"
WORKDIR /cv-maker

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat git
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Development stage with hot reloading
FROM base AS dev
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=development \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    CHOKIDAR_USEPOLLING=true \
    WATCHPACK_POLLING=true

COPY --from=deps /cv-maker/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]

# Build stage
FROM base AS builder
COPY --from=deps /cv-maker/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build && yarn cache clean

# Production stage
FROM base AS production
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S cvmaker && \
    adduser -u 1001 -S cvmaker -G cvmaker

COPY --from=builder --chown=cvmaker:cvmaker /cv-maker/public ./public
COPY --from=builder --chown=cvmaker:cvmaker /cv-maker/.next/standalone ./
COPY --from=builder --chown=cvmaker:cvmaker /cv-maker/.next/static ./.next/static

USER cvmaker
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1

CMD ["node", "server.js"]