import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { activities, pastEditions, upcoming, videos } from "@/lib/content";
import { VideoGrid } from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Yearly Super Joey Foundation Philadelphia activities, including Serve for Love, tennis, a concert, the July 4th Charity Sale, and Father’s Day Team Building.",
};

export default function EventsPage() {
  return (
    <>
      <PageIntro kicker="Activities" title="Five ways the Philadelphia chapter shows up.">
        <p>
          The yearly calendar is Serve for Love, the Charity Tennis Tournament,
          the Charity Concert, the July 4th Charity Sale, and Father’s Day Team
          Building. Confirmed dates appear first. Past videos from the chapter
          are below.
        </p>
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <section>
          <h2 className="font-serif text-3xl text-navy">Upcoming</h2>
          {upcoming.length === 0 ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              No upcoming date is posted yet. When an activity has a place and a
              day, it will be listed here. Until then, the Join page is the way
              to hear about volunteer spots.
            </p>
          ) : (
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {upcoming.map((event) => (
                <li key={`${event.title}-${event.when}`} className="rounded-3xl border border-line bg-card p-6">
                  <p className="text-sm font-semibold text-gold-deep">{event.when}</p>
                  <h3 className="mt-2 font-serif text-2xl text-navy">{event.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-navy">{event.where}</p>
                  <p className="mt-3 leading-7 text-muted">{event.detail}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl text-navy">Yearly activities</h2>
          <ul className="mt-6 grid gap-6">
            {activities.map((activity) => (
              <li key={activity.slug} className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_24px_50px_-36px_rgba(22,48,68,0.7)]">
                <div className="flex min-h-[320px] items-center justify-center bg-[#edf3f8] p-3 md:min-h-[420px] md:p-5">
                  <img
                    src={activity.photo}
                    alt={activity.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    {activity.cadence} · Date to be announced
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-navy md:text-4xl">{activity.title}</h3>
                  <p className="mt-3 max-w-3xl text-lg leading-8 text-muted">
                    {activity.summary}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-navy">{activity.invitation}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link href={`/events/${activity.slug}`} className="font-semibold text-gold-deep">
                      Read more
                    </Link>
                    <Link href="/join" className="font-semibold text-navy">
                      Ask for a spot
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border border-line bg-navy p-6 text-paper md:p-8">
          <h2 className="font-serif text-3xl">Can’t make a date?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-paper/80">
            Schools, families, and local businesses can still help: host a
            drive, sponsor a tournament or concert, or send a group of
            volunteers. Tell the chapter what you can offer.
          </p>
          <Link
            href="/join"
            className="mt-5 inline-block rounded-full bg-ribbon px-5 py-3 font-semibold text-navy"
          >
            Offer help
          </Link>
        </section>

        <section id="videos" className="mt-14">
          <h2 className="font-serif text-3xl text-navy">Watch</h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">
            Tournaments, a spring charity, and Meal of Love, from the chapter
            YouTube channel.
          </p>
          <div className="mt-8">
            <VideoGrid videos={videos} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl text-navy">Past activities</h2>
          {pastEditions.length === 0 ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Written recaps can be added beside these videos when the chapter
              shares them.
            </p>
          ) : (
            <ul className="mt-6 grid gap-4">
              {pastEditions.map((edition) => (
                <li
                  key={`${edition.year}-${edition.activity}`}
                  className="rounded-3xl border border-line bg-card p-6"
                >
                  <p className="text-sm font-semibold text-gold-deep">{edition.year}</p>
                  <h3 className="mt-2 font-serif text-2xl text-navy">{edition.activity}</h3>
                  <p className="mt-3 leading-7">{edition.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
