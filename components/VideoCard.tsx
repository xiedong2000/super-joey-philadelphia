import type { ChapterVideo } from "@/lib/content";

export function VideoCard({ video }: { video: ChapterVideo }) {
  return (
    <figure className={video.short ? "mx-auto w-full max-w-xs" : "w-full"}>
      <div className={video.short ? "aspect-[9/16] bg-navy" : "aspect-video bg-navy"}>
        <iframe
          className="h-full w-full border border-navy"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3">
        {video.year ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-deep">
            {video.year}
          </p>
        ) : null}
        <p className="font-serif text-2xl leading-tight text-navy">{video.title}</p>
      </figcaption>
    </figure>
  );
}

export function VideoGrid({ videos }: { videos: ChapterVideo[] }) {
  return (
    <ul className="grid items-start gap-8 md:grid-cols-2">
      {videos.map((video) => (
        <li key={video.id} className={video.short ? "" : "md:col-span-2"}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  );
}
