

const CollegeCard = ({ college }) => {
   return (

      <div class="p-4 border rounded shadow-md">
         <img src={college.image} alt="College" class="w-full h-40 object-cover mb-4" />
         <h3 class="text-lg font-bold mb-2">{college.name}</h3>
         <p class="text-sm text-gray-500 mb-2">Admission Date: {college.admissionDate}</p>
         {/* <!-- Add other relevant college information here --> */}
         <button class="text-blue-500 hover:underline">Details</button>
      </div>

   );
};

export default CollegeCard;