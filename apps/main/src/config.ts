import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://reals-blog.vercel.app/",
  author: "Ben Laird",
  desc: "Liberty University's MATH 431: Real Analysis class in blog format!",
  title: "Reals Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE: Intl.LocalesArgument = []; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ben-laird/",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:bclaird@liberty.edu",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
];
