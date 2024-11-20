import Link from "next/link";

const Home = () => {

  return (

    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Eco-Friendly Choices
                <br className="hidden md:block" />
                for a Greener {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Tomorrow!!!
                </span>
              </h2>
             
              <p className="text-base text-gray-700 md:text-lg">
                Discover a world of sustainable shopping with us! Our curated selection of eco-friendly products ensures you make a positive impact with every purchase. From biodegradable essentials to reusable innovations, explore our diverse range designed to support a greener planet while meeting your everyday needs. Shop consciously and join the movement towards a more sustainable future.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                href="/search"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-green-600 hover:bg-green-600 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Start Shopping</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="4,4 22,4 19,14 4,14 "
                  />
                  <circle
                    cx="4"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <circle
                    cx="20"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="1,1 4,4 4,14 2,18 23,18 "
                  />
                </svg>
              </Link>
             
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://th.bing.com/th/id/R.8e920caaa40d78ea01aae2149849b29e?rik=McJfNjLVWTH8RA&riu=http%3a%2f%2fwww.allpackchina.com%2fwp-content%2fuploads%2f2022%2f11%2ffood-packaging-4.jpg&ehk=Zq1OJQFWtzI44tkj0YBy%2f5JkDdZHFr7PngZGcHjINAw%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />

          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              Key Features
            </h5>
            <p className="mb-6 text-gray-900">
              These features focus on aspects that highlight its environmental benefits, user experience, and unique selling points.
            </p>
            <div className="flex items-center">
              <Link
              href={'/aboutus'}
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-green-600 hover:bg-green-600 focus:shadow-outline focus:outline-none"             >
                View More
              </Link>
             
            </div>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Sustainable Material</h6>
              <p className="text-sm text-gray-700">
                Products made from biodegradable,recycled,and sustainably sourced materials to minimize environmental impact.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Zero Waste Packaging</h6>
              <p className="text-sm text-gray-700">
                Packaging that is compostable, recyclable, or reusable, ensuring that nothing ends up in a landfill.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Reusable Solution </h6>
              <p className="text-sm text-gray-700">
                Products designed for multiple uses, helping to reduce the need for single-use items and decrease overall waste.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Green Innovation</h6>
              <p className="text-sm text-gray-700">
                Constantly innovating to bring you the latest in eco-friendly technology, pushing the boundaries of sustainable living.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              819
            </h6>
            <p className="mb-2 font-bold text-md">Downloads</p>
            <p className="text-gray-700">
              Every download represents a step towards a greener future. Join us in making eco-conscious choices with ease.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              Choosing sustainable products is a step towards a healthier planet.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">91</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              True happiness is found when your lifestyle choices, such as opting for sustainable products, align with your values for a greener planet.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
            <p className="mb-2 font-bold text-md">Orders</p>
            <p className="text-gray-700">
              Happiness comes from knowing that each eco-friendly order you place helps create a more sustainable world.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-300">

        <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img
             className="object-cover  h-20 rounded shadow-lg md: h-20"
             src="/logo.png" alt="" />
              
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  Go Green
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                  Empowering sustainable choices for a better world.
                </p>
                <p className="mt-4 text-sm text-gray-800">
                  Discover eco-friendly products and brands that care for both you and the planet.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <a
                  href="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  850-123-5021
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:info@gogreen.mail"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  info@gogreen.mail
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  1805 Eco Avenue, Green City, New Delhi 1001
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-900">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Join our community for tips, eco-news, and special offers.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};
export default Home;