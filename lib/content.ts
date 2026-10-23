/**
 * Public copy for the Philadelphia chapter site.
 * Change text here when activities, officers, or the donation link change.
 * Add an officer only after that person has agreed to be named on the site.
 */

export const site = {
  name: "Super Joey Foundation Philadelphia",
  email: "youth@superjoey.org",
  phoneDisplay: "(888) 4000-2424",
  phoneHref: "tel:88840002424",
  nationalUrl: "https://www.superjoey.org/",
  aboutUrl: "https://www.superjoey.org/about-us/",
  volunteersUrl: "https://www.superjoey.org/volunteers/",
  factSheetUrl:
    "https://www.cancer.gov/types/childhood-cancers/child-adolescent-cancers-fact-sheet",
  /**
   * Approved chapter donation link. Leave this empty until the URL is ready.
   * The Donate page and header button use this value only.
   */
  donationUrl: "",
  instagramUrl: "https://www.instagram.com/superjoeyphiladelphia/",
  instagramHandle: "@superjoeyphiladelphia",
  youtubeUrl: "https://www.youtube.com/@superjoeyfoundationphilade1967",
  youtubeLabel: "YouTube channel",
} as const;

export function hasDonationLink() {
  return site.donationUrl.startsWith("http");
}

export type Activity = {
  slug: string;
  title: string;
  cadence: string;
  invitation: string;
  summary: string;
  story: string[];
  takePart: string;
};

export const activities: Activity[] = [
  {
    slug: "serve-for-love",
    title: "Serve for Love",
    cadence: "Yearly",
    invitation: "Give a day of service",
    summary:
      "A service activity where Philadelphia volunteers show up in person for families affected by childhood cancer.",
    story: [
      "Serve for Love is one of the chapter’s yearly activities. Students give time: a planned service project, organized by the Philadelphia team.",
      "The date, meeting place, and what to bring are announced before each Serve for Love. This page stays free of a date until the chapter confirms one.",
    ],
    takePart:
      "Students who want a service shift can say so on the Join page. The chapter uses that list when the next Serve for Love is scheduled.",
  },
  {
    slug: "charity-tennis-tournament",
    title: "Charity Tennis Tournament",
    cadence: "Yearly",
    invitation: "Play, help, or sponsor",
    summary:
      "A yearly tennis tournament that brings players, families, and supporters together for the chapter’s charity work.",
    story: [
      "The Charity Tennis Tournament is the chapter’s yearly event on the court. Players compete, and other people can help the day run or support it as sponsors.",
      "Registration, the venue, and sponsorship details are announced before the tournament. Those details are not posted here yet.",
    ],
    takePart:
      "Players, day-of helpers, and people who want to sponsor the tournament can join the interest list.",
  },
  {
    slug: "charity-concert",
    title: "Charity Concert",
    cadence: "Yearly",
    invitation: "Perform or help the night",
    summary:
      "A yearly concert the chapter organizes so the community can gather around music and the foundation’s mission.",
    story: [
      "The Charity Concert is the chapter’s yearly music event. It is a public evening to meet the volunteers and hear the year’s work set to music.",
      "The lineup, venue, and tickets are announced before each concert. Posters and recordings can be added here when the chapter shares them. Until then, video lives on the chapter YouTube channel.",
    ],
    takePart:
      "Musicians and volunteers who can help with the evening can note that on the Join page.",
  },
];

export type UpcomingEvent = {
  title: string;
  when: string;
  where: string;
  detail: string;
};

/** Confirmed future dates only. Leave this empty when nothing is scheduled yet. */
export const upcoming: UpcomingEvent[] = [];

export type PastEdition = {
  year: string;
  activity: string;
  summary: string;
};

/** Real past events only. Add a year, the activity name, and a short true summary. */
export const pastEditions: PastEdition[] = [];

export type ChapterVideo = {
  id: string;
  title: string;
  year: string;
  activity?: string;
  short: boolean;
};

