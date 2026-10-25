import type { Metadata } from "next";
import { AlumniPhotoGallery } from "@/components/AlumniPhotoGallery";
import { ExpandableImage } from "@/components/ExpandableImage";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Meet the Super Joey Foundation Philadelphia alumni, organized by graduation year.",
};

const alumniByYear = [
  {
    year: "2026",
    graduates: ["Brendan Zhang", "Brian Xu", "Chloe Zhou"],
  },
  {
    year: "2025",
    graduates: ["Bella Xie", "Liya Ma"],
  },
  {
    year: "2024",
    graduates: [
      "Andrew Dai",
      "Karen Zhou",
      "Maggie Ruan",
      "Megan Xie",
      "Neng Jiang",
      "Sophia Hu",
    ],
  },
  {
    year: "2023",
    graduates: ["Charley Wan", "Jerry Yan", "Sam Wang"],
  },
];

const alumniPhotos = [
  {
    src: "/photo/alumni01.JPG",
    alt: "Philadelphia chapter students gathered outdoors",
    caption: "Assemble sanitary kits for Ronald McDonald House, August 2021",
  },
  {
    src: "/photo/alumni03.JPG",
    alt: "Super Joey Foundation members gathered at the Winter Concert 2021",
    caption: "Super Joey Foundation members at the Winter Concert in 2021.",
  },
  {
    src: "/photo/alumni02.JPG",
    alt: "Philadelphia chapter students holding a Super Joey Foundation banner",
    caption: "Make a donation to Ronald McDonald House in June 2022",
  },
  {
    src: "/photo/alumni05.jpg",
    alt: "Super Joey Foundation volunteers at Serve with Love",
    caption: "Serve with Love at Ronald McDonald House in September 2022.",
  },
  {
    src: "/photo/alumni07.JPG",
    alt: "Super Joey Foundation volunteers at Serve with Love",
    caption: "Serve with Love at Ronald McDonald House in June 2023.",
  },
  {
    src: "/photo/alumni04.jpg",
    alt: "Philadelphia chapter members gathered at Delaware Valley Tennis Club",
    caption: "Charity Tennis Tournament at Delaware Valley Tennis Club in September 2023.",
  },
  {
    src: "/photo/alumni06.jpg",
    alt: "Philadelphia chapter members at a July 4th community sale",
    caption: "July 4th Charity Sale in 2024",
  },
];

export default function AlumniPage() {
  return (
    <>
      <PageIntro
        icon="alumni"
        kicker="Alumni"
        title="Celebrating our alumni."
        className="border-t-4 border-t-[#f4bd32]"
        titleClassName="text-[#176b67]"
      >
        <p>
          We are proud of the students who have been part of the Philadelphia
          chapter. Meet our alumni by graduation year.
        </p>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <section aria-labelledby="alumni-by-year">
          <h2 id="alumni-by-year" className="font-serif text-3xl text-[#176b67]">
            Alumni by graduation year
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {alumniByYear.map(({ year, graduates }) => (
              <section
                key={year}
                aria-labelledby={`class-${year}`}
                className="rounded-3xl border border-[#e9d59b] border-t-4 border-t-[#f4bd32] bg-[#fff8e8] p-7"
              >
                <h3 id={`class-${year}`} className="font-serif text-2xl text-[#176b67]">
                  Class of {year}
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-8">
                  {graduates.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="alumni-gallery">
          <h2 id="alumni-gallery" className="font-serif text-3xl text-[#176b67]">
            Alumni memories
          </h2>
          <AlumniPhotoGallery photos={alumniPhotos} />
        </section>

        <figure className="mt-14 overflow-hidden rounded-3xl border border-[#e9d59b] bg-[#fff8e8] p-4 shadow-[0_24px_50px_-36px_rgba(22,48,68,0.7)] md:p-6">
          <h2 className="font-serif text-3xl text-[#176b67]">Our graduates’ colleges</h2>
          <ExpandableImage
            src="/photo/alumni-college-map.png"
            alt="Map of colleges attended by Super Joey graduates across the United States"
            imageClassName="mt-5 h-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-sm leading-6 text-muted">
            Colleges represented among Super Joey graduates.
          </figcaption>
        </figure>
      </div>
    </>
  );
}
