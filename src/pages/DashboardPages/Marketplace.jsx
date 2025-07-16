import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiHeart, FiRefreshCw } from 'react-icons/fi';
import { FaEthereum } from 'react-icons/fa';

const nftData = [
  { id: 1, image: 'https://i.seadn.io/s/raw/files/a76834839212a58881d4a2be8551454e.png?auto=format&dpr=1&w=1000', title: 'Abstract Color', creator: 'PixelPioneer', price: 2.5, likes: 120 },
  { id: 2, image: 'https://i.seadn.io/s/raw/files/b4a536cf0613a073356cec423974c522.png?auto=format&dpr=1&w=1000', title: 'Cyber Cityscape', creator: 'NeoNinja', price: 1.8, likes: 256 },
  { id: 3, image: 'https://i.seadn.io/s/raw/files/095a5526442525143616d25a383be4f5.png?auto=format&dpr=1&w=1000', title: 'Forest Spirit', creator: 'ArtisanAura', price: 3.2, likes: 432 },
  { id: 4, image: 'https://i.seadn.io/s/raw/files/42940247658514800363222049188188184698889955381582248537553255118742838476801.png?auto=format&dpr=1&w=1000', title: 'Oceanic Dream', creator: 'DeepDive', price: 4.1, likes: 512 },
  { id: 5, image: 'https://i.seadn.io/s/raw/files/e91cb71f540383141f473d0a396245a4.png?auto=format&dpr=1&w=1000', title: 'Galactic Voyager', creator: 'StarSailor', price: 5.0, likes: 820 },
  { id: 6, image: 'https://i.seadn.io/s/raw/files/15a51051f6a15a7746a145155e8a5568.png?auto=format&dpr=1&w=1000', title: 'Retro Rewind', creator: 'VintageVibes', price: 1.2, likes: 98 },
];

const topMovers = [
    { id: 7, title: 'CryptoPunk #7804', image: 'https://i.seadn.io/s/raw/files/e83213a948820b38596ae86a8757f2a1.png?auto=format&dpr=1&w=1000', change: '+120%', price: 4200 },
    { id: 8, title: 'Bored Ape #8817', image: 'https://i.seadn.io/s/raw/files/2f3e7b966a33e61e0f4f2d703b49da4c.png?auto=format&dpr=1&w=1000', change: '+95%', price: 83 },
    { id: 9, title: 'Azuki #9605', image: 'https://i.seadn.io/s/raw/files/489a80ce421303a29f074d7281c19b16.png?auto=format&dpr=1&w=1000', change: '+75%', price: 11.4 },
];

const NFTCard = ({ nft }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <img src={nft.image} alt={nft.title} className="w-full h-64 object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800">{nft.title}</h3>
      <p className="text-sm text-gray-500 mt-1">by {nft.creator}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-lg font-bold text-blue-600">
          <FaEthereum className="mr-2" />
          <span>{nft.price} ETH</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FiHeart className="mr-2" />
          <span>{nft.likes}</span>
        </div>
      </div>
      <button className="mt-5 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2 ease-in-out">
        Place a Bid
      </button>
    </div>
  </div>
);

const TopMoverCard = ({ mover }) => (
    <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
        <img src={mover.image} alt={mover.title} className="w-16 h-16 rounded-lg object-cover"/>
        <div className="ml-4 flex-grow">
            <h4 className="font-bold text-gray-800">{mover.title}</h4>
            <div className="flex items-center text-sm text-blue-600 font-semibold">
                <FaEthereum className="mr-1"/> {mover.price} ETH
            </div>
        </div>
        <div className="text-right">
            <p className="font-bold text-green-500 text-lg">{mover.change}</p>
            <p className="text-xs text-gray-400">24h Change</p>
        </div>
    </div>
);

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNfts = nftData.filter(nft => 
    nft.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Discover Digital Art & Collectibles</h1>
          <p className="text-gray-500 mt-2">Explore, collect, and sell extraordinary NFTs.</p>
        </div>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
          Create
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md mb-8">
        <div className="relative flex-grow">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search items, collections, and accounts" 
            className="w-full bg-transparent pl-12 pr-4 py-3 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <button className="flex items-center text-gray-600 font-medium px-4">
          <span>All Categories</span>
          <FiChevronDown className="ml-2" />
        </button>
        <button className="flex items-center text-gray-600 font-medium px-4">
          <span>All Items</span>
          <FiChevronDown className="ml-2" />
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-8">
        {/* NFT Grid */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredNfts.map(nft => <NFTCard key={nft.id} nft={nft} />)}
          </div>
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center mx-auto">
              <FiRefreshCw className="mr-2 animate-spin"/>
              Load More
            </button>
          </div>
        </div>

        {/* Top Movers */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Movers</h2>
            <div className="space-y-5">
              {topMovers.map(mover => <TopMoverCard key={mover.id} mover={mover}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
