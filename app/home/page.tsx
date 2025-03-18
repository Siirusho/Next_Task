"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  { image: "/test1.jpg", text: "This product changed my life!" },
  { image: "/test2.jpg", text: "Amazing experience, highly recommend." },
  { image: "/test3.jpg", text: "Five stars! Would buy again." },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Landing Page</h1>
      <div className="relative w-80 h-80">
        <Image
          src={testimonials[index].image}
          alt="Testimonial"
          width={320}
          height={320}
          className="rounded-lg"
        />
      </div>
      <p className="mt-4 text-lg italic text-center">
        {testimonials[index].text}
      </p>
      <iframe
        className="mt-6 w-full max-w-lg h-64"
        src="https://www.youtube.com/embed/your-video-id"
        title="Demo Video"
        allowFullScreen
      ></iframe>
      <Link href="/auth">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Login / Sign Up
        </button>
      </Link>
    </div>
  );
}
