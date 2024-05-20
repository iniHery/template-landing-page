"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import Footer from "./footer";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const animation = { duration: 10000, easing: (t: number) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 40,
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

  return (
    <div>
      <section className="relative h-[80vh] max-w-full md:py-6">
        <div className="h-[80vh] flex justify-start items-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-start items-center">
                <div className="block">
                  <div className="max-w-lg font-bold md:text-5xl text-4xl text-start">
                    Nex gives small to midsize businesses access to world class
                    software & design
                  </div>
                  <div className="pt-[20%] md:pt-10">
                    <Button
                      color="primary"
                      variant="shadow"
                      className="flex items-center shadow-[#6B3EF1] bg-[#6B3EF1] text-lg font-semibold py-6 "
                    >
                      Consultation
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

      <section className="relative h-full  flex flex-col md:mt-[6%] md:py-10">
        <div className="md:h-full h-auto flex justify-center items-start">
          <div className="container">
            <div className="font-bold md:text-4xl text-[34px] leading-9 text-center">
              Building apps & branding visions across a range of industries,
              markets, and countries through 4 core services:
            </div>
            <div className="pt-[50px] max-w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 grid-cols-1 gap-4">
                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-full  space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641]">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>
                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
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
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-full  space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold flex-col text-xl md:text-2xl text-[#F66641]">
                          <div>Branding & </div>
                          <div>Design</div>
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We offer web3 and solidity engineering services for
                          Crypto Tokens, NFT projects, and DeFi on
                          EVM-compatible blockchains.
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
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
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-full  space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641]">
                          Database, Server & API
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide highly scalable network & realtime
                          infrastructure that provides fast respons times across
                          countries, devices & keeps your intellectual property
                          safe.
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
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
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full h-[46vh] md:h-full  space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-xl md:text-2xl text-[#F66641]">
                          Branding & Design
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We offer a wide range of design services centered
                          around High-level Design Prototypes, UX Psychology
                          Principles, and Brand Positioning
                        </div>
                      </div>

                      <div className="absolute bottom-[20px] left-[20px]">
                        <div className="pt-[100px] md:pt-[28px] flex justify-between">
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

      <section className="relative h-full md:py-0 py-20 md:mt-20 flex flex-col">
        <div className="w-full flex justify-center items-center">
          <div className="font-bold text-5xl md:text-6xl md:mb-10 mt-[20%] md:mt-[2%] ld:mt-[0%] text-center">
            Custom app development
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[60%]">
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
                    <div className="h-[20vh] w-full mx-auto px-10 rounded-3xl bg-[#9FAAF4] grid justify-center items-center">
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
                  <div>
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
                    <div className="h-[20vh] w-full mx-auto px-10 rounded-3xl bg-[#FBCB78] grid justify-center items-center">
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
                  <div>
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
                    <div className="h-[20vh] w-full mx-auto px-10 rounded-3xl bg-[#faa18a] grid justify-center items-center">
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
                  <div>
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
                <div className="p-6 grid ">
                  <div>
                    <div className="font-light text-2xl pb-2 text-[#FFA712]">
                      Web & Mobile Development, Branding & Design
                    </div>
                    <div className="font-bold text-xl md:text-4xl">
                      Bali Jadma Tour - Agent Tour
                    </div>
                  </div>
                  <div className="h-full grid md:grid-cols-2 grid-cols-1 pt-20 pb-6 justify-center items-center ">
                    <div className="h-auto font-light text-xl text-start pr-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div>
                      <Image
                        className="rounded-xl"
                        src="/port2.png"
                        alt="Picture of the author"
                        width={700}
                        height={700}
                      />
                    </div>
                    <div className=" text-start">
                      <div className="font-bold text-[#FFA712]">
                        balijadmatour.com
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="m6 8l-4 4m0 0l4 4m-4-4h20"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="m18 8l4 4m0 0l-4 4m4-4H2"
                      />
                    </svg>
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
                <div className="p-6 grid ">
                  <div>
                    <div className="font-light text-2xl pb-2 text-[#FFA712]">
                      Web & Mobile Development, Branding & Design
                    </div>
                    <div className="font-bold text-xl md:text-4xl">
                      Bali Jadma Tour - Agent Tour
                    </div>
                  </div>
                  <div className="h-full grid md:grid-cols-2 grid-cols-1 pt-20 pb-6 justify-center items-center ">
                    <div className="h-auto font-light text-xl text-start pr-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div>
                      <Image
                        className="rounded-xl"
                        src="/port2.png"
                        alt="Picture of the author"
                        width={700}
                        height={700}
                      />
                    </div>
                    <div className=" text-start">
                      <div className="font-bold text-[#FFA712]">
                        balijadmatour.com
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="m6 8l-4 4m0 0l4 4m-4-4h20"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="m18 8l4 4m0 0l-4 4m4-4H2"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto py-[8%]">
        <div className="w-full text-center">
          <div className="text-center font-bold text-4xl md:text-6xl">
            Some of our trusted clients
          </div>
        </div>
        <div className="pt-[8%]">
          <div ref={sliderRun} className="keen-slider">
            <div className="keen-slider__slide number-slide1 w-auto h-[30vh] grid justify-center items-center grid-cols-2 gap-10">
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
            </div>
            <div className="keen-slider__slide number-slide1 w-auto h-[30vh] grid justify-center items-center grid-cols-2 gap-10">
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
            </div>
            <div className="keen-slider__slide number-slide1 w-auto h-[30vh] grid justify-center items-center grid-cols-2 gap-10">
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
            </div>
            <div className="keen-slider__slide number-slide1 w-auto h-[30vh] grid justify-center items-center grid-cols-2 gap-10">
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
              <Image
                className="rounded-xl"
                src="/nex-black.png"
                alt="Picture of the author"
                width={360}
                height={360}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-[8%]">
        <div className="grid justify-center items-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1">
            <div className="grid items-center">
              <div className="font-bold text-6xl">Why Nex?</div>
              <div className="pr-10 font-light text-2xl py-8">
                We are a thought collective, working directly with our clients
                to create, build, and grow holistic software experiences. Using
                creative and critical thinking to tell our clients story.
              </div>
              <div>
                <Button
                  className="px-8 shadow-[#F66641] bg-[#F66641] font-medium text-md py-6 rounded-full w-[250px]"
                  color="primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-span-2 md:pt-0 pt-10">
              <div>
                <Image
                  className="rounded-2xl"
                  src="https://img.freepik.com/free-photo/smiling-young-web-developers-posing-around-table-with-laptops-it-indoor-portrait-asian-student-with-black-hair-spending-time-with-friends-university_197531-3734.jpg?t=st=1716118784~exp=1716122384~hmac=c2dfb3c7ca7ab2940fc303172dccab58f5773a27419fdbdc3871a63464335c89&w=1800"
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

      <div className="relative z-10">{/* <Footer /> */}</div>
    </div>
  );
}
