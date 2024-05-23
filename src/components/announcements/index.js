import Image from 'next/image';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      {/* Adjust the width as needed */}
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
          <a
            href="https://wheel-rail-seminars.com/"
            target="_blank"
            className="text-wri-red"
          >
            See more details
          </a>
        </p>
        <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
          Congratulations Stuart Grassie, the WRI 2024 Worth Award Winner
        </h1>
        <div className="flex flex-col items-start mt-2 xl:flex-row">
          <Image
            src="/stuart-grassie-worth-award-250px.jpg"
            alt="Stuart Grassie Worth Award"
            width={250}
            height={250}
            className="mb-4 lg:mb-0 xl:mr-4"
            style={{ width: "250px", height: "250px" }}
          />
          <div className="flex flex-col mt-4 xl:mt-0">
            <p>
              Congratulations to Stuart Grassie for receiving this year's Art
              Worth Award at the WRI '24 Conference in Chicago!
            </p>
            <p className="mt-4">
              The Art Worth Award presented by Wheel Rail Seminars at the annual
              Wheel/Rail Interaction Conference, is named after Art Worth,
              Retired as Senior Manager, Standards - Advanced Technology at
              Canadian National, and was known throughout the industry as a
              walking encyclopedia of railway engineering, standards, and
              practices. The award is a Lifetime Achievement Recognition.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}