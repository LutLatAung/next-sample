import Image from "next/image";

export default async function Page({ params, searchParams }) {
  console.log(searchParams);
  const p = parseInt(searchParams["p"]) || 1;
  const dataUrl = `http://localhost:3000/api/cars?p=${p}`;
  console.debug(dataUrl);
  const cars = await fetch(dataUrl).then((response) => response.json());

  return (
    <div>
      Cars {cars.length}
      <div className="grid grid-cols-4 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              {/* <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}

              <Image
                src={car.image}
                alt={car.makeName}
                width="0"
                height="0"
                sizes="100"
                className="w-auto h-auto rounded-t-lg"
                priority
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.makeName}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
