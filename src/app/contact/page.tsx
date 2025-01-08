import Link from "next/link";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36">
      <Meteors number={20} />
      <h1 className="text-lg md:text-6xl text-center font-sans  font-bold mb-8 text-white">
        Contact Us
      </h1>
      <p className="w-1/2 mx-auto text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
        minus nesciunt, velit rem fuga. Illo quo saepe veritatis, cumque fugiat
        quidem minima nam magnam.
      </p>
      <div className="mt-5 mx-auto w-1/2">
        <input className="bg-black rounded-md py-4 px-5 w-full text-gray-200" placeholder="Your Email Address" type="text" />
        <div className="mt-5">
          <textarea rows={4} className="bg-black rounded-md py-4 px-5 w-full" placeholder="Your Message"></textarea>
        </div>
        <div className="mt-5">
          <Link className="bg-teal-600 px-6 py-4 rounded-md" href={"/send"}>Send Message</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
