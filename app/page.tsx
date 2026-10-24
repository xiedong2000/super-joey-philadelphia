import Link from "next/link";
import {
  activities,
  facts,
  joeyStory,
  leaders,
  site,
  survivalNote,
  upcoming,
  videos,
  waysToHelp,
} from "@/lib/content";
import { VideoGrid } from "@/components/VideoCard";

const cardTones = ["bg-sun", "bg-coral", "bg-sky"];

const ticker = [
  "No child should fight alone",
  "Philadelphia cares",
  "Hope lives here",
  "Serve with Love",
  "Charity tennis",
  "Charity concert",
  "July 4th sale",
  "Father’s Day team day",
];

export default function HomePage() {
  const loop = [...ticker, ...ticker];

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-4 px-5 pb-4 pt-0 md:grid-cols-2 md:gap-6 md:pb-8 md:pt-0">
          <div>
            <p className="flex items-center text-xs font-bold uppercase tracking-[0.16em] text-navy">
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-ribbon shadow-[0_0_0_6px_#f22e3224]" />
              Philadelphia chapter
            </p>
            <h1 className="mt-2 font-serif text-[clamp(3.4rem,7vw,6.6rem)] leading-[0.86] tracking-[-0.045em] text-navy">
              Open hearts.
              <span className="mt-1 block italic text-ribbon">Philadelphia</span>
              <span className="block italic text-ribbon">action.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-navy/80">
              Student volunteers in Philadelphia show up for children and
              families facing cancer, through service, sport, music, and
              community days.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link
                href="/join"
                className="inline-flex min-h-12 items-center border border-navy bg-navy px-5 font-bold text-white shadow-[4px_4px_0_#f22e32] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#f22e32]"
              >
                Join the chapter
              </Link>
              <Link href="/events" className="font-bold text-navy underline decoration-ribbon underline-offset-4">
                See how to help
              </Link>
            </div>
          </div>

          <div className="relative grid min-h-[300px] place-items-center md:min-h-[360px]">
            <div className="sunburst absolute aspect-square w-[min(78vw,460px)] rounded-full opacity-90" />
            <figure className="relative z-10 flex w-[min(72vw,430px)] rotate-2 items-center justify-center overflow-hidden rounded-full border border-navy/20 bg-card p-4 shadow-[12px_16px_0_#171a2b14]">
              <img
                src="/photo/SuperJoeyHomeIcon.png"
                alt="Super Joey"
                className="mx-auto aspect-square w-full max-w-[500px] rounded-full object-contain"
              />
            </figure>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-navy text-white">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex items-center py-3.5 text-xs font-bold uppercase tracking-[0.14em]"
              aria-hidden={copy === 1}
            >
              {loop.map((phrase, index) => (
                <span key={`${copy}-${index}`} className="px-4">
                  {phrase}
                  <span className="pl-4 text-sun">✦</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy md:col-span-3">
            How you can show up
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.92] tracking-[-0.04em] text-navy md:col-span-6">
            Make a difference <span className="italic text-ribbon">in Philadelphia.</span>
          </h2>
          <p className="text-navy/80 md:col-span-3">
            Come for an afternoon, bring a skill, or help fund the work. There
            is a place for students, families, and schools.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {waysToHelp.map((way, index) => (
            <li key={way.href}>
              <Link
                href={way.href}
                className={`flex min-h-80 flex-col border border-navy p-6 transition hover:-translate-y-1 hover:shadow-[7px_8px_0_#171a2b] ${cardTones[index]}`}
              >
                <span className="self-end text-xs font-bold tracking-[0.14em]">
                  0{index + 1}
                </span>
                <span className="mt-10 flex h-14 w-14 items-center justify-center rounded-full border border-navy text-lg">
                  {index === 0 ? "→" : index === 1 ? "+" : "♥"}
                </span>
                <span className="mt-8 font-serif text-3xl leading-none text-navy">
                  {way.title}
                </span>
                <span className="mt-3 leading-7 text-navy/80">{way.text}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.04em] text-navy md:col-span-5">
            One child.
            <span className="mt-1 block italic text-ribbon">A city’s answer.</span>
          </h2>
          <div className="space-y-4 text-lg leading-8 md:col-span-7">
            {joeyStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <a
                className="font-bold text-navy underline decoration-ribbon underline-offset-4"
                href={site.aboutUrl}
              >
                Read Joey’s story on the national site
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <h2 className="max-w-3xl font-serif text-[clamp(2.6rem,4.5vw,4rem)] leading-[0.95] tracking-[-0.04em] text-navy">
          Childhood cancer is rare.{" "}
          <span className="italic text-ribbon">The weight on a family is not.</span>
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {facts.map((fact) => (
            <li key={fact.value} className="border border-navy bg-card p-6">
              <p className="font-serif text-5xl tracking-[-0.04em] text-ribbon">{fact.value}</p>
              <p className="mt-3 leading-7 text-navy/80">{fact.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl leading-7 text-muted">{survivalNote}</p>
        <p className="mt-3">
          <a
            className="font-bold underline decoration-ribbon underline-offset-4"
            href={site.factSheetUrl}
          >
            National Cancer Institute fact sheet
          </a>
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-5xl tracking-[-0.04em] text-navy">Watch</h2>
          <Link href="/events#videos" className="font-bold underline decoration-ribbon underline-offset-4">
            All videos
          </Link>
        </div>
        <div className="mt-8">
          <VideoGrid videos={videos.slice(0, 2)} />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-5xl tracking-[-0.04em] text-navy">
              The Philadelphia year
            </h2>
            <Link href="/events" className="font-bold underline decoration-ribbon underline-offset-4">
              All activities
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <li key={activity.slug} className="border border-navy bg-paper p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-deep">
                  {upcoming.length === 0 ? "Date to be announced" : activity.cadence}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-navy">{activity.title}</h3>
                <p className="mt-2 text-navy/75">{activity.invitation}</p>
                <Link href={`/events/${activity.slug}`} className="mt-5 inline-block font-bold">
                  Read more
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20">
        <h2 className="font-serif text-5xl tracking-[-0.04em] text-navy">Co-presidents</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {leaders.map((leader) => (
            <li key={leader.name} className="flex items-center gap-4 border border-navy bg-card p-6">
              {leader.photo ? (
                <img
                  src={leader.photo}
                  alt={leader.photoAlt ?? `${leader.name} portrait`}
                  className="h-28 w-28 rounded-2xl border border-navy/10 bg-white object-contain p-1 sm:h-32 sm:w-32"
                />
              ) : (
                <span className="flex h-20 w-20 items-center justify-center bg-sun font-serif text-xl text-navy">
                  {leader.initials}
                </span>
              )}
              <div>
                <h3 className="font-serif text-3xl text-navy">{leader.name}</h3>
                <p className="font-bold text-gold-deep">{leader.role}</p>
                <p className="text-sm text-muted">{leader.school}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/leadership" className="mt-6 inline-block font-bold underline decoration-ribbon underline-offset-4">
          Meet the officers
        </Link>
      </section>

      <section className="bg-navy text-white">
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 overflow-hidden px-5 py-16 md:grid-cols-2">
          <div
            className="pointer-events-none absolute -right-24 -top-24 hidden h-80 w-80 rounded-full border-[48px] border-ribbon md:block"
            aria-hidden="true"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun">
              Foundation
            </p>
            <p className="mt-3 font-serif text-4xl">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <a className="mt-4 inline-block font-bold underline decoration-sun underline-offset-4" href={site.nationalUrl}>
              National website
            </a>
          </div>
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun">
              Philadelphia
            </p>
            <p className="mt-3 font-serif text-3xl [overflow-wrap:anywhere] sm:text-4xl">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="mt-4 font-serif text-3xl">Follow the chapter</p>
            <p className="mt-3">
              <a className="font-bold underline decoration-sun underline-offset-4" href={site.instagramUrl}>
                Instagram {site.instagramHandle}
              </a>
            </p>
            <p className="mt-2">
              <a className="font-bold underline decoration-sun underline-offset-4" href={site.youtubeUrl}>
                {site.youtubeLabel}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
