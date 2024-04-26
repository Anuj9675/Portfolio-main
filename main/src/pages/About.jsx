import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            It's me {configData.name}
          </h1>
          <p className="text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
            {configData.aboutDesc}
          </p>
          <img className="border rounded-md p-3 grayscale shadow-md" src="src/assets/profile.jpeg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visual appealing design
        </p>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
        <div className="flex flex-col gap-y-2">

          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
            <a
              href="src/assets/AnujResume.pdf"
              className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
              download="Resume"
            >
              Resume
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}
