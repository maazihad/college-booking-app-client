import React, { useEffect, useState } from 'react';

const Gallery = () => {

   const [galleryImages, setGalleryImages] = useState([]);
   useEffect(() => {
      fetch('/data2.json')
         .then((response) => response.json())
         .then((data) => setGalleryImages(data))
         .catch((error) => console.error('Error fetching college data:', error));
   }, []);

   return (
      <div className="mb-8">
         <h2 className="text-3xl text-center font-bold mb-4 shadow-md w-96 p-5 mx-auto">College Image Gallery</h2>
         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {
               galleryImages.map(image => <div
                  key={image.id}
               >
                  <img src={image.imageUrl} alt="" />
                  <p>{image.caption}</p>
               </div>)
            }
         </div>
      </div>
   );
};

export default Gallery;