"use client";

import React from "react";
import { Button, Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "450px",
  color: "#fff",
  lineHeight: "120px",
  textAlign: "center",
  // background: "#364d79",
};
const ImgsPrincipal = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay={true} className="w-6/12">
      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-end items-start"
        >
          <h2 className="text-5xl font-bold text-left font-serif px-10 pt-10">
            Creamos tu sitio web gratis y empieza a vender online.
          </h2>
          <p className="text-xl font-semibold text-left px-10 py-5">
            Aceleramos el crecimiento de tu empresa con soluciones digitales
            personalizadas.
          </p>
          <div className="flex flex-row justify-center items-center px-10 pb-10">
            <Button
              type="primary"
              size="large"
              className="mx-3 bg-[#6a0688] text-white"
            >
              Empezar
            </Button>
            <Button size="large" className="mx-3 text-white">
              Empezar
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-end items-start"
        >
          <h2 className="text-5xl font-bold text-left font-serif px-10 pt-10">
            Digitaliza tu PYME y potencia tu negocio.
          </h2>
          <p className="text-xl font-semibold text-left px-10 py-5">
            Lleva tu negocio al siguiente nivel con estrategias de marketing
            digital efectivas.
          </p>
          <div className="flex flex-row justify-center items-center px-10 pb-10">
            <Button
              type="primary"
              size="large"
              className="mx-3 bg-[#6a0688] text-white"
            >
              Empezar
            </Button>
            <Button size="large" className="mx-3 text-white">
              Empezar
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-end items-start"
        >
          <h2 className="text-5xl font-bold text-left font-serif px-10 pt-10">
            Marketing digital al alcance de todos.
          </h2>
          <p className="text-xl font-semibold text-left px-10 py-5">
            Sitios web profesionales y fáciles de usar, sin necesidad de
            conocimientos técnicos.
          </p>
          <div className="flex flex-row justify-center items-center px-10 pb-10">
            <Button
              type="primary"
              size="large"
              className="mx-3 bg-[#6a0688] text-white"
            >
              Empezar
            </Button>
            <Button size="large" className="mx-3 text-white">
              Empezar
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-end items-start"
        >
          <h2 className="text-5xl font-bold text-left font-serif px-10 pt-10">
            Tu aliado para la transformación digital.
          </h2>
          <p className="text-xl font-semibold text-left px-10 py-5">
            Tu socio estratégico para el éxito online.
          </p>
          <div className="flex flex-row justify-center items-center px-10 pb-10">
            <Button
              type="primary"
              size="large"
              className="mx-3 bg-[#6a0688] text-white"
            >
              Empezar
            </Button>
            <Button size="large" className="mx-3 text-white">
              Empezar
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default ImgsPrincipal;
