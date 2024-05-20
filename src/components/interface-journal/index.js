import Image from 'next/image';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

// Define animation variants for the icon
const iconVariants = {
  hover: {
    x: [0, 5, 0],
    transition: { repeat: Infinity, duration: 1 },
  },
};

export default function InterfaceJournal() {
  return (
    <div className="p-6 bg-white">
      <h1 className="relative inline-block capitalize text-xl md:text-2xl font-bold text-black after:absolute after:bg-wri-yellow after:bottom-0 after:left-0 after:h-0.5 after:w-full">
        EXPERT COVERAGE OF WRI
      </h1>
      <div className="flex mt-10 justify-left">
        <figure className="pr-0 md:pr-20">
          <Image
            src="/ij-logo.png"
            alt="Interface Journal"
            width={225} // Reduced width to 75% of original
            height={78} // Reduced height to 75% of original
            sizes="(max-width: 300px) 100vw, 300px"
            loading="lazy"
            className="w-auto h-auto" // Ensure the image maintains its aspect ratio
          />
        </figure>
      </div>
      <div className="mt-6 text-gray-800">
        <p>
          Interface journal is devoted to examining issues associated with
          wheel/rail interaction and ways in which technology is being used to
          resolve them on railroads and transit systems around the world.
        </p>
      </div>
      <h1 className="mt-10 text-2xl font-bold text-wri-mid-blue">
        Mitigating Rolling Contact Fatigue: An Overview for 2023{' '}
      </h1>
      <div className="flex flex-col mt-8 xl:flex-row xl:items-start">
        <div className="w-full xl:w-[270px] mb-6 xl:mb-0">
          <Image
            src="/ij-march-2024.webp"
            alt="interface journal post grind stud"
            width={640}
            height={395}
            sizes="(max-width: 400px) 100vw, 500px"
            loading="lazy"
            className="w-auto h-auto" // Ensure the image maintains its aspect ratio
          />
        </div>
        <div className="xl:w-[calc(100%-300px)] xl:pl-6">
          <p className="text-gray-800">
            Rolling contact fatigue (RCF) affects railroads and transit systems
            globally. The effects of RCF damage range from poor ride quality and
            excessive noise, to shelling and spalling so deep and widespread that
            rail sections must be replaced. Over time, the railroad and transit
            industries have developed tools to detect and measure RCF and a suite
            of techniques to mitigate it…{' '}
            <a
              className="text-wri-red"
              href="https://interfacejournal.com/archives/33972"
            >
              <span className="text-sm">[continued]</span>
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <a
          href="https://interfacejournal.com/"
          className="flex items-center text-1xl text-wri-green group"
        >
          Visit Interface Journal for this and other wheel/rail articles
          <motion.div
            className="inline-block pl-2"
            variants={iconVariants}
            whileHover="hover"
          >
            <ChevronDoubleRightIcon className="w-6 h-6" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
