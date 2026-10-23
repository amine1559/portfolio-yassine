"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

type SmartImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  fallback: ReactNode;
};

export function SmartImage({ src, alt, sizes, priority = false, className, fallback }: SmartImageProps) {
  const [failed, setFailed] = useState(src.trim().length === 0);

  if (failed) {
    return <div className="absolute inset-0">{fallback}</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
