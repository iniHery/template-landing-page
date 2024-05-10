"use client";

import { title } from "@/components/primitives";
import { Button } from "flowbite-react";
import TabsPortofolio from "../tabs-portofolio";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import React from "react";
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
              At Yello, we bring your best ideas to life
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
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 bg-blue-200 p-4">
                          <Image
                            isZoomed
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src="/p1.png"
                          />
                        </div>
                        <div className="grid grid-cols-1 grid-rows-2 gap-4">
                          <div>
                            <div className="bg-blue-200 p-4">
                              <Image
                                isZoomed
                                width={1000}
                                alt="NextUI Fruit Image with Zoom"
                                src="/p1.png"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="bg-blue-200 p-4">
                              <Image
                                isZoomed
                                width={1000}
                                alt="NextUI Fruit Image with Zoom"
                                src="/p1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                    <CardBody className="w-full px-0 pb-0">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="grid grid-cols-1 grid-rows-2 gap-4">
                          <div>
                            <div className="bg-blue-200 p-4">
                              <Image
                                isZoomed
                                width={1000}
                                alt="NextUI Fruit Image with Zoom"
                                src="/p1.png"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="bg-blue-200 p-4">
                              <Image
                                isZoomed
                                width={1000}
                                alt="NextUI Fruit Image with Zoom"
                                src="/p1.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 bg-blue-200 p-4">
                          <Image
                            isZoomed
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src="/p1.png"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
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
