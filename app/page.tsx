"use client";

import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const animation = { duration: 40000, easing: (t: number) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 100,
    },
  });

  const [sliderRun] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });

  const faq1 = (
    <p className="text-gray-700 leading-normal font-light">
      Usually we would set up an introductory meeting to understand your idea
      better. This can be done via online. During the video call, it would be
      useful to inform us of your expectations and define the goals of the
      website or mobile app you are about to make with us. Afterwards, we will
      write a technical design documentation which will be our guide throughout
      the design and development process. [Contact us]
    </p>
  );

  const faq2 = (
    <p className="text-gray-700 leading-normal font-light">
      We build all our sites using React and NextJS (server side react). Check
      out on what we can do to build [your custom website]
    </p>
  );

  const faq3 = (
    <p className="text-gray-700 leading-normal font-light">
      For over 8 years of experience helping startups grow, Yello and Komang
      (CEO & Founder) has been involved in the development of several
      best-in-class companies across Indonesia and the United States.
    </p>
  );

  const faq4 = (
    <p className="text-gray-700 leading-normal font-light">
      Yes we do. You can hire us based on your needs. Nex provides backend
      engineer, frontend engineer, QA engineer, and project manager. Hiring
      remote development combines low-cost software development and
      highly-skilled employees.
    </p>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] max-w-full md:py-6">
        <div className="container mx-auto h-[80vh] flex justify-start items-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-start items-center">
                <div className="block">
                  <div className="max-w-xl font-bold md:text-5xl text-5xl text-start">
                    Nex gives small to midsize businesses access to world class
                    software & design
                  </div>
                  <div className="pt-[20%] md:pt-10">
                    <Button
                      href={siteConfig.links.whatsapp}
                      color="primary"
                      variant="shadow"
                      className="flex items-center shadow-[#6B3EF1] bg-[#6B3EF1] text-md md:text-lg font-medium py-6 px-8 md:px-10 "
                    >
                      Consultation Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-2 hidden md:block">
                <Image
                  src="https://img.freepik.com/free-vector/internship-job-illustration_52683-49387.jpg?t=st=1716120164~exp=1716123764~hmac=3cef0167cab941719c6a0b8018bd24084a3e7fb01bc9ed01119e4a2e27950523&w=1800"
                  alt="A photo of a serene lake in the mountains"
                  width={100}
                  height={50}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* Service */}
      <section className="relative h-full  flex flex-col md:mt-[6%] md:py-10">
        <div className="md:h-full h-auto flex justify-center items-start">
          <div className="container">
            <div className="font-[700] md:text-4xl md:leading-normal leading-9 text-[34px] text-center">
              Building apps & branding visions across a range of industries,
              markets, and countries through 4 core services:
            </div>
            <div className="pt-[50px] max-w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 grid-cols-1 gap-4">
                <div className="flex justify-center rounded-2xl transition duration-300 ease-in-out transform hover:shadow-lg">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[46vh] shadow-none border space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641]">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6 leading-normal">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>
                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
                          <a href="/service">
                            <Button className="border-[#FFA712] font-medium rounded-full w-auto border-2 text-[#FFA712] hover:bg-[#FFA712] bg-transparant hover:text-white">
                              Learn More
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.2"
                                    d="m18 8l4 4m0 0l-4 4m4-4H2"
                                  />
                                </svg>
                              </div>
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center rounded-2xl transition duration-300 ease-in-out transform hover:shadow-lg">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[46vh] shadow-none border space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold flex md:flex-col text-xl md:text-2xl text-[#F66641]">
                          <div>Branding & </div>
                          <div className="pl-1 md:pl-0">Design</div>
                        </div>
                        <div className="h-auto font-light text-lg pt-6 leading-normal">
                          We offer web3 and solidity engineering services for
                          Crypto Tokens, NFT projects, and DeFi on
                          EVM-compatible blockchains.
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
                          <a href="/service">
                            <Button className="border-[#FFA712] font-medium rounded-full w-auto border-2 text-[#FFA712] hover:bg-[#FFA712] bg-transparant hover:text-white">
                              Learn More
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.2"
                                    d="m18 8l4 4m0 0l-4 4m4-4H2"
                                  />
                                </svg>
                              </div>
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center rounded-2xl transition duration-300 ease-in-out transform hover:shadow-lg">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[46vh] shadow-none border space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641] flex md:block">
                          <div>Database, Server &</div>
                          <div className="pl-1 md:pl-0">API</div>
                        </div>
                        <div className="h-auto font-light text-lg pt-6 leading-normal">
                          We provide highly scalable network & realtime
                          infrastructure that provides fast respons times across
                          countries, devices & keeps your intellectual property
                          safe.
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
                          <Link href="/service">
                            <Button className="border-[#FFA712] font-medium rounded-full w-auto border-2 text-[#FFA712] hover:bg-[#FFA712] bg-transparant hover:text-white">
                              Learn More
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.2"
                                    d="m18 8l4 4m0 0l-4 4m4-4H2"
                                  />
                                </svg>
                              </div>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center rounded-2xl transition duration-300 ease-in-out transform hover:shadow-lg">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[46vh] shadow-none border space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641] flex md:block">
                          <div>Branding &</div>
                          <div className="pl-1 md:pl-0">Design</div>
                        </div>
                        <div className="h-auto font-light text-lg pt-6 leading-normal">
                          We offer a wide range of design services centered
                          around High-level Design Prototypes, UX Psychology
                          Principles, and Brand Positioning
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
                          <Link href="/service">
                            <Button className="border-[#FFA712] font-medium rounded-full w-auto border-2 text-[#FFA712] hover:bg-[#FFA712] bg-transparant hover:text-white">
                              Learn More
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.2"
                                    d="m18 8l4 4m0 0l-4 4m4-4H2"
                                  />
                                </svg>
                              </div>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service */}

      {/* Custom App Develop */}
      <section className="relative h-full md:py-0 py-20 md:mt-20 flex flex-col">
        <div className="w-full flex justify-center items-center">
          <div className="font-bold text-5xl md:text-6xl md:mb-10 mt-[20%] md:mt-[2%] ld:mt-[0%] text-center">
            Custom app development
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[60%] hidden md:block">
            <Image
              src="https://img.freepik.com/free-vector/check-out-online-media-mailing-cartoon-style-illustration_1150-37507.jpg?t=st=1716121204~exp=1716124804~hmac=a6ac384c2b48771739c6e1572c53563774500842b5ef6b554b8b5ad4cab908d3&w=1060"
              alt="A photo of a serene lake in the mountains"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-4">
          <div className="flex justify-center pt-20 md:pt-6">
            <div className="w-full md:w-[250px] lg:w-full h-[58vh] md:h-[64vh] lg:h-[54vh] space-y-5 p-4">
              <div className="grid grid-rows-2">
                <div>
                  <div className="grid justify-center items-center">
                    <div className="h-[20vh] w-full mx-auto px-6 md:px-10 rounded-3xl bg-[#9FAAF4] grid justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="96"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M7.5 16.039L4.688 19.5L3 18.346m4.5-8.077l-2.812 3.462L3 12.577M7.5 4.5L4.688 7.962L3 6.808M11 17.5h10M11 12h10M11 6.5h10"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold text-4xl md:text-4xl text-center my-8 text-[#F66641]">
                    Planning
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-light text-center text-xl md:text-xl lg:text-xl">
                  <div className="leading-normal">
                    We proudly follow agile best practices, and ensure that your
                    project is built with the correct tools and a competent
                    team.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-0 md:pt-6">
            <div className="w-full md:w-[250px] lg:w-full h-[58vh] md:h-[64vh] lg:h-[54vh] space-y-5 p-4">
              <div className="grid grid-rows-2">
                <div>
                  <div className="grid justify-center items-center">
                    <div className="h-[20vh] w-full mx-auto px-6 md:px-10 rounded-3xl bg-[#FBCB78] grid justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="96"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="m17.09 7.974l.23.23c1.789 1.79 2.683 2.684 2.683 3.796c0 1.112-.894 2.007-2.683 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12c0 1.112.895 2.007 2.685 3.796l.23.23"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="font-semibold text-[#F66641] text-4xl md:text-4xl text-center my-8">
                    Optimization
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-light text-center text-xl md:text-xl lg:text-xl">
                  <div className="leading-normal">
                    Our experienced engineering team ensures your application
                    has optimal load times and follows modern best practices.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-0 md:pt-6">
            <div className="w-full md:w-[250px] lg:w-full h-[58vh] md:h-[64vh] lg:h-[54vh] space-y-5 p-4">
              <div className="grid grid-rows-2">
                <div>
                  <div className="grid justify-center items-center">
                    <div className="h-[20vh] w-full mx-auto px-6 md:px-10 rounded-3xl bg-[#faa18a] grid justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="96"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M3 6.75c0-1.768 0-2.652.55-3.2C4.097 3 4.981 3 6.75 3c1.768 0 2.652 0 3.2.55c.55.548.55 1.432.55 3.2c0 1.768 0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55c-1.768 0-2.652 0-3.2-.55C3 9.403 3 8.519 3 6.75m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55c1.768 0 2.652 0 3.2.55c.55.548.55 1.432.55 3.2c0 1.768 0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55c-1.768 0-2.652 0-3.2-.55C3 19.91 3 19.026 3 17.258M13.5 6.75c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55c1.768 0 2.652 0 3.2.55c.55.548.55 1.432.55 3.2c0 1.768 0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55c-1.768 0-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55c1.768 0 2.652 0 3.2.55c.55.548.55 1.432.55 3.2c0 1.768 0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55c-1.768 0-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold text-[#F66641] text-4xl md:text-4xl text-center my-8">
                    Synergy
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-light text-center text-xl md:text-xl lg:text-xl">
                  <div className="leading-normal">
                    We understand that projects are not one time things, and
                    work closely with our clients to ensure a smooth code
                    transfer and launch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Custom App Develop */}

      {/* Portofolio */}
      <section className="relative h-full flex flex-col md:mt-[6%] md:py-10">
        <div className="text-center font-bold text-4xl md:text-6xl">
          Recent works
        </div>
        <div ref={sliderRef} className="keen-slider py-10">
          <div className="keen-slider__slide h-full text-center number-slide1 p-4">
            <div className="flex justify-center ">
              <Card
                className="w-full md:w-full h-auto space-y-5 p-4 border-1 border-[#FFA712]"
                radius="lg"
              >
                <div className="p-4 grid ">
                  <div>
                    <div className="font-light text-2xl pb-4 text-[#FFA712]">
                      Web & Mobile Development, Branding & Design
                    </div>
                  </div>
                  <div className="block md:hidden pt-10 md:pt-0">
                    <Image
                      className="rounded-xl"
                      src="/port2.png"
                      alt="Picture of the author"
                      width={700}
                      height={700}
                    />
                  </div>
                  <div className="h-full grid md:grid-cols-2 grid-cols-1 pt-4 md:pt-10 pb-6 justify-center items-center">
                    <div className="grid">
                      <div className="font-bold text-xl md:text-4xl mb-10 text-center md:text-start">
                        Bali Jadma Tour - Agent Tour
                      </div>
                      <div className="h-auto font-light text-lg text-gray-500 text-center md:text-start md:pr-10 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <Image
                        className="rounded-xl"
                        src="/port2.png"
                        alt="Picture of the author"
                        width={700}
                        height={700}
                      />
                    </div>
                  </div>
                  <div className="block md:flex md:justify-between md:items-center">
                    <div className="text-center md:text-start">
                      <div className="font-regular text-[#FFA712]">
                        balijadmatour.com
                      </div>
                    </div>
                    <div className="flex justify-center pt-8 md:pt-0 gap-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="gray"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="m6 8l-4 4m0 0l4 4m-4-4h20"
                        />
                      </svg>
                      <p className="text-gray-500">Slide</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="gray"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="m18 8l4 4m0 0l-4 4m4-4H2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="keen-slider__slide h-full text-center number-slide1 p-4">
            <div className="flex justify-center ">
              <Card
                className="w-full md:w-full h-auto space-y-5 p-4 border-1 border-[#FFA712]"
                radius="lg"
              >
                <div className="p-4 grid ">
                  <div>
                    <div className="font-light text-2xl pb-4 text-[#FFA712]">
                      Web & Mobile Development, Branding & Design
                    </div>
                  </div>
                  <div className="block md:hidden pt-10 md:pt-0">
                    <Image
                      className="rounded-xl"
                      src="/port2.png"
                      alt="Picture of the author"
                      width={700}
                      height={700}
                    />
                  </div>
                  <div className="h-full grid md:grid-cols-2 grid-cols-1 pt-4 md:pt-10 pb-6 justify-center items-center">
                    <div className="grid">
                      <div className="font-bold text-xl md:text-4xl mb-10 text-center md:text-start">
                        Bali Jadma Tour - Agent Tour
                      </div>
                      <div className="h-auto font-light text-lg text-gray-500 text-center md:text-start md:pr-10 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <Image
                        className="rounded-xl"
                        src="/port2.png"
                        alt="Picture of the author"
                        width={700}
                        height={700}
                      />
                    </div>
                  </div>
                  <div className="block md:flex md:justify-between md:items-center">
                    <div className="text-center md:text-start">
                      <div className="font-regular text-[#FFA712]">
                        balijadmatour.com
                      </div>
                    </div>
                    <div className="flex justify-center pt-8 md:pt-0 gap-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="gray"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="m6 8l-4 4m0 0l4 4m-4-4h20"
                        />
                      </svg>
                      <p className="text-gray-500">Slide</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="gray"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="m18 8l4 4m0 0l-4 4m4-4H2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio */}

      {/* Brand */}
      <section className="w-full h-auto py-[8%]">
        <div className="w-full text-center">
          <div className="text-center font-bold text-4xl md:text-6xl">
            Some of our trusted clients
          </div>
        </div>
        <div className="md:pt-[4%]">
          <div ref={sliderRun} className="keen-slider gap-10 md:gap-6">
            <div className="keen-slider__slide number-slide1 w-auto h-[20vh] grid justify-center items-center grid-cols-3 gap-10 md:gap-6">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="keen-slider__slide number-slide1 w-auto h-[20vh] grid justify-center items-center grid-cols-3 gap-10 md:gap-6">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="keen-slider__slide number-slide1 w-auto h-[20vh] grid justify-center items-center grid-cols-3 gap-6">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src="/nex-black.png"
                  alt="Picture of the author"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand */}

      {/* About */}
      <section className="my-[6%]">
        <div className="grid justify-center items-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1">
            <div className="col-span-2 md:pt-0 pb-10 block md:hidden">
              <div>
                <Image
                  className="rounded-2xl"
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="A photo of a serene lake in the mountains"
                  width={100}
                  height={50}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="grid items-center">
              <div>
                <div className="font-bold text-6xl pb-10 text-center md:text-start">
                  Why Nex?
                </div>
                <div className="md:pr-10 font-light text-center md:text-start leading-normal text-2xl pb-8">
                  We are a thought collective, working directly with our clients
                  to create, build, and grow holistic software experiences.
                  Using creative and critical thinking to tell our clients
                  story.
                </div>
              </div>
              <div>
                <div className="w-full flex justify-center md:justify-start items-center">
                  <Button
                    className="px-8 shadow-[#F66641] bg-[#F66641] font-medium text-md py-6 rounded-full w-[250px]"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:pt-0 pt-10 hidden md:block">
              <div>
                <Image
                  className="rounded-2xl"
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="A photo of a serene lake in the mountains"
                  width={100}
                  height={50}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}

      {/* faq */}
      <section>
        <div className="py-10">
          <div className="py-20 flex justify-center items-start">
            <div className="font-bold text-6xl text-center md:text-start">
              Have any questions?
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div>
              <Accordion variant="light">
                <AccordionItem
                  className="shadow-md px-6 py-2 my-6 rounded-xl font-semibold border border-[#FBCB78]"
                  key="1"
                  aria-label="Accordion 1"
                  title="How do I get started?"
                >
                  {faq1}
                </AccordionItem>
              </Accordion>
              <Accordion variant="light">
                <AccordionItem
                  className="shadow-md px-6 py-2 my-6 rounded-xl font-semibold border border-[#FBCB78]"
                  key="1"
                  aria-label="Accordion 1"
                  title="What platform do you use to build the website?"
                >
                  {faq2}
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion variant="light">
                <AccordionItem
                  className="shadow-md px-6 py-2 md:my-6 mb-6 rounded-xl font-semibold border border-[#FBCB78]"
                  key="1"
                  aria-label="Accordion 1"
                  title="Have you worked with any large reputable brands?"
                >
                  {faq3}
                </AccordionItem>
              </Accordion>
              <Accordion variant="light">
                <AccordionItem
                  className="shadow-md px-6 py-2 my-6 rounded-xl font-semibold border border-[#FBCB78]"
                  key="1"
                  aria-label="Accordion 1"
                  title="Does Yello offer a remote engineering team?"
                >
                  {faq4}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
    </div>
  );
}
