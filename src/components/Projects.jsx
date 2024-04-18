import React from "react";

const Projects = () => {
  return (
    <div>
      {/* proyectos */}

      <h2 className="text-3xl font-bold text-center my-8">Mis Proyectos</h2>
      <div className="  max-w-[1200px] m-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img class="object-cover w-full rounded-t-lg h-96" src="" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img class="object-cover w-full rounded-t-lg h-96" src="/docs/images/blog/image-4.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto 2</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripción del proyecto 2.</p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img class="object-cover w-full rounded-t-lg h-96" src="/docs/images/blog/image-4.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto 3</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripción del proyecto 3.</p>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img class="object-cover w-full rounded-t-lg h-96" src="/docs/images/blog/image-4.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto 4</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripción del proyecto 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
