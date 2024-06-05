import React from "react";

function Footer() {
  return (
    <footer className=" font-[manrope] font-bold ">
      <div className="mx-auto text-white max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1  gap-10   lg:grid-cols-4 ">
          <div className="lg:col-span-2 grid-cols-2 ">
            <div className="flex justify-center sm:justify-start">
              <svg
                className="text-white"
                width="140"
                height="31"
                viewBox="0 0 140 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.387 14.429C15.387 16.4055 14.7049 17.8522 13.3419 18.769C11.979 19.6859 10.0862 20.1444 7.66503 20.1444H0.228516V0.417969H7.22169C9.7568 0.417969 11.5741 0.785816 12.6707 1.52288C13.7674 2.25994 14.3151 3.42524 14.3151 5.0229C14.3151 6.24859 14.0172 7.24232 13.4215 8.00272C12.8258 8.76311 11.8939 9.27096 10.6256 9.52763C12.2851 9.75547 13.4929 10.2784 14.2506 11.0951C15.0082 11.9131 15.387 13.0249 15.387 14.4304V14.429ZM10.2386 5.90545C10.2386 5.15466 9.96132 4.63446 9.40955 4.34485C8.85641 4.05525 7.99856 3.90975 6.836 3.90975H4.26246V8.14272H6.72208C7.91346 8.14272 8.79739 7.97664 9.37523 7.64448C9.95171 7.31232 10.2399 6.73173 10.2399 5.90545H10.2386ZM11.268 14.0735C11.268 13.1896 10.9674 12.5651 10.3676 12.1986C9.76641 11.8335 8.64229 11.6496 6.99248 11.6496H4.26109V16.5812H6.3062C7.87915 16.5812 8.96347 16.5057 9.55916 16.3533C10.1548 16.201 10.5886 15.9443 10.8603 15.5833C11.1321 15.2224 11.268 14.7186 11.268 14.0722V14.0735Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.853 20.1457L23.4029 0.417969H28.6515L35.2151 20.1457H31.0823L29.766 16.1406H22.1442L20.8568 20.1457H16.853ZM23.2876 12.62H28.6213L25.9613 4.46701L23.2876 12.62Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M48.9668 20.1457L41.7595 6.04819V20.1457H37.812V0.417969H43.0456L49.7519 13.718V0.417969H53.7131V20.1457H48.9654H48.9668Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M68.6661 20.1457L63.1896 11.9063L61.9886 13.2884V20.1444H57.9561V0.417969H61.9886V8.11527L68.4671 0.417969H73.1722L65.7934 8.91409L73.7007 20.1471H68.6675L68.6661 20.1457Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M76.3018 20.1457V0.417969H80.3343V16.4686H88.6575V20.1457H76.3018Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M91.2451 20.1457V0.417969H104.1V3.9674H95.2777V8.17291H102.714V11.7361H95.2777V16.4686H104.1V20.1457H91.2451Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M122.06 14.4269C122.06 16.4034 121.409 17.9187 120.108 18.9742C118.807 20.0297 116.888 20.5568 114.353 20.5568C112.599 20.5568 111.075 20.2672 109.784 19.688C108.492 19.1087 107.441 18.1727 106.631 16.8797L109.734 14.5134C110.191 15.1599 110.625 15.6444 111.035 15.967C111.446 16.2895 111.932 16.5421 112.494 16.7219C113.057 16.903 113.705 16.9923 114.439 16.9923C115.536 16.9923 116.391 16.8042 117.006 16.4295C117.621 16.0548 117.928 15.4811 117.928 14.7124C117.928 14.276 117.821 13.9095 117.607 13.6144C117.393 13.3193 117.071 13.0654 116.642 12.8513C116.214 12.6371 115.47 12.3928 114.412 12.1169C113.382 11.841 112.412 11.5638 111.502 11.2824C110.592 11.0024 109.806 10.6387 109.143 10.1926C108.48 9.74653 107.958 9.18515 107.577 8.50985C107.195 7.83593 107.004 6.98494 107.004 5.95827C107.004 4.0861 107.638 2.6257 108.907 1.5757C110.175 0.525691 111.991 0 114.354 0C117.776 0 120.199 1.16942 121.619 3.50688L118.545 5.90199C118.001 5.06611 117.392 4.46767 116.714 4.10532C116.037 3.74434 115.231 3.56316 114.297 3.56316C113.362 3.56316 112.601 3.73198 112.015 4.06963C111.429 4.40728 111.136 4.93709 111.136 5.65905C111.136 6.29592 111.44 6.78317 112.051 7.11945C112.66 7.4571 113.724 7.79612 115.24 8.13789C116.078 8.35613 116.907 8.59221 117.728 8.84338C118.547 9.09593 119.279 9.44456 119.923 9.89064C120.566 10.3367 121.084 10.9214 121.475 11.6434C121.866 12.3654 122.061 13.2918 122.061 14.4228L122.06 14.4269Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M139.783 14.4269C139.783 16.4034 139.133 17.9187 137.832 18.9742C136.53 20.0297 134.612 20.5568 132.076 20.5568C130.322 20.5568 128.799 20.2672 127.507 19.688C126.216 19.1087 125.164 18.1727 124.354 16.8797L127.458 14.5134C127.915 15.1599 128.349 15.6444 128.759 15.967C129.169 16.2895 129.655 16.5421 130.218 16.7219C130.781 16.903 131.429 16.9923 132.163 16.9923C133.26 16.9923 134.115 16.8042 134.73 16.4295C135.345 16.0548 135.652 15.4811 135.652 14.7124C135.652 14.276 135.545 13.9095 135.331 13.6144C135.117 13.3193 134.794 13.0654 134.366 12.8513C133.938 12.6371 133.194 12.3928 132.136 12.1169C131.106 11.841 130.136 11.5638 129.226 11.2824C128.316 11.0024 127.529 10.6387 126.866 10.1926C126.203 9.74653 125.682 9.18515 125.3 8.50985C124.919 7.83593 124.728 6.98494 124.728 5.95827C124.728 4.0861 125.362 2.6257 126.63 1.5757C127.898 0.525691 129.714 0 132.078 0C135.5 0 137.922 1.16942 139.343 3.50688L136.268 5.90199C135.725 5.06611 135.115 4.46767 134.437 4.10532C133.761 3.74434 132.955 3.56316 132.02 3.56316C131.086 3.56316 130.325 3.73198 129.739 4.06963C129.153 4.40728 128.859 4.93709 128.859 5.65905C128.859 6.29592 129.164 6.78317 129.775 7.11945C130.384 7.4571 131.448 7.79612 132.963 8.13789C133.802 8.35613 134.631 8.59221 135.452 8.84338C136.271 9.09593 137.003 9.44456 137.646 9.89064C138.29 10.3367 138.808 10.9214 139.199 11.6434C139.59 12.3654 139.785 13.2918 139.785 14.4228L139.783 14.4269Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M139.766 27.1797H0.215332V30.9995H139.766V27.1797Z"
                  fill="#E82535"
                ></path>
              </svg>
            </div>

            <p className="mt-6 max-w-md  tracking-wider text-[12px] text-center leading-relaxed  sm:max-w-lg sm:text-left">
              Not financial or tax advice.<span className="text-[#929092] font-light "> Bankless is not a bank, a credit
              union, or any other type of financial institution. No content on
              this website is financial, accounting, legal or tax advice.
              Bankless content is strictly educational and is not investment
              advice or a solicitation to buy or sell any assets or to make any
              financial decisions. This newsletter is not tax advice. Talk to
              your accountant. Do your own research.</span>
            </p>
            <p className="mt-6 max-w-md tracking-wider text-[12px] text-center font-light leading-relaxed  sm:max-w-lg sm:text-left">
              Disclosure. <span className="text-[#929092]"> From time-to-time we may add links in this newsletter
              to this website to products we use. We may receive commission if
              you make a purchase through one of these links. Additionally, the
              Bankless team holds crypto assets. See our investment conflict of
              interest <span className=" text-[#b2c1bc] hover:underline hover:text-red-500 hover:cursor-pointer"> disclosures here.</span> Bankless, LLC is doing business in
              California as Bonkless, LLC.</span>
            </p>
            <p className="mt-3 max-w-md tracking-wider text-[#929092] text-[12px] font-light  text-center leading-relaxed  sm:max-w-lg sm:text-left">
              This site is protected by reCAPTCHA.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2  md:grid-cols-3 lg:col-span-2">
            <div className="text-left">
              <p className="text-[22px]   ">Go Bankless</p>

              <ul className="mt-8 text-[16px] font-normal space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Become a Citizen
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    About us
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Merch
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Advertise With Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Disclosures
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <p className="text-[22px]  ">Tools</p>

              <ul className="mt-8 space-y-4  font-normal  text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Citizen Discord
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Airdrop Hunter
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Claimables
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Token Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Perks
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <p className="text-[22px]  ">Media</p>

              <ul className="mt-8 text-[16px]  font-normal  space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    Bankless Podcast
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    {" "}
                    Articles{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    {" "}
                    Guides{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    {" "}
                    Daily Crypto Brief{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-500"
                    href="#"
                  >
                    {" "}
                    Changelog{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24   pt-6">
          <div className="text-center sm:flex sm:justify-center sm:text-left">
            <p className="mt-4 font-normal text-[#777b61] text-sm  sm:order-first sm:mt-0">
              &copy; 2024 Bankless, LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
