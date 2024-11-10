"use client";
import Image from 'next/image';
import profileImage from '../public/images/dp.jpg'; 
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
    <main className="h-screen overflow-hidden">
      <div className="min-h-screen bg-[#171717] flex items-center justify-center px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Left Text Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <p className="text-5xl md:text-6xl text-white">Hi, I am</p>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              <span className="block text-[#FFA300]">Mujtaba Chandio</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl">Frontend Developer <span className='text-[#FFA300]'>|</span> Python Developer</p>
            
            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <Link href= "https://drive.google.com/file/d/1IVBYK0sz-LllSftZAhCjDT1a4kyQnbPG/view?usp=sharing" className="px-8 py-4 bg-[#FFA300] text-white font-medium rounded-md duration-500 hover:bg-black transition">
                Download CV
              </Link>
            </div>
          </div>

         {/* Right Image Section */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112 rounded-full overflow-hidden border-8 shadow-[#242424] border-[#242424] shadow-lg">
            <Image
              src={profileImage}
              alt="Mujtaba Chandio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
    
    <style jsx global>{`
      html, body {
        height: 100%;
        overflow: hidden;
      }
    `}</style>
    </>
  );
}
