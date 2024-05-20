// WRIAnnouncements.js

export default function WRIAnnouncements() {
    return (
      <div className="w-full bg-gray-100"> {/* Adjust the width as needed */}
        <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
          WRI Announcements
        </div>
        <div className="p-8">
          <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
            Wheel Rail Seminars has a new website!
          </h1>
          <p className="mb-6">
            Since 1993, Wheel Rail Seminars (WRS) has produced the Wheel/Rail Interaction Conference (WRI). Over the many years, the conference has become synonymous with high quality, practical presentations and the very best in networking.{' '}
            <a href="https://wheel-rail-seminars.com/" className="text-wri-red">
              Visit the new website.
            </a>
          </p>
          <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
            Gary Wolf wins the WRI 2023 Worth Award
          </h1>
          <p>
            Gary Wolf, president of Wolf Railway Consulting, is the recipient of the 2023 Worth Award. The award, presented by Wheel Rail Seminars at the annual Wheel/Rail Interaction conference in June, is named for Art Worth, who was Manager of Standards and retired as Senior Manager – Advanced Technology at Canadian National.{' '}
            <a href="/gary-wolf-worth-award.pdf" className="text-wri-red">
              View the story (PDF).
            </a>
          </p>
        </div>
      </div>
    );
  }
  