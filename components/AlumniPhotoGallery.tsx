"use client";

import { ExpandableImage } from "@/components/ExpandableImage";

type AlumniPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export function AlumniPhotoGallery({ photos }: { photos: AlumniPhoto[] }) {
  return (
    <>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-3xl border border-[#e9d59b] bg-[#fff8e8] p-4 shadow-[0_24px_50px_-36px_rgba(22,48,68,0.7)]"
          >
            <ExpandableImage
              src={photo.src}
              alt={photo.alt}
              title={photo.caption}
              imageClassName="h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-sm leading-6 text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
