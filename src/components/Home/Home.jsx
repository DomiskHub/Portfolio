import "./Home.scss";
import { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <header className="home__header relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="px-10 lg:px-20 xl:px-32 w-full gradiente-transp">
            <div className="flex items-start md:flex-row md:items-start">
              <div className="header-left flex flex-col gap-4 text-center md:text-left">
                <div className="container flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center text-center mt-4 mb-10">
                    <button
                      onClick={() => setTab(1)}
                      className={`tab-btn mr-10 ${tab === 1 ? "border-b-2 border-green-600 text-green-600" : "text-white hover:text-green-600"}`}
                    >
                      Sobre mi
                    </button>
                    <button
                      onClick={() => setTab(2)}
                      className={`tab-btn ${tab === 2 ? "border-b-2 border-green-600 text-green-600" : "text-white hover:text-green-600"}`}
                    >
                      Experiencia
                    </button>
                  </div>
                </div>
                <div className="header-text flex flex-col gap-2">
                  {tab === 1 && (
                    <div>
                      <h4 className="header-title text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"></h4>
                      <p className="header-p mt-8 text-lg text-center md:text-xl lg:text-2xl font-medium text-main-grey">
                        Soy Front End developer con enfoque especializado en React, con conocimientos en CSS, HTML, y JavaScript. Experimentada en el desarrollo
                        de aplicaciones web dinámicas utilizando ReactJS. Mi conocimiento incluye la implementación de soluciones innovadoras y responsivas,
                        buscando siempre la excelencia en la experiencia del usuario.
                      </p>
                    </div>
                  )}
                  {tab === 2 && (
                    <div>
                      <h4 className="header-title text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, eius..
                      </h4>
                      <p className="header-p mt-8 text-lg text-center md:text-xl lg:text-2xl font-medium text-main-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex?
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex justify-center items-center ">
        <p className="text-white text-2xl aboutme-text ">Conocimientos</p>
      </div>
      <div className="image-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 max-w-[1200px] mt-[50px]  mb-[50px] m-auto ">
        <img src="./src/assets/img/html-5-logo-svgrepo-com.svg" alt="" className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <img src="./src/assets/img/css-3-svgrepo-com.svg" alt="" className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <img src="./src/assets/img/javascript-svgrepo-com.svg" alt="" className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <img src="./src/assets/img/aws-svgrepo-com.svg" alt="" className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <img src="./src/assets/img/aws-amplify-seeklogo.svg" alt="" className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
      </div>
    </>
  );
};
export default Home;
