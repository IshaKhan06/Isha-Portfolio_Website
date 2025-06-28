import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* About Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-yellow-500 to-gray-600 flex-grow">
        <h2 className="text-5xl font-extrabold mb-6 uppercase text-black">About Me</h2>
        <p className="text-3xl max-w-6xl mb-8 leading-relaxed text-black">
          Hello! I&apos;m <span className="text-black font-extrabold">Isha Khan</span>, a passionate Frontend Developer with a strong interest in creating intuitive and dynamic user experiences. I specialize in <span className="text-black font-extrabold">Next.js</span> and <span className="text-black font-extrabold">Tailwind CSS</span>, combining modern technologies with elegant design principles. I aim to build responsive, high-performance websites. When I&apos;m not coding, I enjoy exploring new design trends and enhancing my development skills.
        </p>

        <Link href="/project">
          <button className="mt-8 bg-[#1b1422] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#422d55] transition duration-300">
            Explore My Projects
          </button>
        </Link>
      </section>

      <Footer />

    </div>
  );
} 
