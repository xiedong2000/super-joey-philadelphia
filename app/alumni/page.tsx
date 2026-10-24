import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Meet the Super Joey Foundation Philadelphia alumni, organized by graduation year.",
};

const alumniByYear = [
  { year: "2026", names: ["Cleo Chen", "Brain Xu", "Brandon Zhang"] },
  { year: "2025", names: ["Liya Ma", "Esabella Xie"] },
  { year: "2024", names: ["Maggie Ruan", "Sophia Hu", "Megan Xie"] },
  { year: "2023", names: ["Charlie Wan", "Sam Wang"] },
];

export default function AlumniPage() {
  return (
    <>
      <PageIntro kicker="Alumni" title="Celebrating our alumni.">
        <p>
          We are proud of the students who have been part of the Philadelphia
          chapter. Meet our alumni by graduation year.
        </p>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <section aria-labelledby="alumni-by-year">
          <h2 id="alumni-by-year" className="font-serif text-3xl text-navy">
            Alumni by graduation year
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {alumniByYear.map(({ year, names }) => (
              <section
                key={year}
                aria-labelledby={`class-${year}`}
                className="rounded-3xl border border-line bg-card p-7"
              >
                <h3 id={`class-${year}`} className="font-serif text-2xl text-navy">
                  Class of {year}
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-8">
                  {names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <figure className="mt-14 overflow-hidden rounded-3xl border border-line bg-card p-4 shadow-[0_24px_50px_-36px_rgba(22,48,68,0.7)] md:p-6">
          <h2 className="font-serif text-3xl text-navy">Our graduates’ colleges</h2>
          <img
            src="/photo/alumni-college-map.png"
            alt="Map of colleges attended by Super Joey graduates across the United States"
            className="mt-5 h-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-sm leading-6 text-muted">
            Colleges represented among Super Joey graduates.
          </figcaption>
        </figure>
      </div>
    </>
  );
}
