import { featureData } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-4 col-lg-8 position-relative">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title" style={{color: 'white'}}>Nuestros Servicios!</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-8">
            <div className="feature-static-wrap">
              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch">
                  {featureData.slice(0, 2).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch">
                  {featureData.slice(2, 4).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch">
                  {featureData.slice(4, 6).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch">
                  {featureData.slice(6, 8).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch">
                  {featureData.slice(8, 10).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4 d-flex align-items-stretch justify-content-center">
                  {featureData.slice(10, 12).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="feature-card-icon">
                          <Image
                            width={40}
                            height={40}
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>
                        <h4 className="feature-card-title">
                          <Link
                            scroll={false}
                            href={`/service-details/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="feature-card-text" style={{flexGrow: 1}}>{elm.text}</p>
                        <Link
                          scroll={false}
                          href={`/service-details/${elm.id}`}
                          className="link-btn"
                        >
                          <span className="link-effect">
                            <span className="effect-1">VER DETALLES</span>
                            <span className="effect-1">VER DETALLES</span>
                          </span>
                          <Image
                            width={13}
                            height={13}
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
