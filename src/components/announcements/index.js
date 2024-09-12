import Image from 'next/image';
import Link from 'next/link';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
        WRI Announcements
      </div>
      <div className="p-8">
        <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
          Wheel Rail Seminars announces two WRI 2025 conferences!
        </h1>
        <p className="mb-6">
          Now in its 30th year, Wheel Rail Seminars is thrilled to announce some
          exciting developments for the upcoming WRI Conference in 2025! To
          better cater to the diverse needs of our attendees, the WRI Conference
          will split into two specialized conferences - WRI 2025 Heavy Haul
          Conference to be held in Kansas City, MO from June 10-12, 2025 and WRI
          2025 Rail Transit Conference to be held in Seattle, WA in the Fall of
          2025.{" "}
          <Link href="https://wheel-rail-seminars.com/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-wri-red">
              See more details...
            </a>
          </Link>
        </p>
        <div className="flex flex-col">
          <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
            Fueling the Future LinkedIn Article
          </h1>
          <Image
            src="/sfu-donation.png"
            alt="SFU donation article picture"
            width={500}
            height={260}
            className="mb-4"
            style={{ width: "100%", height: "auto", maxWidth: "500px" }}
          />
          <p>
            A generous gift from Gordon Bachinsky, Founder of Wheel Rail seminars, is broadening the learning experiences and professional networks for students in SFU's School of Sustainable Energy Engineering (SEE).{" "}
            <Link href="https://give.sfu.ca/fueling-the-future" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-wri-red">
                Read the article...
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}