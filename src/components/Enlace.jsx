const Enlace = ({ nombre, linkTo }) => {
  return <a className="hover:bg-black/20 py-2 px-4 rounded-md" href={linkTo}>{nombre}</a>;
};

export default Enlace;
