import React from "react";

function Bottom() {
  return (
    <div class=" bg-[#171717]  px-4 py-20 sm:px-6 lg:px-12">
      <div class="mt-8 grid grid-cols-2  gap  lg:mt-0 lg:grid-cols-6 lg:gap-y-16 ">
        <div class="col-span-4 lg:col-span-3  lg:grid-cols-3">
          <div>
            <h2 class="text-2xl font-bold text-[#bbbbbb] mb-7">
              Get connected
            </h2>
          </div>

          <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5  lg:justify-start">
            <li className=" bg-[#1e1e1e] hover:bg-black transition  rounded-full p-2 ">
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                class="text-white  transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li className=" bg-[#1e1e1e] hover:bg-black transition rounded-full p-2 ">
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                class="text-white transition hover:opacity-75"
              >
                <span class="sr-only">Twitter</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>

            <li className="bg-[#1e1e1e] hover:bg-black transition rounded-full p-2">
              <a
                href="https://www.tiktok.com"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">TikTok</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
                </svg>
              </a>
            </li>

            <li className="bg-[#1e1e1e] hover:bg-black transition rounded-full p-2">
              <a
                href="https://www.youtube.com"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only"></span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.635 3.184C18.467 2.466 12 2.466 12 2.466s-6.466 0-7.635.718c-.92.513-1.596 1.299-1.907 2.183-.594 1.632-.594 5.038-.594 5.038s0 3.405.594 5.038c.311.884.986 1.67 1.907 2.183C5.534 21.534 12 21.534 12 21.534s6.467 0 7.635-.718c.92-.513 1.596-1.299 1.907-2.183.594-1.632.594-5.038.594-5.038s0-3.405-.594-5.038c-.311-.884-.986-1.67-1.907-2.183zM10.156 15.341V8.659L15.75 12l-5.594 3.341z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-4 lg:grid-cols-3    lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full  ">
            <h2 class="text-2xl mb-7 font-bold text-[#bbbbbb]">
              Get the daily crypto brief
            </h2>

            <div class="  focus-within:ring-0 sm:flex sm:items-center sm:gap-4">
              <input
                type="email"
                id="UserEmail"
                placeholder="Email address"
                class="w-full p-4 focus:outline-none   border-none  placeholder:tracking-wider placeholder:text-[16px] placeholder:font-light bg-[#1e1e1e]   rounded-full focus:border-0 focus-within:bg-white focus:ring-0 sm:text-sm"
              />

              <button class="mt-1 w-full rounded-full  bg-white px-10 py-3 text-md font-medium    tracking-wide text-black transition-none hover:bg-gray-400 sm:mt-0 sm:w-auto sm:shrink-0">
                Join for free
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
