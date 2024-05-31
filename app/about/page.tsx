"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React, { ReactNode, FC } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Section>
        <div className="h-full md:h-screen">
          <div className="mb-[8%] mt-10 flex justify-center items-center">
            <div className="grid justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1">
                <div className="grid items-center">
                  <div className="font-bold text-6xl">Why Nex?</div>
                  <div className="pr-10 font-light leading-normal text-md py-4">
                    NEX is a multidisciplinary software engineering company with
                    over eight years of experience in the startup and enterprise
                    world, focusing on helping aspiring entrepreneurs, promising
                    startups, and growing companies build their greatest ideas.
                  </div>
                  <div className="pr-10 font-light leading-normal text-md">
                    Our inherent eye for problem-solving reflects seamlessly
                    through all aspects of our work and is a massive part of our
                    company&apos;s culture; at NEX, we encourage questions and
                    value our team of enthusiastic dreamers. We believe our
                    positive approach to work is a key differentiator in
                    NEX&apos;s success in producing quality first.
                  </div>
                </div>
                <div className="col-span-2 md:pt-0 pt-10">
                  <div>
                    <Image
                      className="rounded-2xl"
                      src="https://plus.unsplash.com/premium_photo-1677171749355-4ad563d86165?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="A photo of a serene lake in the mountains"
                      width={100}
                      height={50}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <section className="w-full">
        <div className="grid items-center h-auto">
          <div className="mt-[80px]">
            <div className="pb-6 text-2xl font-semibold ">Meet the team</div>
            <div className="text-5xl md:text-6xl w-full md:max-w-xl font-bold pb-6">
              The creative people behind NEXCreative
            </div>
            <div className="pb-4 text-xl font-regular">OUR MISSION</div>
            <div className="text-lg font-light leading-normal max-w-4xl pb-6">
              We have worked with analytics, logistics, and crypto platforms to
              innovate ideas that have a global impact. Our mission through it
              all is to give small to midsize businesses access to world-class
              software development.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2">
            <div className="w-full bg-white">
              <div>
                <div className="bg-blue-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-purple-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-green-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-rose-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-blue-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-orange-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-blue-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="bg-blue-400 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-black">
                    GusHer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
