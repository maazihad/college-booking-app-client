

const CollegeCard = ({ college }) => {
   return (

      <div className="p-4 border rounded shadow-md">
         <img src={college.image} alt="College" className="w-full h-40 object-cover mb-4" />
         <h3 className="text-lg font-bold mb-2">{college.name}</h3>
         <p className="text-sm text-gray-500 mb-2">Admission Date: {college.admissionDate}</p>

         <button className="text-blue-500 hover:underline">Details</button>
      </div>

   );
};

export default CollegeCard;