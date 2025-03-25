import { useMemo } from 'react';
import Image from 'next/image';

const IconLinksRT = () => {
  // We don't need the router or Link since these icons have no links or hover effects
  const icons = useMemo(
    () => [
      {
        // No href property — icon is unlinked
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'August 26, 2025',
      },
      {
        // No href property — icon is unlinked
        src: '/rail-transit.svg',
        title: 'Rail Transit Seminar',
        date: 'August 27-28, 2025',
      },
    ],
    []
  );

  // For two icons with no hover effect, simply set their default backgrounds.
  // You can change or remove these classes as desired.
  const backgrounds = ['bg-wri-green', 'bg-wri-blue'];

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            <li
              key={index}
              className={`border-2 border-white shadow-lg ${backgrounds[index]}`}
            >
              <figure>
                <Image
                  src={icon.src}
                  width={180}
                  height={100}
                  alt={icon.title.toLowerCase()}
                  className="w-full"
                />
              </figure>
              <div className="text">
                <h4 className="text-2xl font-bold text-white">
                  {icon.title}
                </h4>
                <p className="text-2xl font-normal text-white">
                  {icon.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksRT;