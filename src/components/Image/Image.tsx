"use client";
import React from "react";
import { Image } from "@heroui/react";

interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  objectFit?: "contain" | "cover" | "fill" | "none";
  objectPosition?: string;
  quality?: number;
  // priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
  // priority,
  loading = "lazy",
  className = "",
  style = {},
  onClick,
}) => {
  const imageStyle: React.CSSProperties = {
    objectFit,
    objectPosition,
    ...style,
  };

  return (
    <div className={`relative ${className}`} style={style} onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        // priority={priority}
        style={imageStyle}
      />
    </div>
  );
};

export default NextImage;
