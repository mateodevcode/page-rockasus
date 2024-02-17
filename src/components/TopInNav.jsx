import { BsGithub, BsInstagram, BsMoon, BsSun, BsWhatsapp } from "react-icons/bs";

const TopInNav = () => {
  return (
    <div className="h-10 flex flex-row justify-around items-center bg-red-700/30 text-white/65">
        <div className="flex flex-row justify-center items-center">
        <BsWhatsapp className="text-xl mx-2 text-green-600" />
            <p className="font-semibold">675-464-502</p>
        </div>
        <div><p>🚀 Creamos tu sitio web rápido, fácil y sencillo.</p></div>
        <div className="flex flex-row justify-center items-center">
            <BsGithub className="text-xl mx-2" />
            <BsInstagram className="text-xl mx-2" />
            <div className="flex flex-row justify-center items-center">
                {false ? <BsMoon className="text-xl mx-2" /> : <BsSun className="text-xl mx-2" />}
            </div>
        </div>
    </div>
  )
}

export default TopInNav