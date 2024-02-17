const Footer = () => {
  return (
    <div className="h-40 flex flex-col justify-end items-center">
      <div className="h-20 bg-slate-400/25 w-full">
        <p>Hola mundo</p>
      </div>
      <p className="text-white/75 text-center text-sm">
        Todos los derechos reservados. Desarrollado por{" "}
        <strong>Rockasus</strong> © 2023.
      </p>
    </div>
  );
};

export default Footer;
