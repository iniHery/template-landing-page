import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <div
              className="absolute inset-0 bg-cover bg-center bg-fixed h-auto"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-75"></div> */}

            <Navbar />
            <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
              {children}
            </main>
            {/* <footer className="w-full flex items-center justify-center py-3 ">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer> */}
            <footer>
              <div className="mt-10">
                <div className="bg-gray-100">
                  <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-10">
                    <div className="p-5 grid justify-between items-center ">
                      <Image
                        src="/nex.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                      />
                      <div className="bg-gray-100 pt-2">
                        <div className="flex pb-5 m-auto pt-5 text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="/#" className="w-6 mx-1">
                              link
                            </a>
                            <a href="/#" className="w-6 mx-1">
                              fb
                            </a>
                            <a href="/#" className="w-6 mx-1">
                              ig
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-sm uppercase text-indigo-600 font-bold">
                        Resources
                      </div>
                      <a className="my-3 block" href="/#">
                        Documentation{" "}
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                      <a className="my-3 block" href="/#">
                        Tutorials{" "}
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                      <a className="my-3 block" href="/#">
                        Support{" "}
                        <span className="text-teal-600 text-xs p-1">New</span>
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="text-sm uppercase text-indigo-600 font-bold">
                        Support
                      </div>
                      <a className="my-3 block" href="/#">
                        Help Center{" "}
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                      <a className="my-3 block" href="/#">
                        Privacy Policy{" "}
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                      <a className="my-3 block" href="/#">
                        Conditions{" "}
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="text-sm uppercase text-indigo-600 font-bold">
                        Contact us
                      </div>
                      <a className="my-3 block" href="/#">
                        Jl. Batubulan, Gg. Pipit XII B
                        <span className="text-teal-600 text-xs p-1"></span>
                      </a>
                      <a className="my-3 block" href="/#">
                        nexcreative@company.com
                        <span className="text-teal-600 text-xs p-1"></span>
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
