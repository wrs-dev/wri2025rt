import Image from 'next/image';

const Banner2025RTNoButton = () => {
  return (
    <section className="relative w-full" style={{ paddingTop: '33.33%' }}>
      {/* 33.33% padding for 1500x500 aspect ratio */}
      <div className="absolute inset-0">
        <Image
          src="/seattle-skyline.webp"
          alt="home-banner"
          fill
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-1 text-4xl text-white sm:text-6xl text-shadow-outline">
            Seattle, WA
          </h1>
          <h1 className="mb-8 text-4xl text-white sm:text-6xl text-shadow-outline">
            August 26–28, 2025
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2025RTNoButton;