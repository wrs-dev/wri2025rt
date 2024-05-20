import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner from '@/components/banner';
import IconLinks from '@/components/icons';
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2024 | Principles Course Speaker Bios & Abstracts",
      description: "Speaker Bios & Abstracts for the 29th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2024-social.png" 
    }
  };
}

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner />
      <IconLinks />
      <div className="seminar-about-text"></div>
      <BiosAbstractsPC />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsPCPage;
