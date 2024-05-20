import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import IconLinks from '@/components/icons';
import SponsorCta from '@/components/sponsors/sponsor-cta';
import SponsorsPage from '@/components/sponsors/sponsorPage';
import Banner from '@/components/banner';

const sponsors = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Sponsor</title>
      </Head>
      <Navigation />
      <Banner />
      <IconLinks />
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            Thank you to our <b>WRI 2024</b> Sponsors
          </h2>
        </div>
      </div>
      <SponsorsPage />
      <SponsorCta id="sponsors" />
    </main>
  );
};

export default sponsors;
