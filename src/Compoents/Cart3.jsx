import React from "react";

function Cart3() {
  return (
    <div className="w-full border p-3  h-80 bg-[#1c1c1d] border-gray-600 rounded-lg">
      <div className="flex h-40  items-center justify-evenly  ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="">
            <p className="lg:text-3xl font-bold">$0</p>
          </div>
          <div>
            <p className="lg:text-lg">Expired value</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="">
            <p className="lg:text-3xl font-bold">0</p>
          </div>
          <div>
            <p className="lg:text-lg">Expired Claimables</p>
          </div>
        </div>
      </div>
      <div className=" gap-5 flex flex-col items-center justify-center  ">
        <div className="lg:w-[70%] "
        >
          <p className="text-center  text-sm leading-none  lg:font-medium lg:text-lg ">
            Never miss a Claimable again! Add more wallets, set up alerts, and
            claim your assets. Become a Citizen today to unlock premium
            Claimables.
          </p>
        </div>
        <div>
            <button className="uppercase  text-xs px-3 py-1 rounded-full md:px-6 md:py-2 bg-red-500">
                Become a citizen
            </button>
        </div>
      </div>
    </div>
  );
}

export default Cart3;
