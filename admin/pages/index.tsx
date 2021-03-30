import SideBar from "../Components/SideBar/sideBar";
import NavBar from "../Components/NavBar/navBar";
import Footer from '../Components/Footer/Footer';

export default function Home({children}) {
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64">
        <NavBar />
        <div className="px:0 md:px-12 mx-auto w-full flex flex-col bg-gray-200 min-h-screen">
          <div className="flex-grow">
          {children}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
