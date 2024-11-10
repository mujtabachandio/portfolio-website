"use client"
import React from 'react'
import Image from 'next/image'
import about1 from '@/public/images/me.jpg'

const about = () => {
  return (
    <>
    {/* About Section */}
    <section className="h-screen overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#171717]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">

          {/* Image Section */}
          <div className="w-full px-8 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-2 sm:py-3"> {/* Reduced padding here */}
                  <Image
                    src={about1}
                    alt="About Me"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full px-8 lg:w-1/2 xl:w-5/12">
            <div className="mt-5 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-[#FFA300]">About Me</span>
              <h2 className="mb-3 text-3xl font-bold text-white sm:text-[40px]/[48px]"> {/* Reduced margin-bottom */}
                Mujtaba Chandio.
              </h2>
              <p className="mb-3 text-base text-gray-400"> {/* Reduced margin-bottom */}
                A passionate developer from Pakistan, specializing in creating intuitive and efficient web applications. My expertise spans across JavaScript, TypeScript, React, Next.js, and Tailwind CSS—technologies I use to build seamless and visually captivating digital experiences. I’m constantly exploring new horizons in AI, machine learning, and robotics—fields that fuel my desire to push the boundaries of technology. My journey as a developer is shaped by a commitment to continuous learning and innovation. My goal is to blend technical skills with creativity, crafting solutions that not only solve real-world challenges but also inspire.
              </p>
              <p className="mb-5 text-base text-gray-400"> {/* Reduced margin-bottom */}
                When I’m not coding, you can find me experimenting with the latest tech trends, enjoying great food, or diving into the world of AI advancements. I believe in collaborating with like-minded individuals who share the same passion for creating meaningful, cutting-edge solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <style jsx global>{`
      html, body {
        height: 100%;
        overflow: hidden;
      }
    `}</style>
    </>
  )
}

export default about
