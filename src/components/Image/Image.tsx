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
  priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
  style?: React.CSSProperties;
}

const NextImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
  //   priority = false,
  loading = "lazy",
  className = "",
  style = {},
}) => {
  const imageStyle: React.CSSProperties = {
    objectFit,
    objectPosition,
    ...style,
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        //   priority={priority}
        style={imageStyle}
      />
    </div>
  );
};

export default NextImage;
