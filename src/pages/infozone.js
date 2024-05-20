import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import IconLinks from '@/components/icons';
import InfoZonePage from '@/components/infozone/infoZonePage';
import Banner from '@/components/banner';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2024 | InfoZone",
      description: "InfoZone for the 29th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2024-social.png" 
    }
  };
}

const infozone = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner />
      <IconLinks />
      <div className="seminar-about-text" id="infozone">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            <b>WRI 2024</b> InfoZone
          </h2>
        </div>
      </div>
      <InfoZonePage />
    </main>
  );
};

export default infozone;
