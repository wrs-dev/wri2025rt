import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section>
      <div className="flex justify-center p-6 mx-auto lg:p-14 bg-wri-blue/20">
        <div className="max-w-screen-2xl">
          {/* WRI Cards */}
          <div className="grid grid-cols-1 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <article className="flex flex-col items-start border-b-4 bg-gradient-to-t from-white via-white to-transparent border-wri-yellow">
              <div className="relative w-full h-0 pb-[64.51%]"> {/* 529 / 820 ≈ 64.51% */}
                <Image
                  src="/venues.webp"
                  alt="Continuing Education"
                  layout="fill"
                  className="object-cover w-full bg-gray-100 rounded-t-2xl"
                  loading="lazy"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="flex flex-col items-center max-w-xl mx-auto">
                <div className="relative px-10 pb-10 group">
                  <div className="relative flex items-center justify-center mt-8 gap-x-2">
                    <Image
                      src="/WRI.png"
                      alt="WRI"
                      width={76}
                      height={26}
                      className="bg-gray-100"
                      loading="lazy"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans text-2xl font-bold text-wri-blue">
                        for Continuing Education
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 font-sans leading-6 text-center text-black">
                    The Wheel Rail Interaction Conference is a dynamic event
                    that continually seeks to inspire learning and innovation.
                    By attending, you will earn Continuing Education Units
                    (CEUs) toward fulfilling your annual Professional
                    Engineering (PE or P.Eng) requirements.
                  </p>
                </div>
              </div>
            </article>
            {/* Card 2 */}
            <article className="flex flex-col items-start border-b-4 bg-gradient-to-t from-white via-white to-transparent border-wri-yellow">
              <div className="relative w-full h-0 pb-[64.51%]"> {/* 529 / 820 ≈ 64.51% */}
                <Image
                  src="/speakers.webp"
                  alt="Technical Presentations"
                  layout="fill"
                  className="object-cover w-full bg-gray-100 rounded-t-2xl"
                  loading="lazy"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="flex flex-col items-center max-w-xl mx-auto">
                <div className="relative px-10 pb-10 group">
                  <div className="relative flex items-center justify-center mt-8 gap-x-2">
                    <Image
                      src="/WRI.png"
                      alt="WRI"
                      width={76}
                      height={26}
                      className="bg-gray-100"
                      loading="lazy"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans text-2xl font-bold text-wri-blue">
                        for Technical Presentations
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 font-sans leading-6 text-center text-black">
                    Hear from industry leading experts on the latest information
                    on new and existing technology and how it's used to improve
                    wheel/rail & vehicle/track interaction on freight, light
                    rail & metro systems.
                  </p>
                </div>
              </div>
            </article>
            {/* Card 3 */}
            <article className="flex flex-col items-start border-b-4 bg-gradient-to-t from-white via-white to-transparent border-wri-yellow">
              <div className="relative w-full h-0 pb-[64.51%]"> {/* 529 / 820 ≈ 64.51% */}
                <Image
                  src="/networking.webp"
                  alt="Professional Networking"
                  layout="fill"
                  className="object-cover w-full bg-gray-100 rounded-t-2xl"
                  loading="lazy"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="flex flex-col items-center max-w-xl mx-auto">
                <div className="relative px-10 pb-10 group">
                  <div className="relative flex items-center justify-center mt-8 gap-x-2">
                    <Image
                      src="/WRI.png"
                      alt="WRI"
                      width={76}
                      height={26}
                      className="bg-gray-100"
                      loading="lazy"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans text-2xl font-bold text-wri-blue">
                        for Professional Networking
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 font-sans leading-6 text-center text-black">
                    WRI offers a unique platform for fostering meaningful
                    connections and creating lasting impressions. The
                    opportunities for knowledge exchange, identifying new
                    prospects, and enhancing visibility make WRI a great place
                    for professional growth and industry influence.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
