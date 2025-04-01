import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25RT from '@/components/banner/wri25RT-no-button'; 
import CventWidget from '@/components/CventWidget-prod';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 RT | WRI Rail Transit Conference – Seattle, WA || Registration',
      description:
        'Welcome to the WRI 2025 Rail Transit Conference in Seattle. Join us for an exciting event focusing on the unique challenges and advancements in the rail transit sector.',
      socialImage: '/wri2025-rt-social.png', // Adjust if needed
    },
  };
}

export default function Register() {
  return (
    <main className="bg-white">
      <Navigation />
      {/* Simple banner with no "Register" button included */}
      <Banner25RT />
      {/* Embedded Cvent widget */}
      <CventWidget className="cvt-embed" />
    </main>
  );
}