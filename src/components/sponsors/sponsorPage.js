import Image from 'next/image';
import Link from 'next/link';

// Manually include Amsted Rail's details for direct rendering
const amstedRail = {
  name: 'Amsted Rail',
  description:
    'Amsted Rail is the world’s leading manufacturer of railcar bogie systems, railway wheelsets, and end-of car components for heavy haul freight railcars, passenger railcars and locomotives. With facilities spanning more than 40 locations across 10 countries and 6 continents, Amsted Rail delivers design excellence and reliability as we are the only component supplier designing complete performance systems. Our company culture for more than a century has been to provide the most innovative components and integrated bogie systems. Amsted Digital Solutions™, delivered by Amsted Rail, is the only telematics solution designed by a company that understands freight rail operations and a truly harsh operating environment.',
  imagePath: '/platinum-amstead-rail.png',
  url: 'https://www.amstedrail.com/',
  bullets: [
    'Bogie Systems',
    'Brake Systems',
    'End-Of-Car',
    'Freight Car and Locomotive Components',
    'Integrated Systems',
    'Freight Railcar Fleet Management',
    // ... other bullets
  ],
};

const platinumSponsors = [
  {
    name: 'ENSCO Rail',
    description:
      'For more than 50 years, ENSCO has been leading the rail industry worldwide in the delivery of new and advanced technologies to improve the safety, security and quality of operations. As an international leader in advanced rail technology solutions for passenger, transit and freight markets, the ENSCO name represents the rail industry’s premier source for:',
    imagePath: '/platinum-ensco.jpg',
    url: 'https://www.ensco.com/rail',
    bullets: [
      'Track measuring systems',
      'Autonomous track inspection systems',
      'Machine vision track inspection systems',
      'Track maintenance planning software',
      'Vehicle/track interaction dynamics analysis',
      // ... other bullets
    ],
  },
  {
    name: 'Loram',
    description:
      'For more than 70 years, Loram has been providing railroad maintenance equipment and services to freight, passenger and transit railroads. Loram’s reputation rests on our performance as a contractor offering a wide range of track maintenance services:',
    imagePath: '/platinum-loram.png',
    url: 'https://loram.com/',
    bullets: [
      'Production and specialty rail grinding',
      'Ditch cleaning',
      'Shoulder ballast cleaning',
      'Undercutting',
      'Spot undercutting utilizing our LRV',
      'Rail handling',
      'Full service friction management',
      'Track lifting',
      'Geotechnical substructure management',
      'Track Inspection',
      'Material Handling',
      'Structural monitoring and data services',
      // ... other bullets
    ],
  },
  {
    name: 'Plasser American',
    description:
      'Plasser American offers the most comprehensive range of track maintenance of way equipment, contracting services and digital solutions by providing state-of-the-art and next-level machines and services for our customer’s individual needs. We are engaged in all areas of research, design, manufacturing, contracting and best in class aftermarket parts and field service support, in addition to our extensive remanufacturing operations thus extending the useful life of our equipment.',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
    bullets: [
      'Equipment, aftermarket parts, service and remanufacturing business',
      'Contracting services business for efficient track maintenance solutions',
      'Digital Solutions Business, providing measuring, inspection and data analysis solutions',
      // ... other bullets
    ],
  },
  {
    name: 'Sperry Rail',
    description:
      `For nearly a century, Sperry Rail has been the pioneering force in rail flaw detection, 
      helping railroads worldwide reduce the risk of rail failure through comprehensive rail 
      condition assessments. Among Sperry's recent technological advancements is Sperry® 
      SurfaceView™, which revolutionizes rail maintenance by measuring, mapping, and 
      prioritizing rail surface conditions with unparalleled precision. Sperry SurfaceView takes 
      much of the guesswork out of capital expenditure planning and is an essential solution 
      that enhances safety and operational efficiency, effectively mitigating future risk.`,
    imagePath: '/platinum-sperry.png',
    url: 'https://sperryrail.com',
    bullets: [
      // ... other bullets
    ],
  },
];

const goldSponsors = [
  {
    name: 'Holland',
    description: '',
    imagePath: '/gold-holland.png',
    url: 'https://www.hollandco.com/',
  },
  {
    name: 'Vossloh',
    description: '',
    imagePath: '/gold-vossloh.jpg',
    url: 'https://www.vossloh.com/en/',
  },
  {
    name: 'HBK',
    description: '',
    imagePath: '/gold-hbk-logo.png',
    url: 'https://www.hbkworld.com/en/solutions/industries/automotive-ground-transportation/rail',
  },
  {
    name: 'Goldschmidt',
    description: '',
    imagePath: '/gold-goldschmidt.png',
    url: 'https://www.goldschmidt.com/en/',
  },
  {
    name: 'Wayside Inspection Devices',
    description: '',
    imagePath: '/gold-wid.png',
    url: 'https://wid.ca/',
  },
];

const silverSponsors = [
  {
    name: 'Athena Industrial',
    description: '',
    imagePath: '/silver-athena.png',
    url: 'https://www.athenaindustrialservices.com/',
  },
  {
    name: 'LB Foster',
    description: '',
    imagePath: '/silver-lbfoster.png',
    url: 'https://lbfoster.com/',
  },
  {
    name: 'Railroad Software',
    description: '',
    imagePath: '/silver-railroad-software.png',
    url: 'https://www.railroadsoftware.com/',
  },
  {
    name: 'The Robel Group',
    description: '',
    imagePath: '/silver-robel-group.png',
    url: 'https://www.robel.com/en/company/',
  },
];

