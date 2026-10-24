import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivity, site, videosFor } from "@/lib/content";
import { VideoGrid } from "@/components/VideoCard";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) {
    return { title: "Activity" };
  }
  return {
    title: activity.title,
    description: activity.summary,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) {
    notFound();
  }

  const related = videosFor(activity.slug);

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
        {activity.cadence} activity
      </p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight text-navy">
        {activity.title}
      </h1>
      <p className="mt-5 max-w-3xl text-xl leading-8">{activity.summary}</p>
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-muted">
        {activity.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-serif text-3xl text-navy">Watch</h2>
          <div className="mt-6">
            <VideoGrid videos={related} />
          </div>
        </section>
      ) : null}
      <section className="mt-10 rounded-3xl bg-navy p-6 text-paper">
        <h2 className="font-serif text-3xl">Take part</h2>
        <p className="mt-3 leading-7 text-paper/80">{activity.takePart}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/join"
            className="rounded-full bg-ribbon px-5 py-3 text-center font-semibold text-navy"
          >
            Join the interest list
          </Link>
          <a
            href={site.instagramUrl}
            className="rounded-full border border-paper/30 px-5 py-3 text-center font-semibold"
          >
            Instagram
          </a>
        </div>
      </section>
      <p className="mt-8">
        <Link href="/events" className="font-semibold text-gold-deep">
          All activities
        </Link>
      </p>
    </article>
  );
}
