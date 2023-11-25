
import React, { useState } from 'react';
import './App.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import images from './images.json';

const categories = [
  {
    id: 1,
    name: "All"
  },
  {
    id: 2,
    name: 'Branding',
  },
  {
    id: 3,
    name: "Design"
  },
  {
    id: 4,
    name: "Development"
  }
];

function GridGallery() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  const filteredImages = activeCategoryId === 1
    ? images
    : images.filter(image => image.category === activeCategoryId);

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <div className='text-left mx-4'>
        <h1 className="text-2xl font-bold mb-2">Gallery</h1>
        <span className="block text-blue-500 text-sm">PAGES -&gt; GALLERY</span>
      </div>
      <div className='w-full place-content-center text-center mx-auto p-8'>
        <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
        <h3 className="text-sm font-semibold mb-4 text-gray-600 p-2 rounded">Loren ipsum is placeholder text commonly used in the graphics, print, and publishing industries</h3>
        <div className="mb-4">
          {categories?.map((cat) => (
            <button
              key={cat.id}
              className={`${activeCategoryId === cat.id ? 'bg-green-500' : 'bg-white !text-black'} hover:bg-green-500 text-white font-bold py-2 px-4 mb-2 rounded-full border mr-1`}
              onClick={() => { setActiveCategoryId(cat.id) }}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <SlideshowLightbox className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto" showArrows={true} showThumbnails={true} key={activeCategoryId}>
          {filteredImages?.map((image, index) => (
            <img className="w-full rounded" src={image.src} alt={image.alt} key={index} />
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default GridGallery;
