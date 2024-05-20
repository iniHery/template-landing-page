"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Button } from "flowbite-react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { Image } from "@nextui-org/react";

export default function PortofolioPage() {
  return (
    <div>
      <section className="h-[80vh] flex justify-start items-center">
        {/* <h1 className={title()}>Portofolio</h1> */}
        <div className="flex justify-center items-center h-auto flex-col">
          <div className="justify-start items-center h-auto py-10">
            <div className="text-2xl font-medium">Portofolio</div>
            <div className="max-w-[100vh] text-7xl font-bold">
              At NEXCreative, we bring your best ideas to life
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-full max-w-full md:py-10">
        <div className="h-full flex justify-start items-start">
          <div className="container">
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options">
                <Tab key="all-works" title="All Work">
                  <Card className="shadow-none p-0">
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-4 md:gap-10">
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[60vh]">
                          {/* <Image
                            isZoomed
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src="/p1.png"
                          /> */}
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-4 md:py-10">
                      <div className="grid grid-cols-3 gap-4 md:gap-10">
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-md md:text-4xl font-bold leading-4">
                            <div>Thinking creative</div>
                            <div>with NEX.</div>
                          </div>
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[20vh] md:h-[40vh]"></div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[20vh] md:h-[40vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-4 md:gap-10">
                        <div className="bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[60vh]"></div>
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-4 md:py-10">
                      <div className="grid grid-cols-3 gap-4 md:gap-10">
                        <div className="bg-blue-200 col-span-2 p-6 rounded-2xl h-[26vh] md:h-[60vh]"></div>
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-md md:text-4xl font-bold leading-4">
                            <div>Develop a better</div>
                            <div>future.</div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab
                  key="web-and-mobile-development"
                  title="Web & Mobile Development"
                >
                  <Card className="shadow-none p-0">
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[20vh] md:h-[60vh]">
                          {/* <Image
                            isZoomed
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src="/p1.png"
                          /> */}
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-10">
                      <div className="grid grid-cols-3 gap-10">
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-[20px] md:text-4xl font-bold">
                            <div>Thinking creative</div>
                            <div>with NEX.</div>
                          </div>
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[40vh]"></div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[26vh] md:h-[40vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-10">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="bg-blue-200 col-span-2 p-6 rounded-2xl h-[60vh]"></div>
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-4xl font-bold">
                            <div>Develop a better</div>
                            <div>future.</div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="design" title="Design">
                  <Card className="shadow-none p-0">
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[60vh]">
                          {/* <Image
                            isZoomed
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src="/p1.png"
                          /> */}
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-10">
                      <div className="grid grid-cols-3 gap-10">
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-4xl font-bold">
                            <div>Thinking creative</div>
                            <div>with NEX.</div>
                          </div>
                        </div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[40vh]"></div>
                        <div className="bg-blue-200 p-6 rounded-2xl h-[40vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full p-0">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                        <div className="col-span-2 bg-blue-200 p-6 rounded-2xl h-[60vh]"></div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full h-full px-0 py-10">
                      <div className="grid grid-cols-3 gap-10">
                        <div className="bg-blue-200 col-span-2 p-6 rounded-2xl h-[60vh]"></div>
                        <div>
                          <div className="p-4 h-full flex flex-col justify-center items-start text-4xl font-bold">
                            <div>Develop a better</div>
                            <div>future.</div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
