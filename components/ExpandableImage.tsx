"use client";

import { useEffect, useRef, useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt: string;
  title?: string;
  imageClassName?: string;
  buttonClassName?: string;
};

export function ExpandableImage({
  src,
  alt,
  title = alt,
  imageClassName = "h-auto w-full",
  buttonClassName = "block w-full cursor-zoom-in rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ribbon",
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        aria-label={`View larger image: ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className={imageClassName} />
      </button>
      <dialog
        ref={dialogRef}
        aria-label="Enlarged image"
        className="fixed inset-0 m-auto max-h-[92vh] w-[96vw] max-w-6xl overflow-auto rounded-2xl border border-white/20 bg-navy p-4 text-white shadow-2xl backdrop:bg-navy/85 md:p-6"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm leading-6 text-white/85">{title}</p>
          <button
            type="button"
            autoFocus
            className="shrink-0 rounded-full border border-white/50 px-4 py-2 text-sm font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>
        <img
          src={src}
          alt={alt}
          className="mx-auto max-h-[78vh] w-full object-contain"
        />
      </dialog>
    </>
  );
}