export const videos: ChapterVideo[] = [
  {
    id: "mkt-2DY0yuM",
    title: "2022 Super Joey Foundation Meal of Love at McDonald House",
    year: "2022",
    short: false,
  },
  {
    id: "AvNklq2YXi4",
    title: "2025 Super Joey Foundation Tennis Tournament",
    year: "2025",
    activity: "charity-tennis-tournament",
    short: false,
  },
  {
    id: "7XkiFFhk6lc",
    title: "2026 The 6th Annual Super Joey Philadelphia Charity Tennis",
    year: "2026",
    activity: "charity-tennis-tournament",
    short: true,
  },
  {
    id: "iVo_yG9zW1Q",
    title: "6th Annual Spring Charity",
    year: "",
    short: true,
  },
  {
    id: "5UwBuHCdqXc",
    title: "2022 Meal of Love",
    year: "2022",
    short: true,
  },
  {
    id: "AnlRqzmbj_Q",
    title: "2022 Super Joey Foundation Tennis Tournament",
    year: "2022",
    activity: "charity-tennis-tournament",
    short: false,
  },
];

export function videosFor(activity: string) {
  return videos.filter((video) => video.activity === activity);
}

export type Leader = {
  name: string;
  role: string;
  school: string;
  initials: string;
  bio: string;
};

export const leaders: Leader[] = [
  {
    name: "Patrick Xie",
    role: "Co-President",
    school: "Lower Moreland High School",
    initials: "PX",
    bio: "Patrick Xie is co-president of Super Joey Foundation Philadelphia. The Super Joey Foundation lists him as a Philadelphia chapter team leader.",
  },
  {
    name: "Richard Wan",
    role: "Co-President",
    school: "Central Bucks High School",
    initials: "RW",
    bio: "Richard Wan is co-president of the Philadelphia chapter. The Super Joey Foundation lists him as a Philadelphia chapter team leader.",
  },
];

export const joeyStory = [
  "Super Joey Foundation was inspired by Joey, a courageous four-year-old known as Super Joey at Children’s Hospital Los Angeles.",
  "He was born in Ventura County, California, on Thanksgiving Day in 2011. In May 2013 he was diagnosed with Stage III Wilms tumor. He loved superheroes, and through treatment he stayed strong, smiled, and encouraged other patients.",
  "Joey died in February 2016. His life was short and full of joy. The foundation carries his love and courage on for children and families still facing cancer. In Philadelphia, students do that by serving, playing, and making music.",
];

export const waysToHelp = [
  {
    href: "/events",
    title: "Join an activity",
    text: "Serve for Love, the charity tennis tournament, and the charity concert are the chapter’s public days. Come when a date is set.",
  },
  {
    href: "/join",
    title: "Volunteer your time",
    text: "Students can help plan, play, perform, or bring a school club into the chapter’s work.",
  },
  {
    href: "/donate",
    title: "Give what you can",
    text: "Gifts support the chapter’s activities and the foundation’s care for families facing childhood cancer.",
  },
];

export const facts = [
  {
    value: "14,910",
    text: "Estimated U.S. cancer diagnoses in 2024 among children and adolescents ages 0 to 19.",
  },
  {
    value: "1,590",
    text: "Estimated deaths from the disease in that same age group in 2024.",
  },
  {
    value: "After infancy",
    text: "Among children in the United States, cancer is the leading cause of death by disease after infancy.",
  },
];

export const survivalNote =
  "For children and adolescents diagnosed in 2013–2019, five-year survival was about 83% to 88%, depending on age. That progress is real, and treatment can still stretch on for a long time, disrupting school, work, and everyday family life.";

export const joinInterests = [
  "Serve for Love",
  "Charity Tennis Tournament",
  "Charity Concert",
  "General volunteer",
  "School club or partnership",
] as const;

export function getActivity(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}
