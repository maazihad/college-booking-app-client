import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
   return (
      <footer className="bg-gray-800 py-8 text-white px-10">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
               <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-4">S College Institution .Com</h3>
                  <p className="text-sm">
                     A web application that allows users to book college services and facilities in a user-friendly way.
                  </p>
               </div>
               <div className="md:w-1/3 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="text-sm">
                     <li className="mb-2">
                        <a href="/">Home</a>
                     </li>
                     <li className="mb-2">
                        <a href="/colleges">Colleges</a>
                     </li>
                     <li className="mb-2">
                        <a href="/admission">Admission</a>
                     </li>
                     <li className="mb-2">
                        <a href="/mycollege">My College</a>
                     </li>
                     <li className="mb-2">
                        <a href="/profile">Profile</a>
                     </li>
                  </ul>
               </div>
               <div className="md:w-1/3 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <p className="text-sm">
                     Address: 1/421 College Street, Chattogram, BD
                  </p>
                  <p className="text-sm">
                     Email: contact@sci.com
                  </p>
                  <div className="mt-4 flex mr-2  items-center">
                     <a href="https://www.facebook.com/maazihadin" target="_blank" className="mr-2">
                        <BsFacebook size={20} />
                     </a>
                     <a href="https://twitter.com/maazihad" target="_blank" className="mr-2">
                        <BsTwitter size={20} />
                     </a>
                     <a href="https://www.instagram.com/maazihadin/" target="_blank" className="mr-2">
                        <BsInstagram size={20} />
                     </a>
                     <a href="https://www.linkedin.com/in/maazihad/" target="_blank" className="mr-2">
                        <BsLinkedin size={20} />
                     </a>
                  </div>
               </div>
            </div>
            <hr className="my-8 border-gray-700" />
            <p className="text-sm text-center">&copy; {new Date().getFullYear()} Your College Booking App. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;