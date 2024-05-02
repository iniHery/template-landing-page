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
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div>
      <section className="relative h-[80vh] max-w-full md:py-6">
        <div className="h-[80vh] flex justify-start items-center">
          <div className="container">
            <div className="max-w-lg font-bold md:text-6xl text-4xl text-start">
              Nex gives small to midsize businesses access to world class
              software & design
            </div>
            <div className="pt-[20%] md:pt-10">
              <Button
                color="primary"
                variant="shadow"
                className="text-lg font-semibold py-6 flex items-center"
              >
                Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative lg:h-[80vh] md:h-full h-auto flex flex-col md:mt-[6%] md:py-10">
        <div className="md:h-screen h-auto flex justify-center items-start">
          <div className="container">
            <div className="font-bold md:text-4xl text-[34px] leading-9 text-center">
              Building apps & branding visions across a range of industries,
              markets, and countries through 4 core services:
            </div>
            <div className="pt-[50px] max-w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 grid-cols-1 gap-4">
                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[34vh] lg:h-[40vh] space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-2xl md:text-xl">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>

                      <div className="pt-[100px] md:pt-[28px]">
                        <Button color="primary" variant="ghost">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[34vh] lg:h-[40vh] space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-2xl md:text-xl">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>

                      <div className="pt-[100px] md:pt-[28px]">
                        <Button color="primary" variant="ghost">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[34vh] lg:h-[40vh] space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-2xl md:text-xl">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>

                      <div className="pt-[100px] md:pt-[28px]">
                        <Button color="primary" variant="ghost">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Card
                    className="w-full md:w-full lg:w-full h-[46vh] md:h-[34vh] lg:h-[40vh] space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="grid grid-rows-2">
                      <div>
                        <div className="font-bold text-2xl md:text-xl">
                          Web & Mobile Development
                        </div>
                        <div className="h-auto font-light text-lg pt-6">
                          We provide fast, reliable, and secure mobile and web
                          applications with consistent design across mobile and
                          desktop.
                        </div>
                      </div>

                      <div className="pt-[100px] md:pt-[28px]">
                        <Button color="primary" variant="ghost">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-full md:py-0 py-20 flex flex-col">
        <div className="w-full flex justify-center items-center">
          <div className="font-bold text-5xl md:text-6xl md:mb-10 mt-[20%] md:mt-[2%] ld:mt-[0%] text-center">
            Custom app development
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-4">
          <div className="flex justify-center pt-20 md:pt-6">
            <div className="w-full md:w-[250px] lg:w-full h-[58vh] md:h-[64vh] lg:h-[54vh] space-y-5 p-4">
              <div className="grid grid-rows-2">
                <div>
                  <Skeleton className="rounded-lg">
                    <div className="h-[20vh] w-[20%] px-10 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="font-bold text-4xl md:text-4xl text-center my-8">
                    Planning
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-regular text-center text-xl md:text-xl lg:text-xl">
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
                  <Skeleton className="rounded-lg">
                    <div className="h-[20vh] w-[20%] px-10 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="font-bold text-4xl md:text-4xl text-center my-8">
                    Optimization
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-regular text-center text-xl md:text-xl lg:text-xl">
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
                  <Skeleton className="rounded-lg">
                    <div className="h-[20vh] w-[20%] px-10 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="font-bold text-4xl md:text-4xl text-center my-8">
                    Synergy
                  </div>
                </div>

                <div className="pt-[10px] md:pt-[18px] lg:pt-0 font-regular text-center text-xl md:text-xl lg:text-xl">
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

      <section className="relative lg:h-[80vh] md:h-full h-full flex flex-col md:mt-[6%] md:py-10">
        <div className="text-center font-bold text-4xl">Recent works</div>
        <div ref={sliderRef} className="keen-slider py-10">
          <div className="keen-slider__slide h-full text-center number-slide1 p-4">
            <div className="flex justify-center ">
              <Card
                className="w-full md:w-full lg:w-full h-[72vh] md:h-[40vh] lg:h-[50vh] space-y-5 p-4 "
                radius="lg"
              >
                <div className="p-6">
                  <div className="font-bold text-xl md:text-4xl">
                    Web & Mobile Development
                  </div>
                  <div className="h-[50vh] md:h-[36vh] grid md:grid-cols-2 grid-cols-1 py-6 justify-center items-center ">
                    <div className="h-auto font-light text-xl text-start pr-10">
                      We provide fast, reliable, and secure mobile and web
                      applications with consistent design across mobile and
                      desktop.
                    </div>
                    <div className="py-4">
                      <Skeleton className="rounded-lg ">
                        <div className="h-[20vh] w-[20%] px-10 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </div>
                  <div className=" text-start">
                    <div className="font-bold text-blue-300">
                      NexCreative.id
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-[8%]">
        <div className="w-full text-center">
          <div className="text-center font-bold text-4xl">
            Some of our trusted clients
          </div>
        </div>
        <div className="pt-[8%]">
          <div ref={sliderRun} className="keen-slider">
            <div className="keen-slider__slide number-slide1 bg-red-400 mx-6 h-[30vh]">
              1
            </div>
            <div className="keen-slider__slide number-slide2 bg-red-600 mx-6 h-[30vh]">
              2
            </div>
            <div className="keen-slider__slide number-slide3 bg-red-700 mx-6 h-[30vh]">
              3
            </div>
            <div className="keen-slider__slide number-slide4 bg-red-800 mx-6 h-[30vh]">
              4
            </div>
            <div className="keen-slider__slide number-slide5 bg-red-900 mx-6 h-[30vh]">
              5
            </div>
          </div>
        </div>
      </section>

      <section className="my-[8%]">
        <div className="grid justify-center items-center  h-full">
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
                  className="px-8 font-bold text-md py-6 rounded-full w-[250px]"
                  color="primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-span-2 md:pt-0 pt-10">
              <Skeleton className="rounded-lg">
                <div className="h-[50vh] w-[20%] px-10 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">{/* <Footer /> */}</div>
    </div>
  );
}
