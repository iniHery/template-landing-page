import { title } from "@/components/primitives";
import { Button } from "flowbite-react";

export default function PortofolioPage() {
  return (
    <div>
      <section className="h-screen">
        {/* <h1 className={title()}>Portofolio</h1> */}
        <div className="flex justify-center items-center h-full flex-col bg-red-900">
          <div className="justify-start items-center w-full h-full">
            <div className="text-2xl font-medium">Portofolio</div>
            <div className="max-w-lg text-5xl font-bold">
              At Yello, we bring your best ideas to life
            </div>
          </div>
        </div>
      </section>
      <section>
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
                  // variant="shadow"
                  className="text-lg font-semibold py-6 flex items-center"
                >
                  Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
