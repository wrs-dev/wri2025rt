import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2025RT = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: '33.333%' }}> {/* 500/1500 = 0.33333 or 33.333% */}
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image
          src="/seattle-skyline.webp"
          alt="home-banner"
          layout="fill" // This makes the image cover the entire div
          className="object-cover" // Ensures the image covers the area without stretching
          quality={100}
        />
      </div>
      {/* Absolute positioning for text, centered both horizontally and vertically */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-1 text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            Seattle, WA
          </h1>
          <h1 className="text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            Fall 2025
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2025RT;
