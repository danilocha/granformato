"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => {
      document.body.classList.remove("bg-title");
    };
  }, []);

  return (
    <div
      className="hero-wrapper hero-8 background-image"
      id="hero"
      style={{ backgroundImage: "url(/assets/img/background.png)" }}
    >
      <div className="container">
        <div className="hero-style8">
          <div className="row">
            <div className="col-lg-8">
              {/* <h2 className="hero-subtitle wow img-custom-anim-left animated text-smoke">
                Bienvenido a Gran Formato
              </h2> */}
              <h1 className="hero-title wow img-custom-anim-left animated text-smoke">
                Impresión Digital<br/>& Diseño Publicitario
              </h1>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-8 offset-lg-7">
              <p className="hero-text wow img-custom-anim-right animated text-smoke">
                Centro de arte e impresión en Melgar. Ofrecemos impresión digital, diseño gráfico, corte láser, plotter de corte y estampados.
              </p>
              <a
                href="https://wa.me/573213235512"
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2 mt-40 wow img-custom-anim-right animated"
              >
                <span className="link-effect">
                  <span className="effect-1">Cotiza por WhatsApp →</span>
                  <span className="effect-1">Cotiza por WhatsApp →</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
