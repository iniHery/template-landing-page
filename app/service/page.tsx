"use client";

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React, { ReactNode, FC } from "react";
import "../../styles/style.css";
import Image from "next/image";

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

export default function ServicePage() {
  return (
    <div>
      <section className="h-[80vh] flex justify-start items-center">
        <div className="flex justify-center items-center h-auto flex-col">
          <div className="justify-start items-center h-auto py-10">
            <div className="text-2xl font-medium">Service</div>
            <div className="max-w-[120vh] text-5xl md:text-7xl font-bold">
              We build digital products, brands & experiences.
            </div>
            <div className="max-w-[120vh] text-md md:text-lg font-light pt-10">
              NEXCreative also provides a full suite of additional services,
              from full-time development and design teams to in-depth marketing
              and customer acquisition strategies.
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="h-full md:h-full">
          <div className="pb-[8%] pt-[10%] md:pt-[2%] flex justify-center items-center">
            <div className="grid justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8">
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Web & Mobile App Development
                  </div>
                  <div className="pr-10 font-light text-2xl py-8">
                    Technology and innovation is the heart of our creativity. We
                    combine imagination and functionality for the end users by
                    creating innovative product experiences. We deliver fast,
                    reliable, and secure mobile and web applications with
                    inspiring design across mobile and desktop platforms.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Animated websites</li>
                      <li>React development</li>
                      <li>JavaScript development</li>
                    </ul>
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>iOS & Android development</li>
                      <li>Technical project management</li>
                      <li>E-commerce websites</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      className="px-8 font-bold text-md py-6 rounded-xl w-[250px]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <Image
                  src="/web.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="h-full md:h-full">
          <div className="pb-[8%] pt-[10%] md:pt-[2%] flex justify-center items-center">
            <div className="grid justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8">
                <div className="col-span-1 md:pt-0 pt-10 grid items-center">
                  <Image
                    src="/web.jpg"
                    alt="Picture of the author"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Web3 Development
                  </div>
                  <div className="pr-10 font-light text-2xl py-8">
                    With the intent of a fairer, transparent and decentralized
                    version of the internet, Web3 or blockchain technology aims
                    to put data back into the hands of the users. To that end,
                    we offer solid engineering services including crypto tokens,
                    NFT projects, and DeFi on EVM-compatible blockchains.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Crypto tokens</li>
                      <li>NFT projects</li>
                    </ul>
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Smart contract development</li>
                      <li>DeFi projects</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      className="px-8 font-bold text-md py-6 rounded-xl w-[250px]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="h-full md:h-full">
          <div className="pb-[8%] pt-[10%] md:pt-[2%] flex justify-center items-center">
            <div className="grid justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8">
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Database, Server & API
                  </div>
                  <div className="pr-10 font-light text-2xl py-8">
                    Seamless integration and high availability of services is
                    the next gold standard around the world. We provide highly
                    scalable cloud infrastructure, fast network, and secured
                    databases tailored to provide instaneous response across
                    countries and devices.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Google Cloud Platform</li>
                      <li>Custom API development</li>
                      <li>DevOps support</li>
                    </ul>
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Payment gateway integrations</li>
                      <li>Amazon Web Services support</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      className="px-8 font-bold text-md py-6 rounded-xl w-[250px]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <Image
                  src="/web.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="h-full md:h-full">
          <div className="pb-[8%] pt-[10%] md:pt-[2%] flex justify-center items-center">
            <div className="grid justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8">
                <div className="col-span-1 md:pt-0 pt-10 grid items-center">
                  <Image
                    src="/web.jpg"
                    alt="Picture of the author"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Branding & Design
                  </div>
                  <div className="pr-10 font-light text-2xl py-8">
                    A brand is more than its logo. Great branding involves great
                    storytelling. We help businesses define their personality
                    and design their visual identity. Our design expertise
                    includes high-level design prototypes, UX psychology
                    principles, brand positioning, and branding guidelines.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>UI UX design</li>
                      <li>Web & mobile design</li>
                      <li>Brand guidelines & art direction</li>
                      <li>Graphic design</li>
                    </ul>
                    <ul className="list-disc pl-4 text-lg font-semibold">
                      <li>Consulting</li>
                      <li>Custom illustrations</li>
                      <li>Brand strategy</li>
                      <li>Advertising</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      className="px-8 font-bold text-md py-6 rounded-xl w-[250px]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
