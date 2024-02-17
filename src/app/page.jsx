import Enlace from "@/components/Enlace";
import ImgsPrincipal from "@/components/ImgsPrincipal";
import TopInNav from "@/components/TopInNav";
import { Button } from "antd";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen flex flex-col w-ful">
      <nav className="flex flex-row justify-around items-center text-white">
        <div className="mx-20 my-5 flex flex-row justify-center items-center">
          <Image
            src="/rockasus.png"
            alt="Vercel Logo"
            className=""
            width={60}
            height={24}
            priority
          />
          <p className="font-sans mx-4 text-3xl font-semibold select-none">
            <span className="hover:text-[#f7ef00] cursor-pointer">R</span>
            <span className="hover:text-[#f7ef00] cursor-pointer">o</span>
            <span className="hover:text-[#f7ef00] cursor-pointer">c</span>
            <span className="hover:text-blue-600 cursor-pointer">k</span>
            <span className="hover:text-blue-600 cursor-pointer">a</span>
            <span className="hover:text-blue-600 cursor-pointer">s</span>
            <span className="hover:text-red-600 cursor-pointer">u</span>
            <span className="hover:text-red-600 cursor-pointer">s</span>
          </p>
        </div>
        <div className="mx-16 flex flex-row justify-center items-center">
          <Enlace nombre={"Inicio"} linkTo={"/"} />
          <Enlace nombre={"Servicios"} linkTo={"/servicios"} />
          <Enlace nombre={"Contacto"} linkTo={"/contacto"} />
          <Enlace nombre={"Nosotros"} linkTo={"/nosotros"} />
          <Button type="primary" className="mr-10 ml-3 bg-[#7900ff] text-white font-semibold">💚 Donación</Button>
        </div>
      </nav>
      <div className="px-40 mt-5">
        <ImgsPrincipal />
      </div>
      <div className="text-white">
        
      </div>
    </div>
  );
};
export default page;
