import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Container from "../components/Shared/Container/Container";

const Main = () => {
   return (

      <Container>
         <Navbar />
         <div className="min-h-[calc(100vh-410px)] pt-2 bg-red-100">
            <Outlet />
         </div>
         <Footer />
      </Container>

   );
};

export default Main;