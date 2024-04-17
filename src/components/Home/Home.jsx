import React, { useEffect } from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="body">
        <div>
          <p>
            Hola! Soy Front End developer con enfoque especializado en React, con conocimientos en CSS, HTML, y JavaScript. Experimentada en el desarrollo de
            aplicaciones web dinámicas utilizando ReactJS. Mi conocimiento incluye la implementación de soluciones innovadoras y responsivas, buscando siempre
            la excelencia en la experiencia del usuario.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src="./src/assets/img/html-5-logo-svgrepo-com.svg" alt="" />
        <img src="./src/assets/img/css-3-svgrepo-com.svg" alt="" />
        <img src="./src/assets/img/javascript-svgrepo-com.svg" alt="" />
        <img src="./src/assets/img/aws-svgrepo-com.svg" alt="" />
        <img src="./src/assets/img/aws-amplify-seeklogo.svg" alt="" />
      </div>
    </>
  );
};

export default Home;
