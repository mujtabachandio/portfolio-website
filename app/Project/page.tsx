"use client";
import React, { useState } from 'react';

const projectsData = [
  {
    title: 'Django Website',
    description: `A full-stack web application built with Django for the backend and HTML, Tailwind CSS, and JavaScript for a responsive, interactive front end. Key features include secure user authentication, real-time content updates with AJAX, and a mobile-friendly design. Tailwind CSS ensures clean, modern styling, while Django enables SEO-friendly URLs and efficient data management, making this project ideal for scalable, user-friendly websites.\n
    Technologies Used: Python, Django, HTML, Tailwind CSS, JavaScript, AJAX`,
    imageUrl: '/images/django.png',  // Ensure this image exists in the public/images folder
    link: 'https://github.com/mujtabachandio/Django_Website', // GitHub link
    liveLink: 'https://github.com/mujtabachandio/Django_Website',
  },
  {
    title: 'Resume Builder',
    description: `An intuitive, user-friendly resume builder designed to help users create professional resumes in minutes. Features include customizable templates, ATS-friendly designs, and guided content sections, all optimized to enhance user experience and streamline the job application process.\n 
    Technologies Used: HTML, Tailwind CSS, JavaScript,`,
    imageUrl: '/images/resume.png',  // Image from public/images folder
    link: 'https://github.com/mujtabachandio/Resume-website',
    liveLink: 'https://resume-website-gules.vercel.app/',
  },
  {
    title: 'Asus Gaming E-Commerce',
    description: `A fully-featured gaming e-commerce platform where users can browse, purchase, and explore the latest gaming consoles, accessories, and merchandise. Built with a smooth, responsive interface and secure checkout, this project showcases skills in user experience, e-commerce functionality, and web development for a high-traffic, product-based website.\n 
    Technologies Used: HTML, CSS, JavaScript,`,
    imageUrl: '/images/asus.png',  // Image from public/images folder
    link: 'https://github.com/mujtabachandio/asus-gaming-website',
    liveLink: 'https://asus-website.vercel.app/',
  },
  {
    title: 'Jarvis AI Assistant',
    description: `Jarvis is a Python-based virtual assistant that uses natural language processing to perform tasks like managing schedules, setting reminders, and answering queries. With voice command capabilities and integration with APIs, it provides an interactive, hands-free experience for enhanced productivity.\n 
    Technologies Used: Python, SpeechRecognition, pyttsx3, Google API, NLP (Natural Language Processing)`,
    imageUrl: '/images/jarvis.png',  // Image from public/images folder
    link: 'https://github.com/mujtabachandio/JARVIS-Ai-assistant-program',
    liveLink: 'https://github.com/mujtabachandio/JARVIS-Ai-assistant-program',
  },
  {
    title: 'Ball Catcher Game',
    description: `A simple yet addictive game where you control a paddle to catch falling balls and increase your score. Built with Python and Pygame, this project challenges your reflexes and provides an engaging experience with smooth gameplay mechanics and dynamic difficulty.\n 
    Technologies Used: Python, Pygame`,
    imageUrl: '/images/game.jpg',  // Image from public/images folder
    link: 'https://github.com/mujtabachandio/Catch-the-Ball-python-',
    liveLink: 'https://github.com/mujtabachandio/Catch-the-Ball-python-',
  },
  {
    title: 'EarPods E-Commerce Website  ',
    description: `This project showcases a sleek and modern e-commerce website designed to feature and sell EarPods. With a responsive design, smooth animations, and a clean black-and-white aesthetic with vibrant accents, the website offers an intuitive shopping experience for users. It is built to be visually appealing and functional, ensuring a seamless browsing and purchasing process.\n 
    Technologies Used: HTML, CSS, JavaScript,`,
    imageUrl: '/images/airpods.png',  // Image from public/images folder
    link: 'https://github.com/mujtabachandio/Airpods-website',
    liveLink: 'https://airpods-website.vercel.app/',
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        My <span className="text-[#FFA300]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-center  rounded-lg mb-4"
            />
            <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 whitespace-pre-line">{project.description}</p>
            <div>
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="text-blue-400 hover:underline ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>

      {!showMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
