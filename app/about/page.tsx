import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* <h1 className={title()}>About</h1> */}
      <section className="h-full md:h-screen ">
        <div className="my-[8%] flex justify-center items-center">
          <div className="grid justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1">
              <div className="grid items-center">
                <div className="font-bold text-6xl">Why Nex?</div>
                <div className="pr-10 font-light text-2xl py-8">
                  We are a thought collective, working directly with our clients
                  to create, build, and grow holistic software experiences.
                  Using creative and critical thinking to tell our clients
                  story.
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
        </div>
      </section>

      <section className="w-full">
        <div className="grid items-center h-auto">
          <div className="my-0">
            <div className="pb-6 text-2xl font-semibold text-[#7988EF]">
              Meet the team
            </div>
            <div className="text-6xl max-w-xl font-bold pb-6">
              The creative people behind NEXCreative
            </div>
            <div className="pb-4 text-xl font-regular">OUR MISSION</div>
            <div className="text-lg font-light max-w-4xl pb-6">
              We have worked with analytics, logistics, and crypto platforms to
              innovate ideas that have a global impact. Our mission through it
              all is to give small to midsize businesses access to world-class
              software development.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 pr-0 md:pr-1bg-[#BFECFF]0">
            <div className="w-full bg-white">
              <div>
                <div className="bg-blue-200 p-6 h-[40vh] w-full"></div>
              </div>
              <div className="p-2 justify-center items-center">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
                  <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
