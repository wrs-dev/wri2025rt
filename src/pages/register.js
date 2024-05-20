import Head from 'next/head';
import Navigation from '@/components/navigation';
import Registration from '@/components/registration';
import CventWidget from '@/components/CventWidget';
import Banner2 from '@/components/banner2';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2024 | Registration",
      description: "Registration for the 29th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2024-social.png" 
    }
  };
}

export default function Register() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner2 />
      <CventWidget className="cvt-embed" />
    </main>
  );
}
