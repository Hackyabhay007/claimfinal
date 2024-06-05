import React, { useEffect, useState } from "react";
import logo from "../Assests/bankless logo-01.svg";
import db from '../firebase';
function Cart1() {
  const [mData,setMData] = useState();
  const poapData = [
  
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/32x32/13855.png",
      logoUrl: "path/to/logo2.png",
      title: "Ethereum",
      description: "2024 Ethereum Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/21259.png",
      logoUrl: "path/to/logo3.png",
      title: "ZetaChain",
      description: "2024 ZetaChain Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/22353.png",
      logoUrl: "path/to/logo4.png",
      title: "Shardeum",
      description: "2024 Shardeum Badge",
    },
    {
      imageUrl: "https://img.cryptorank.io/coins/atlendis1669104606532.png",
      logoUrl: "path/to/logo5.png",
      title: "Atlendis",
      description: "2024 Atlendis Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eeQODtOmUEsaKx-s1EsKnHg7SyU8uCLYng&s",
      logoUrl: "path/to/logo6.png",
      title: "Thetanuts Finance",
      description: "2024 Thetanuts Finance Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX07O42RU2cjvnEb9w0x1DxcuDG7D94kow5w&s",
      logoUrl: "path/to/logo7.png",
      title: "Quai Network",
      description: "2024 Quai Network Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/3822.png",
      logoUrl: "path/to/logo8.png",
      title: "Fuel",
      description: "2024 Fuel Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/24091.png",
      logoUrl: "path/to/logo9.png",
      title: "zkSync",
      description: "2024 zkSync Badge",
    },
    {
      imageUrl: "https://assets.coingecko.com/coins/images/28206/large/ftxG9_TJ_400x400.jpeg?1696527208",
      logoUrl: "path/to/logo10.png",
      title: "LayerZero",
      description: "2024 LayerZero Badge",
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
      logoUrl: "path/to/logo11.png",
      title: "MetaMask",
      description: "2024 MetaMask Badge",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/146112105?s=280&v=4",
      logoUrl: "path/to/logo12.png",
      title: "Renzo Protocol",
      description: "2024 Renzo Protocol Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxIzRCf8zch_g9OTM2XxPj-Io_aOQYStoow&s",
      logoUrl: "path/to/logo13.png",
      title: "EigenLayer",
      description: "2024 EigenLayer Badge",
    },
    {
      imageUrl: "https://img.cryptorank.io/coins/taiko1681992089391.png",
      logoUrl: "path/to/logo14.png",
      title: "Taiko",
      description: "2024 Taiko Badge",
    },
    {
      imageUrl: "https://assets.coingecko.com/coins/images/36459/standard/pacmoon.png?1711501114",
      logoUrl: "path/to/logo15.png",
      title: "Pacmoon",
      description: "2024 Pacmoon Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWdMPFcoMKtDG-PpsCa9bVGrOemtn8zs61w&s",
      logoUrl: "path/to/logo16.png",
      title: "Blast",
      description: "2024 Blast, Points and Gold Badge",
    },
    {
      imageUrl: "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/game/niftyisland_20220629092601.png",
      logoUrl: "path/to/logo17.png",
      title: "Nifty Island",
      description: "2024 Nifty Island Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXJTeIwkCmeceM35nvZ-OAWBiyhDWzO15ZA&s",
      logoUrl: "path/to/logo18.png",
      title: "OpenSea",
      description: "2024 OpenSea Badge",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxZRaBxlITdoXrvz5b_-oetIatYqKOGZURQ&s",
      logoUrl: "path/to/logo19.png",
      title: "Lens Protocol",
      description: "2024 Lens Protocol Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/27657.png",
      logoUrl: "path/to/logo20.png",
      title: "Linea",
      description: "2024 Linea Badge",
    },
    {
      imageUrl: "https://s3.coinmarketcap.com/static-gravity/image/4dc5810324c74688a5a1b805f7506ec5.jpg",
      logoUrl: "path/to/logo21.png",
      title: "Jupiter",
      description: "2024 Jupiter Badge",
    },
    {
      imageUrl: "https://changelly.com/blog/wp-content/uploads/2023/06/sta-1.svg",
      logoUrl: "path/to/logo22.png",
      title: "Starknet",
      description: "2024 Starknet Badge",
    },
    {
      imageUrl: "https://assets.coingecko.com/coins/images/35087/large/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954",
      logoUrl: "path/to/logo23.png",
      title: "Wormhole",
      description: "2024 Wormhole Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/22861.png",
      logoUrl: "path/to/logo24.png",
      title: "Celestia",
      description: "2024 Celestia Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/18876.png",
      logoUrl: "path/to/logo25.png",
      title: "Apecoin",
      description: "2024 Apecoin Badge",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/11156.png",
      logoUrl: "path/to/logo26.png",
      title: "Dydx",
      description: "2024 Dydx Badge",
    },
   
  ];

  const getRandomPoapItems = () => {
    // Check if poapData is defined and has at least 2 items
    if (!Array.isArray(poapData) || poapData.length < 2) {
      return [];
    }
  
    // Generate two random indices within the range of the poapData array
    const indices = new Set();
    while (indices.size < 2) {
      indices.add(Math.floor(Math.random() * poapData.length));
    }
  
    // Extract the items at the randomly generated indices
    return Array.from(indices).map(index => poapData[index]);
  };
  
  const user =localStorage.getItem('walletAddress')
  const collection = 'banklessUsers'


  useEffect(() => {
    const user = localStorage.getItem('walletAddress');
    const collection = 'banklessUsers';

    db.collection(collection).doc(user).get()
      .then((doc) => {
        if (doc.exists) {
          setMData(doc.data());
        } else {
          const newUserData = {
            walletAddress: user,
            dollar: localStorage.getItem('dollar'),
            userArray: getRandomPoapItems()
          };
          setMData(newUserData);
          db.collection(collection).doc(user).set(newUserData)
            .then(() => {
              console.log('Array saved to Firestore:', newUserData);
            })
            .catch((error) => {
              console.error('Error saving data to Firestore:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error retrieving data from Firestore:', error);
      });
  }, []);

  if (!mData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {mData.userArray.map((index, key) => (
        <div className="">
          <p className="mb-3 text-xl lg:text-2xl font-semibold">{index.title}</p>
          <div className="h-80 flex flex-col items-center justify-center w-56 rounded-lg">
            <div className="h-1/2 bg-[#0b1824] w-full rounded-t-xl flex items-center justify-center">
              <img src={index.imageUrl} className=" object-cover rounded-full h-24 w-24" alt="" />
            </div>
            <div className="h-1/2 bg-[#1f1f1f] rounded-b-xl w-full">
              <div className="flex items-center px-2 justify-between w-full">
                <div>
                  <img src={logo} className="h-12 p-2 w-12" alt="" />
                </div>
                <div>
                  <button className="bg-[#323233] text-sm text-[#969696] font-semibold px-2 py- text-center rounded-full connectButton">
                    {index.title}
                  </button>
                </div>
              </div>
              <div className="px-2">
                <p className="font-semibold text-lg">Bankless</p>
                <p className="text-sm text-gray-400">2024 Bankless Badge</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cart1;
