import auctionhouse from "../assets/auctionhouse.jpg";
import ecom from "../assets/ecom.jpg";
import holidaze from "../assets/holidaze.jpg";

export const projects = [
  {
    id: "frameworks",
    name: "JS Frameworks Assignment – Ecom Project",
    image: ecom,
    github: "https://github.com/PatrickRoethe/ecom-project",
    website: "https://ecom-project-noroff.netlify.app",
    teaser:
      "A minimal e-commerce frontend built with React and Tailwind, featuring product listing, filtering, and a basic cart system.",
  },
  {
    id: "semester",
    name: "Semester Project 2 – Auction House",
    image: auctionhouse,
    github: "https://github.com/PatrickRoethe/project-exam-auction-website",
    website: "https://project-exam-auction-website.netlify.app",
    teaser:
      "A frontend auction platform where users can register, list items, and place bids. Built with React and integrates with a public API.",
  },
  {
    id: "exam",
    name: "Exam Project 2 – Holidaze",
    image: holidaze,
    github: "https://github.com/PatrickRoethe/holidaze-project-exam",
    website: "https://holidaazee.netlify.app",
    teaser:
      "A complete booking platform for exploring and managing venues. Built with React, Zustand and Tailwind with full API integration.",
  },
];
