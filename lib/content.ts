/**
 * Public copy for the Philadelphia chapter site.
 * Change text here when activities, leaders, or the donation link change.
 * Add a leader only after that person has agreed to be named on the site.
 */

export const site = {
  name: "Super Joey Foundation Philadelphia",
  email: "sjfoundationphiladelphia@gmail.com",
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
  photo: string;
};

export const activities: Activity[] = [
  {
    slug: "serve-for-love",
    title: "Serve with Love",
    cadence: "Yearly",
    invitation: "Give a day of service",
    summary:
      "A service activity where Philadelphia volunteers show up in person for families affected by childhood cancer.",
    story: [
      "Serve with Love is one of the chapter’s yearly activities. Students give time: a planned service project, organized by the Philadelphia team.",
      "The date, meeting place, and what to bring are announced before each Serve with Love. This page stays free of a date until the chapter confirms one.",
    ],
    takePart:
      "Students who want a service shift can say so on the Join page. The chapter uses that list when the next Serve with Love is scheduled.",
    photo: "/photo/ServeWithLove.png",
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
    photo: "/photo/CharityTennisTournament.png",
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
    photo: "/photo/CharityConcerts.png",
  },
  {
    slug: "july-4th-charity-sale",
    title: "July 4th Charity Sale",
    cadence: "Yearly",
    invitation: "Help the sale or donate an item",
    summary:
      "A yearly charity sale held around July 4th, with proceeds supporting the chapter’s work.",
    story: [
      "The July 4th Charity Sale is one of the Philadelphia chapter’s yearly activities. Volunteers help with the sale, and neighbors can donate items or come shop.",
      "The meeting place and the list of what to bring are posted when the chapter sets them for that year.",
    ],
    takePart:
      "People who can staff the sale, donate items, or help spread the word can say so on the Join page.",
    photo: "/photo/July4thCharitySale.png",
  },
  {
    slug: "fathers-day-team-building",
    title: "Father’s Day Team Building",
    cadence: "Yearly",
    invitation: "Join the team day",
    summary:
      "A yearly team-building gathering around Father’s Day for chapter volunteers and families.",
    story: [
      "Father’s Day Team Building brings the Philadelphia volunteers together around Father’s Day. It is a day for the team to meet, work side by side, and get ready for the rest of the year’s activities.",
      "The place and schedule are announced before each gathering. They are not posted here until the chapter confirms them.",
    ],
    takePart:
      "Students and families who want to join the team day can add their names on the Join page.",
    photo: "/photo/fathersDayPicnic.png",
  },
];

export type UpcomingEvent = {
  title: string;
  when: string;
  where: string;
  detail: string;
};

/** Confirmed future dates only. Leave this empty when nothing is scheduled yet. */
export const upcoming: UpcomingEvent[] = [
  {
    title: "Thanksgiving Serve with Love",
    when: "November 25, 2026",
    where: "Ronald McDonald House Philadelphia",
    detail: "Join us for Thanksgiving Serve with Love.",
  },
];

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
    id: "rzoSE_ys0D4",
    title: "2025 Super Joey Father's Day Picnic",
    year: "2025",
    activity: "fathers-day-team-building",
    short: true,
  },
  {
    id: "7XkiFFhk6lc",
    title: "2026 The 6th Annual Super Joey Charity Tennis Tournament",
    year: "2026",
    activity: "charity-tennis-tournament",
    short: true,
  },
  {
    id: "iVo_yG9zW1Q",
    title: "2026 The 6th Annual Spring Charity Concert",
    year: "",
    short: true,
  },
  {
    id: "ROL7AXYwCWw",
    title: "2024 Super Joey Spring Charity Concert",
    year: "2024",
    activity: "charity-concert",
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
    title: "2020 Super Joey Summer Charity Virtual Concert",
    year: "2020",
    activity: "charity-concert",
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
  photo?: string;
  photoAlt?: string;
};

export const leaders: Leader[] = [
  {
    name: "Patrick Xie",
    role: "Co-President",
    school: "Lower Moreland High School · Class of 2027",
    initials: "PX",
    bio: "Patrick enjoys math and computer science, classical piano, jazz saxophone, and competing on his varsity tennis team. He enjoys helping others by tutoring fellow students, supporting younger learners as a teaching assistant, and participating in charity events through sports, music, and service.",
    photo: "/photo/PatrickXie.jpg",
    photoAlt: "Patrick Xie portrait",
  },
  {
    name: "Richard Wan",
    role: "Co-President",
    school: "Central Bucks High School · Class of 2027",
    initials: "RW",
    bio: "Richard Wan is co-president of the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Richard Wan portrait",
  },
  {
    name: "Ellen Zhou",
    role: "Vice President",
    school: "",
    initials: "EZ",
    bio: "Ellen Zhou serves as vice president for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Ellen Zhou placeholder portrait",
  },
  {
    name: "Olivia Tan",
    role: "Vice President",
    school: "",
    initials: "OT",
    bio: "Olivia Tan serves as vice president for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Olivia Tan placeholder portrait",
  },
  {
    name: "Henry Yang",
    role: "Secretary",
    school: "",
    initials: "HY",
    bio: "Henry Yang serves as secretary for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Henry Yang placeholder portrait",
  },
  {
    name: "Jiahong Gao",
    role: "Treasurer",
    school: "",
    initials: "JG",
    bio: "Jiahong Gao serves as treasurer for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Jiahong Gao placeholder portrait",
  },
  {
    name: "Angela Chen",
    role: "Social Media Manager",
    school: "",
    initials: "AC",
    bio: "Angela Chen serves as social media manager for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Angela Chen placeholder portrait",
  },
  {
    name: "Matthew Xie",
    role: "Event Board",
    school: "",
    initials: "MX",
    bio: "Matthew Xie serves on the event board for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Matthew Xie placeholder portrait",
  },
  {
    name: "Stanley Hu",
    role: "Event Board",
    school: "",
    initials: "SH",
    bio: "Stanley Hu serves on the event board for the Philadelphia chapter.",
    photo: "/leadership/richard-wan.svg",
    photoAlt: "Stanley Hu placeholder portrait",
  },
];

export const joeyStory = [
  "Super Joey Foundation (SJF) was inspired by Joey, a courageous four-year-old known as Super Joey at Children’s Hospital Los Angeles. Born on Thanksgiving Day in 2011 in Ventura County, California, Joey was diagnosed with Stage III Wilms tumor in May 2013. Despite the challenges of cancer treatment, he faced each day with strength, a smile, and a love for superheroes, inspiring other children along the way. Though Joey passed away in February 2016, his legacy of love, joy, and courage lives on through the foundation.",
  "Founded in 2019 by Meggie Ruan and Megan Xie, the SJF Philadelphia chapter carries Joey’s spirit forward by supporting families staying at Ronald McDonald House Charities. Through community service, sports, music, and charity sales, our team brings people together to raise funds, spread kindness, and bring hope to families facing childhood cancer. Inspired by Joey’s courage, we strive to make a meaningful difference, one act of kindness at a time."
];

export const waysToHelp = [
  {
    href: "/events",
    title: "Join an activity",
    text: "The chapter’s public days include Serve with Love, tennis, a concert, the July 4th sale, and Father’s Day team building. Come when a date is set.",
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
  "Serve with Love",
  "Charity Tennis Tournament",
  "Charity Concert",
  "July 4th Charity Sale",
  "Father’s Day Team Building",
  "General volunteer",
  "School club or partnership",
] as const;

export function getActivity(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}
