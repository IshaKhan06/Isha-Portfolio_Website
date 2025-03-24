import Link from "next/link";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Header/>
      
      {/* Project Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-gray-600 text-white text-center">
        <h1 className="text-5xl font-extrabold text-black tracking-tight uppercase">Projects</h1>
        <p className="mt-8 text-3xl text-black max-w-6xl mx-auto leading-relaxed">
        Welcome to my Projects section! This is where I showcase my expertise in Next.js, Tailwind CSS, TypeScript, and Sanity.io, demonstrating my ability to build responsive, user-friendly, and high-performance web applications. Each project highlights my passion for creating interactive UIs, dynamic content, and seamless user experiences. Explore my work to see how I bring ideas to life with modern web development technologies.
        </p>
      </section>

      {/* Project Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-gray-600 text-center">
        <h2 className="text-4xl font-extrabold text-black uppercase mt-10">Explore Projects</h2>
        <p className="mt-8 text-2xl text-black max-w-6xl mx-auto leading-relaxed">
          Exploring a new project is an exciting journey that begins with a clear idea and structured planning. <br /> Click to view more
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 mt-6">

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">E-commerce Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="https://marketplace-builder-hackathon-topaz.vercel.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Growth Mindset</h2>
            <p className="text-lg text-white">using Python, Streamlit
              <Link href="https://growth-mindset-isha.streamlit.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Unit Converter</h2>
            <p className="text-lg text-white">using Python, Streamlit
              <Link href="https://unit-converter-isha.streamlit.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Password Strenght Checker</h2>
            <p className="text-lg text-white">using Python, Streamlit
              <Link href="https://password-strength-checker-isha.streamlit.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline ">Personal Library Manager</h2>
            <p className="text-lg text-white">using Python, Streamlit
              <Link href="https://personal-library-manager-isha.streamlit.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>


          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Portfolio Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="https://portfolio-website-pearl-beta.vercel.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>


          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Blog Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="https://blog-website-jade-tau.vercel.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Resume Builder</h2>
            <p className="text-lg text-white">using HTML, CSS and Typescript
              <Link href="/your-target-page">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Spotify Clone</h2>
            <p className="text-lg text-white">using HTML, CSS and JavaScript
              <Link href="https://spotify-website-azure.vercel.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] hover:bg-[#422d55] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Netflix Clone</h2>
            <p className="text-lg text-white">using HTML and CSS
              <Link href="https://netflix-website-kappa.vercel.app/">
                <span className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </span>
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action - Live Demo & GitHub Section */}
      <section className="py-20 text-center bg-gradient-to-r from-yellow-500 to-gray-600 ">
        <h3 className="text-4xl font-extrabold text-black uppercase">Explore Project Links</h3>
        <div className="mt-6 flex justify-center gap-8">
          <Link
            href="https://github.com/IshaKhan06"
            target="_blank"
            rel="link"
            className="inline-block px-8 py-3 bg-[#1b1422] hover:bg-[#422d55] text-white rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            View on GitHub
          </Link>

          <Link
            href="https://vercel.com/isha-khans-projects"
            target="_blank"
            rel="link"
            className="inline-block px-8 py-3 bg-[#1b1422] hover:bg-[#422d55] text-white rounded-lg shadow-lg  transform hover:scale-105 transition-all duration-300"
          >
            View Live Vercel
          </Link>


          <Link
            href="https://share.streamlit.io/?utm_source=streamlit&utm_medium=referral&utm_campaign=main&utm_content=-ss-streamlit-io-topright"
            target="_blank"
            rel="link"
            className="inline-block px-8 py-3 bg-[#1b1422] hover:bg-[#422d55] text-white rounded-lg shadow-lg  transform hover:scale-105 transition-all duration-300"
          >
            View on Streamlit
          </Link>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

export default ProjectPage;
