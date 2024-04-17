import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="black dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* "Portfolio" */}
            <div className="rrss relative text-center pb-3 text-white">
              <span className="relative z-10 text-2xl font-semibold whitespace-nowrap dark:text-white">Dominique Piffardi</span>
              <div className=" absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 gradient-animation"></div>
            </div>
          </Link>
          {/* Iconos de redes sociales */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="block py-2 px-3 text-white">
              <div className="rrss relative">
                <div className="relative z-10 flex items-center justify-center ">
                  <a href="https://www.linkedin.com/in/dominique-piffardi-hasard-3b9136181/" target="_blank" className="m-3">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
                  </a>
                  <a href="https://github.com/DomiskHub" target="_blank" className="m-3">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
                  </a>
                  <a href="mailto:domiskp@gmail.com" target="_blank" className="m-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"></div>
                </div>
              </div>
            </div>
            {/* Botón de menú */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          {/* Menú de navegación */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-violet-500 rounded md:bg-transparent md:text-violet-500 md:p-0 md:dark:text-blue-500 "
                  aria-current="page"
                >
                  Sobre Mi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Experiencia y Estudios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
