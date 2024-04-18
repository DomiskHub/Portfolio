import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="m-auto max-w-[1200px] text-white text-3xl tracking-[2px] flex justify-center items-center h-[100vh]">
        <div>
          <p>
            Hola! Soy Front End developer con enfoque especializado en React, con conocimientos en CSS, HTML, y JavaScript. Experimentada en el desarrollo de
            aplicaciones web dinámicas utilizando ReactJS. Mi conocimiento incluye la implementación de soluciones innovadoras y responsivas, buscando siempre
            la excelencia en la experiencia del usuario.
          </p>
        </div>
      </div>
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
