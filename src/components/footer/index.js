import { useState } from 'react';

const navigation = {
  solutions: [
    { name: 'Home', href: '/', target: '_self' },
    { name: 'About WRI', href: '/#about', target: '_self' },
    {
      name: 'Visit Wheel Rail Seminars',
      href: 'https://wheel-rail-seminars.com',
      target: '_blank',
    },
    {
      name: 'Visit Interface Journal',
      href: 'https://interfacejournal.com/',
      target: '_blank',
    },
    {
      name: "Visit WRI '24 Sponsors",
      href: '/sponsors#icons',
      target: '_self',
    },
  ],
  support: [
    {
      name: 'Rail Transit Seminar',
      href: '/rail-transit-seminar#icons',
      target: '_self' },
    {
      name: 'Principles Course',
      href: '/principles-course#icons',
      target: '_self',
    },
    {
      name: 'Heavy Haul Seminar',
      href: '/heavy-haul-seminar#icons',
      target: '_self',
    },
    { name: 'Info Zone/Expo Zone', href: '/infozone#icons', target: '_self' },
    {
      name: 'Become a Sponsor',
      href: '/2024-Final-Sponsorship-kit.pdf',
      target: '_blank',
    },
  ],
  company: [
    { name: 'Register Now', href: '/register', target: '_blank' },
    {
      name: 'Seminar Pricing Categories',
      href: '/#register',
      target: '_self',
    },
    { name: 'Hotel Reservations', href: '/#hotel', target: '_self' },
    { name: 'FAQ', href: '/faq#icons', target: '_self' },

    {
      name: 'Seminar Archive',
      href: 'http://archive.wheel-rail-seminars.com/us/downloads.php',
      target: '_blank',
    },
  ],
  legal: [
    { name: 'Terms', href: '/terms', target: '_self' },
    { name: 'Privacy', href: '/legal', target: '_self' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/WheelRailSeminars',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://twitter.com/WheelRailSem',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/wheel-rail-seminars/',
      icon: props => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          {...props}
        >
          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
        </svg>
      ),
    },
  ],
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'subscribe', email }),
    })
      .then(() => setThankYouMessage('Thank you for subscribing!'))
      .catch(error => console.error(error));

    // Optionally, clear the input field here
    setEmail('');
  };

  return (
    <footer className="bg-wri-dark-blue" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-20 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-wri-yellow">
                  WRI Conference Home
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-wri-yellow">
                  2024 Conference in Chicago
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-wri-yellow">
                  Registration & More
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-wri-yellow">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="block mt-2 text-sm leading-6 text-gray-300">
                  Contact Us:
                </span>
                <div className="flex mt-2 space-y-4">
                  <a
                    href="tel:847-808-1818"
                    className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                  >
                    +1 847-808-1818
                  </a>
                </div>
                <div className="flex mt-2 space-y-4">
                  <a
                    href="mailto:brandon@wheel-rail-seminars.com"
                    className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
                  >
                    Email Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 subscribe-form">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our mailing list!
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-100">
              Receive the latest Wheel/Rail news, articles and announcements,
              sent to your inbox weekly. No spam. Unsubscribe anytime.
            </p>
            <form
              onSubmit={handleSubmit}
              name="subscribe"
              data-netlify="true"
              className="mt-6 sm:flex sm:max-w-md"
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                data-1p-ignore="true" // This attribute disables the 1Password popup
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-wri-blue hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-blue"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {thankYouMessage && <p>{thankYouMessage}</p>}
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-white/10 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-wri-green hover:text-wri-yellow"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {currentYear} Wheel Rail Seminars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
