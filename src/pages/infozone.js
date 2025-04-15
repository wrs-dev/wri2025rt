import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import InfoZonePage from '@/components/infozone/infoZonePage-no-abstracts';
import Banner25RT30th from '@/components/banner/wri25RT-30th';
import IconsRT from '@/components/icons/iconsRT-nolink';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 | InfoZone",
      description: "InfoZone for the 30th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2025-rt-social.png" 
    }
  };
}

const infozone = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25RT30th />
      <IconsRT />
      <div className="seminar-about-text" id="infozone">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            <b>WRI 2025</b> InfoZone
          </h2>
        </div>
      </div>
      <InfoZonePage />
    </main>
  );
};

export default infozone;
