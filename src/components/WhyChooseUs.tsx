"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Piano for Beginners",
    description:
      "Learn essential piano techniques, from hand positioning to playing simple melodies and chords. This course introduces music reading and rhythm practice, helping you build confidence to play your favorite songs and develop a strong foundation for further piano studies.",
  },
  {
    title: "Choir Practice",
    description:
      "Join a vibrant group of singers to explore vocal harmonies and improve your singing technique. Choir practice emphasizes teamwork, pitch accuracy, and dynamic performance skills, preparing participants for stunning group performances in concerts and recitals.",
  },
  {
    title: "Introduction to Music Production",
    description:
      "Dive into the exciting world of digital music creation. Learn to use DAWs, record audio, and create beats, all while understanding the fundamentals of mixing and mastering. This course is perfect for aspiring producers and music enthusiasts wanting to explore technology-driven music creation.",
  },
  {
    title: "Annual Recital",
    description:
      "Showcase your musical journey in our grand end-of-year recital. This event provides students with the opportunity to perform live, share their progress with an audience, and celebrate their hard work alongside peers, teachers, and family members.",
  },
  {
    title: "Guitar Techniques",
    description:
      "Master essential guitar skills, including strumming, fingerpicking, and chord transitions. Whether you’re playing acoustic or electric, this course covers techniques that will help you play popular songs and develop the dexterity and rhythm needed for more advanced guitar playing.",
  },
  {
    title: "Live Performance Preparation",
    description:
      "Prepare for the stage with this hands-on course focusing on stage presence, confidence, and performance skills. Learn how to connect with your audience, handle performance anxiety, and deliver captivating musical performances in live settings.",
  },
];
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  );
}

export default WhyChooseUs;
