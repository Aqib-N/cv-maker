import React from "react";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

interface MediaDetails {
  height?: number;
  width?: number;
}

interface NextImageProps {
  className?: string;
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  mediaDetails?: MediaDetails;
  fill?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  props?: Omit<
    ImageProps,
    | "src"
    | "alt"
    | "title"
    | "width"
    | "height"
    | "fill"
    | "onClick"
    | "className"
  >;
}

export const NextImage: React.FC<NextImageProps> = ({
  className,
  src,
  alt,
  title,
  width,
  height,
  mediaDetails = {},
  fill = false,
  onClick,
  props,
}) => {
  const nextImageClasses = clsx(className);

  const convertDynamicWidth = mediaDetails.width
    ? `${mediaDetails.width / 16}rem`
    : undefined;
  const convertDynamicHeight = mediaDetails.height
    ? `${mediaDetails.height / 16}rem`
    : undefined;
  const convertStaticWidth = width ? `${width / 16}rem` : undefined;
  const convertStaticHeight = height ? `${height / 16}rem` : undefined;

  if (!src) {
    return null;
  }

  return fill ? (
    <Image
      {...props}
      alt={alt}
      src={src}
      title={title}
      fill={fill}
      className={nextImageClasses}
      priority
      unoptimized
      onClick={onClick}
    />
  ) : (
    <div
      className={`relative ${nextImageClasses}`}
      style={{
        width: convertDynamicWidth || convertStaticWidth,
        height: convertDynamicHeight || convertStaticHeight,
      }}
    >
      <Image
        {...props}
        alt={alt}
        src={src}
        title={title}
        onClick={onClick}
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default NextImage;
