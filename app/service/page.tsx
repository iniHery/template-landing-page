"use client";

import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React, { ReactNode, FC } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

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
      <Section>
        <div className="h-[80vh] flex justify-start items-center">
          <div className="flex justify-center items-center h-auto flex-col">
            <div className="justify-start items-center h-auto py-10">
              <div className="text-2xl font-medium">Service</div>
              <div className="max-w-[120vh] text-5xl md:text-7xl font-bold">
                We build digital products, brands & experiences.
              </div>
              <div className="max-w-[120vh] leading-normal text-md md:text-lg font-light pt-10">
                NEXCreative also provides a full suite of additional services,
                from full-time development and design teams to in-depth
                marketing and customer acquisition strategies.
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
                <div className="block md:hidden">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-web-design-illustration_52683-60701.jpg?t=st=1716174427~exp=1716178027~hmac=8f6ae5164f7a81d0686fd2d8cc0c81be62309c4b34394b3bf1b838b44e1d0ab9&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl ">
                    Web & Mobile App Development
                  </div>
                  <div className="pr-10 font-light leading-normal text-lg md:text-2xl py-8">
                    Technology and innovation is the heart of our creativity. We
                    combine imagination and functionality for the end users by
                    creating innovative product experiences. We deliver fast,
                    reliable, and secure mobile and web applications with
                    inspiring design across mobile and desktop platforms.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2 ">
                    <ul className="list-disc pl-4 leading-normal text-md md:text-lg font-semibold">
                      <li>Animated websites</li>
                      <li>React development</li>
                      <li>JavaScript development</li>
                    </ul>
                    <ul className="list-disc pl-4 leading-normal text-md md:text-lg font-semibold">
                      <li>iOS & Android development</li>
                      <li>Technical project management</li>
                      <li>E-commerce websites</li>
                    </ul>
                  </div>

                  <div>
                    <Button
                      href={siteConfig.links.whatsapp}
                      className="px-8 font-bold text-md py-6 shadow-lg rounded-full w-[180px] md:w-[250px] bg-[#F78365]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-web-design-illustration_52683-60701.jpg?t=st=1716174427~exp=1716178027~hmac=8f6ae5164f7a81d0686fd2d8cc0c81be62309c4b34394b3bf1b838b44e1d0ab9&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
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
                <div className="col-span-1 md:pt-0 pt-10 grid items-center">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-web-search-illustration_52683-60699.jpg?t=st=1716174487~exp=1716178087~hmac=cd0220befb9762231ab3ddc0ba7683d60eab75c1bc9c6b43b5baec3f52bf8e58&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Web3 Development
                  </div>
                  <div className="pr-10 font-light text-lg md:text-xl py-8">
                    With the intent of a fairer, transparent and decentralized
                    version of the internet, Web3 or blockchain technology aims
                    to put data back into the hands of the users. To that end,
                    we offer solid engineering services including crypto tokens,
                    NFT projects, and DeFi on EVM-compatible blockchains.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>Crypto tokens</li>
                      <li>NFT projects</li>
                    </ul>
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>Smart contract development</li>
                      <li>DeFi projects</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      href={siteConfig.links.whatsapp}
                      className="px-8 font-bold text-md py-6 shadow-lg rounded-full w-[180px] md:w-[250px] bg-[#F78365]"
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
                <div className="md:hidden block">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-online-shopping-illustration_52683-60704.jpg?t=st=1716174965~exp=1716178565~hmac=8bd8ce397410dcb5255f51872745deb5b75ed70ffbe1b8a6b725e1e9d29364ea&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Database, Server & API
                  </div>
                  <div className="pr-10 font-light text-lg md:text-xl py-8">
                    Seamless integration and high availability of services is
                    the next gold standard around the world. We provide highly
                    scalable cloud infrastructure, fast network, and secured
                    databases tailored to provide instaneous response across
                    countries and devices.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>Google Cloud Platform</li>
                      <li>Custom API development</li>
                      <li>DevOps support</li>
                    </ul>
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>Payment gateway integrations</li>
                      <li>Amazon Web Services support</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      href={siteConfig.links.whatsapp}
                      className="px-8 font-bold text-md py-6 shadow-lg rounded-full w-[250px] bg-[#F78365]"
                      color="primary"
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-online-shopping-illustration_52683-60704.jpg?t=st=1716174965~exp=1716178565~hmac=8bd8ce397410dcb5255f51872745deb5b75ed70ffbe1b8a6b725e1e9d29364ea&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
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
                <div className="col-span-1 md:pt-0 pt-10 grid items-center">
                  <Image
                    src="https://img.freepik.com/free-vector/organic-flat-contact-us-illustration_52683-60703.jpg?t=st=1716174917~exp=1716178517~hmac=dfb50281a974c9a76b629c03f45c941a0add2ce71206387f86c44fa1ea787c9b&w=1060"
                    alt="A photo of a serene lake in the mountains"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="grid items-center">
                  <div className="font-bold text-4xl md:text-6xl">
                    Branding & Design
                  </div>
                  <div className="pr-10 font-light text-lg md:text-xl py-8">
                    A brand is more than its logo. Great branding involves great
                    storytelling. We help businesses define their personality
                    and design their visual identity. Our design expertise
                    includes high-level design prototypes, UX psychology
                    principles, brand positioning, and branding guidelines.
                  </div>
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>UI UX design</li>
                      <li>Web & mobile design</li>
                      <li>Brand guidelines & art direction</li>
                      <li>Graphic design</li>
                    </ul>
                    <ul className="list-disc pl-4 text-md md:text-lg font-semibold">
                      <li>Consulting</li>
                      <li>Custom illustrations</li>
                      <li>Brand strategy</li>
                      <li>Advertising</li>
                    </ul>
                  </div>
                  <div>
                    <div>
                      <Button
                        href={siteConfig.links.whatsapp}
                        className="px-8 font-bold text-md py-6 shadow-lg rounded-full w-[180px] md:w-[250px] bg-[#F78365]"
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
        </div>
      </Section>
    </div>
  );
}
