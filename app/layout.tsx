import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head className="bg-white" />
      <body
        className={clsx(
          "min-h-screen bg-white font-display antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow ">
              {children}
            </main>
            <footer>
              <div className="mt-10">
                <div className="bg-gray-100">
                  <div className="max-w-screen-xl px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-10">
                    <div className="p-5 md:pl-0 grid justify-between items-center ">
                      <Image
                        src="/nex-black.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <div className="bg-gray-100 pt-2">
                        <div className="flex pb-5 m-auto pt-5 text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="/#" className="w-6 mx-1"></a>
                            <a href="/#" className="w-6 mx-1"></a>
                            <a href="/#" className="w-6 mx-1"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-md uppercase font-bold">Service</div>
                      <a
                        className="my-3 block text-gray-500"
                        href="/portofolio"
                      >
                        Web Development
                      </a>
                      <a
                        className="my-3 block text-gray-500"
                        href="/portofolio"
                      >
                        Mobile Development
                      </a>
                      <a
                        className="my-3 block text-gray-500"
                        href="/portofolio"
                      >
                        Design
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="text-md uppercase font-bold">
                        Sosial Media
                      </div>
                      <a className="my-3 block text-gray-500" href="/#">
                        Instagram
                      </a>
                      <a className="my-3 block text-gray-500" href="/#">
                        LinkIn
                      </a>
                    </div>
                    <div className="p-5 pr-0">
                      <div className="text-md uppercase font-bold">
                        Contact us
                      </div>
                      <a className="my-3 block text-gray-500" href="/#">
                        Jl. Batubulan, Gg. Pipit XII B
                      </a>
                      <a className="my-3 block text-gray-500" href="/#">
                        nexcreative@company.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 pt-2 border-t">
                  <div className="flex pb-2 px-3 m-auto pt-2 text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                    <div className="my-5">
                      © Copyright 2024. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
