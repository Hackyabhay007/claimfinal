import React, { useState } from 'react';
import Cart1 from './Cart1';
import Cart2 from './Cart2';
import Cart3 from './Cart3';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'All Unclaimed', component: <Cart1  /> },
    { id: 1, label: 'Claimed', component: <Cart2/> },
    { id: 2, label: 'Expired', component: <Cart3 /> },
  ];

  return (
    <div className=" w-full">
      <div className="flex space-x-2 ">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-2 ${activeTab === tab.id ? 'border-b-2 text-[#3e3e3e] text-lg font-semibold border-[#fd9b09]' : 'border-b-2 border-transparent text-[#3e3e3e] text-lg font-semibold '} focus:outline-none`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4   w-[100%]">
        {tabs.map(tab => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'gap-3   justify-center lg:justify-normal flex-wrap flex' : 'hidden'}`}>
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
