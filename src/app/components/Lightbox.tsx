"use client";

import { useState } from "react";

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
}

export function Lightbox({ images }: LightboxProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setActive((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      <div className="space-y-16">
        {images.map((img, i) => (
          <article key={i} className="space-y-3">
            <img
              src={img.src}
              alt={img.alt}
              onClick={() => { if (window.innerWidth >= 768) setActive(i); }}
              className="w-full object-contain max-h-[calc(100vh-10rem)] md:cursor-zoom-in"
            />
            {img.caption && (
              <p className="text-xs text-zinc-900 leading-6">{img.caption}</p>
            )}
          </article>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 md:p-16"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-6 text-xs uppercase tracking-[0.25em] text-white cursor-pointer"
          >
            Close
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white text-xl cursor-pointer select-none"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="w-full max-h-[85vh] object-contain"
            />
            {images[active].caption && (
              <p className="mt-3 text-xs text-white/70 leading-6">
                {images[active].caption}
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white text-xl cursor-pointer select-none"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}
