import {Header} from "../components/Header"
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header/>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-r from-yellow-500 to-gray-600 text-white flex-grow">
        <h2 className="text-6xl font-extrabold text-black mb-4 uppercase leading-relaxed"> Welcome To My Website</h2>
       <p className='text-3xl font-bold mb-4 text-black'> Hi, I&apos;m Isha</p>
        <p className="text-2xl font-bold mb-8 text-black">Frontend Developer | Next.js | Tailwind CSS | HTML 
          | Javascript Enthusiast.</p>
      </section>

      <Footer/>

    </div>
  );
} 