const bronzeSponsors = [
  {
    name: 'Steel Dynamics, Inc. (SDI)',
    description: '',
    imagePath: '/steel-dynamics.png',
    url: 'https://www.steeldynamics.com/',
  },
  {
    name: 'REMSA',
    description: '',
    imagePath: '/silver-remsa.png',
    url: 'https://www.remsa.org/',
  },
];

export default function SponsorPage() {
  return (
    <div className="pt-12 pb-24 bg-white sm:py-32">
      {/* Platinum Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-8">
            <h2 className="col-span-1 mt-12 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-zinc-500">PLATINUM</span> sponsors
            </h2>
            <div className="col-span-2 lg:col-span-2">
              {/* Manually render Amsted Rail to reduce space between this section and ENSCO */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <img
                    src={amstedRail.imagePath}
                    alt={amstedRail.name}
                    className="max-w-[50%] mx-auto lg:mx-0"
                  />
                </div>
                <a
                  href={amstedRail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  Visit the {amstedRail.name} website
                </a>
                <p className="mt-1 mb-2 text-base leading-7">
                  {amstedRail.description}
                </p>
                {amstedRail.bullets && amstedRail.bullets.length > 0 && (
                  <div className="mb-12">
                    {amstedRail.bullets.map((bullet, index) => (
                      <p className="py-1 pl-6" key={index}>
                        &#8226; {bullet}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              {/* Add a custom class for the manual spacing adjustment between Amsted Rail and the next sponsor */}
              <div className="custom-spacing-for-amsted-and-ensco"></div>
              {/* Map over the rest of the platinum sponsors */}
              {platinumSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col mb-8">
                  <div className="mb-4">
                    <img
                      src={sponsor.imagePath}
                      alt={sponsor.name}
                      className="max-w-[50%] mx-auto lg:mx-0"
                    />
                  </div>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Visit the {sponsor.name} website
                  </a>
                  <p className="mt-1 mb-2 text-base leading-7">
                    {sponsor.description}
                  </p>
                  {sponsor.bullets && sponsor.bullets.length > 0 && (
                    <div className="mb-12">
                      {sponsor.bullets.map((bullet, index) => (
                        <p className="py-1 pl-6" key={index}>
                          &#8226; {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Gold Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-yellow-600">GOLD</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-22">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className="max-h-20 img-fill-contain"
                      />
                    </div>
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit {sponsor.name} website
                    </a>
                  </dt>
                  <dd className="mt-1 text-base leading-7 ">
                    {sponsor.description}
                  </dd>
                </div>
              ))}
              {/* Manually added logos */}
              <div>
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="flex items-center h-24">
                    <img
                      src="/gold-arm-grg.png"
                      alt="ARM / Global Rail Group"
                      className="max-h-28 img-fill-contain"
                    />
                  </div>
                </dt>
                <dd className="mt-4 text-base leading-7">
                  <a
                    href="https://arm-corp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Visit ARM / Global Rail Group's website
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* Silver Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-slate-500">SILVER</span> sponsors
            </h2>
            <div className="col-span-2">
              <dl className="grid items-end grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
                {silverSponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <dt className="text-base font-semibold leading-7 text-black">
                      <div className="flex items-center h-24">
                        <img
                          src={sponsor.imagePath}
                          alt={sponsor.name}
                          className="max-h-14 img-fill-contain"
                        />
                      </div>
                    </dt>
                    <dd className="mt-1 text-base leading-7">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                      >
                        Visit {sponsor.name} website
                      </a>
                    </dd>
                  </div>
                ))}

                {/* Manually added logos */}
                <div>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-24">
                      <img
                        src="/silver-rhomberg-sersa.png"
                        alt="Silver Sponsor Rhomberg Sersa"
                        className="max-h-20 img-fill-contain"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href="https://www.rhomberg-sersa.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit Rhomberg Sersa's website
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-20">
                      <img
                        src="/silver-wabtec.png"
                        alt="Silver Sponsor Rhomberg Sersa"
                        className="max-h-24 img-fill-contain"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href="https://www.wabteccorp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit Wabtec's website
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-24">
                      <img
                        src="/silver-linsinger.png"
                        alt="Silver Sponsor Linsinger"
                        className="max-h-24 img-fill-contain"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href="https://www.linsinger.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit Linsinger's website
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-20">
                      <img
                        src="/silver-IJ.png"
                        alt="Interface Journal"
                        className="max-h-20 img-fill-contain"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href="https://interfacejournal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit Interface Journal's website
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Bronze Sponsor Section - had to manually set up */}
      <section>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-amber-800">BRONZE</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              <div>
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="flex items-center h-20">
                    <img
                      src="/bronze-steel-dynamics.png"
                      alt="Bronze Sponsor Steel Dynamics"
                      className="max-h-20 img-fill-contain"
                    />
                  </div>
                </dt>
                <dd className="mt-4 text-base leading-7">
                  <a
                    href="https://www.steeldynamics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Visit Steel Dynamic's website
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="flex items-center h-20">
                    <img
                      src="/bronze-remsa.png"
                      alt="Bronze sponsor REMSA"
                      className="max-h-20 img-fill-contain"
                    />
                  </div>
                </dt>
                <dd className="mt-4 text-base leading-7">
                  <a
                    href="https://www.remsa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Visit REMSA's website
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="flex items-center h-20">
                    <img
                      src="/bronze-cars.png"
                      alt="Bronze Sponsor Canadian Association of Railway Suppliers"
                      className="max-h-20 img-fill-contain"
                    />
                  </div>
                </dt>
                <dd className="mt-4 text-base leading-7">
                  <a
                    href="https://railwaysuppliers.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Visit CARS's website
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
