import { assets, AboutData } from "../assets/assets";

const About = () => {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-20 flex flex-col gap-10">

    <h1 className="text-gray-800 text-center dark:text-gray-100 text-3xl font-bold"> ABOUT <span className="text-blue-600 dark:text-blue-400">US</span>
    </h1>

      {/* SECTION 1 — IMAGE LEFT + TEXT RIGHT */}
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.about_image}
            alt="About"
            className="w-full max-w-[420px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-gray-600 dark:text-gray-300 text-sm">

          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments
            and managing their health records.
          </p>

          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform,
            integrating the latest advancements to improve user experience and deliver superior service.
          </p>
        </div>
      </div>
      <div className="w-full text-gray-600 dark:text-gray-300 text-sm">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center md:text-left mb-5">
        OUR <span className="text-blue-600 dark:text-blue-400">VISION</span>
      </h2>
        <p>
          Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the
          gap between patients and healthcare providers.
        </p>
          </div>

      {/* HEADING — WHY CHOOSE US */}
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center md:text-left">
        WHY <span className="text-blue-600 dark:text-blue-400">CHOOSE US</span>
      </h2>

      {/* SECTION 2 — RESPONSIVE BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {
        AboutData.map((Aid)=>(
          <div key={Aid.A_id} className="border dark:bg-gray-800 dark:border-gray-700 rounded-xl p-3 shadow-sm hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer">
            <b className="text-gray-800 dark:text-gray-100 group-hover:text-white text-[17px]">
              {Aid.heading}
            </b>
            <p className="text-gray-600 dark:text-gray-300 text-[15px] group-hover:text-white mt-2">
              {Aid.note}
            </p>
          </div>    
        ))
      }
      </div>
    </div>
  );
};

export default About;
