import React, { useEffect, useState } from 'react';
import Gallery from '../../components/Home/Gallery';
import Research from '../../components/Home/Research';
import Reviews from '../../components/Home/Reviews';
import CollegeCard from '../../components/Home/CollegeCard';

const Home = () => {
   const [colleges, setColleges] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');


   useEffect(() => {
      fetch('/data.json')
         .then((response) => response.json())
         .then((data) => setColleges(data))
         .catch((error) => console.error('Error fetching college data:', error));
   }, []);


   const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
   );

   return (
      <div className="p-4">
         <div className="mb-8">
            {/* Search Field */}
            <input
               type="text"
               placeholder="Search for a college name..."
               className="p-2 border rounded w-full"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
            />
         </div>

         {/* College Cards Section */}
         <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {filteredColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
               ))}
            </div>
         </div>

         {/* College Image Gallery Section */}
         <Gallery />

         {/* Research Papers Section */}
         <Research />

         {/* Reviews Section */}
         <Reviews />
      </div>
   );
};

export default Home;