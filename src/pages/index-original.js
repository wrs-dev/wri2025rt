import Navigation from '@/components/navigation';
import IconLinks from '@/components/icons';
import Intro from '@/components/intro';
import Banner from '@/components/banner';
import InfoZoneSection from '@/components/infozone/infoZoneSection';
import Schedule from '@/components/schedule';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';
import InterfaceJournal from '@/components/interface-journal';
import WRIAnnouncements from '@/components/announcements';
import Hotel from '@/components/hotel';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2024 | Home",
      description: "Join us for the 29th Annual Wheel/Rail Interaction Conference (WRI '24) in Chicago, IL. The conference focuses on the complex and critical interaction between the wheel and the rail (vehicle/track).",
      socialImage: "/wri2024-social.png" // Replace with your social image path
    }
  };
}

export default function Home({ title, description, socialImage }) {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner />
      <IconLinks />
      <div className="pb-40 text-center about-container" id="about">
        <p>
          Now in its 29th year, the Wheel/Rail Interaction Conference (WRI '24)
          will be held in Chicago, IL, the site of the very first conference in
          1994. The Wheel Rail Interaction Conference is designed to inform and
          educate professionals who work for railroads, transit agencies,
          contractors, government regulators, researchers, and consulting firms.
          The conference focuses on the complex and critical interaction between
          the wheel and the rail (vehicle/track).
        </p>
        <p className="pt-5">
          {' '}
          WRI '24 conference is three freestanding seminars:{' '}
          <em>The Rail Transit Seminar</em> on May 21, the{' '}
          <em>Principles of Wheel/Rail Interaction</em> on May 22 and the{' '}
          <em>Heavy Haul Seminar</em> on May 23-24, 2024. We welcome back our
          Presenting Sponsor for the Rail Transit Seminar -{' '}
          <a
            href="https://www.masstransitmag.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mass Transit Magazine
          </a>{' '}
          and welcome for the very first time, our new Presenting Sponsor for
          the Heavy Haul Seminar -{' '}
          <a
            href="https://www.rtands.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Railway Track & Structures (RT&S)
          </a>
          .
        </p>
      </div>
      <Intro />
      <InfoZoneSection />
      <Schedule />
      <Registration id="registration" />
      <SponsorsCloud />
      <section className="my-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <InterfaceJournal />
            <WRIAnnouncements />
          </div>
        </div>
      </section>
      <Hotel />
    </main>
  );
}