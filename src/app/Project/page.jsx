import React from 'react';
import { FaCode } from "react-icons/fa";

export const metadata = {
  title: "Projects - Ahmad B",
};

const Projects = () => {
  return (
    <main className="flex flex-col items-center md:h-auto text-base md:text-lg">
      <div className="w-5/6 md:w-5/12  text-md flex flex-col">
        <section className="mb-8">
          <div className="space-y-8">
            <div className="pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-blue-200 p-2 rounded-full mr-4">
                    <FaCode size={25} />
                  </div>
                  <h3 className="text-xl font-semibold">Movie Review Database</h3>
                </div>
              </div>
              <p className="mt-2"><strong>Technologies:</strong> <em>React, Tailwind CSS, JavaScript, HTML, SQL, PHP, Apache Webserver, Node.js, Git</em></p>
              <ul className="mt-2 list-arrow space-y-4">
                <li> Engineered a web-based movie review database website using React and Tailwind CSS for a dynamic and responsive user interface.</li>
                <li> Crafted intuitive user forms for submitting movie reviews, incorporating fields for Movie ID, Review Text, and Rating, utilizing JavaScript and PHP for seamless functionality.</li>
                <li> Utilized SQL for efficient data storage and management, ensuring quick and reliable retrieval of movie, actor, and director information.</li>
                <li> Implemented secure user authentication with password hashing to safeguard user credentials.</li>
                <li> Deployed the application on an Apache server, providing a robust and stable environment for development and deployment.</li>
              </ul>
            </div>

            <div className="pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-4">
                    <FaCode size={25} />
                  </div>
                  <h3 className="text-xl font-semibold">ZooKeeper Leader Election</h3>
                </div>
              </div>
              <p className="mt-2"><strong>Technologies:</strong><em> Java, Git, Maven, Apache ZooKeeper </em></p>
              <ul className="mt-2 list-arrow space-y-4">
                <li> Architected and implemented a leader election mechanism using Apache ZooKeeper to ensure leadership within a distributed system.</li>
                <li> Created a fault-tolerant application capable of dynamic leader election, enhancing system reliability and scalability.</li>
                <li> Utilized ZooKeeper’s ephemeral sequential znodes for efficient coordination and management of leader election processes.</li>
              </ul>
            </div>

            <div className="pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-purple-200 p-2 rounded-full mr-4">
                    <FaCode size={25} />
                  </div>
                  <h3 className="text-xl font-semibold">Portfolio Website</h3>
                </div>
              </div>
              <p className="mt-2"><strong>Technologies:</strong><em> JavaScript, React.js, Next.js, Node.js, Tailwind CSS, React Icons, RESTful api, Git </em></p>
              <ul className="mt-2 list-arrow space-y-4">
                <li>Developed a responsive personal website using React.js and Next.js, showcasing advanced web development techniques.</li>
                <li>Implemented dynamic routing and server-side rendering with Next.js to enhance user navigation and experience.</li>
                <li>Utilized Tailwind CSS for streamlined styling and React Icons for improved visual aesthetics.</li>
                <li>Integrated RESTful APIs to fetch and display dynamic content, enhancing the interactivity of the website.</li>
                <li>Managed version control with Git, ensuring an organized and trackable development process.</li>
                <li>Ensured cross-browser compatibility and optimized the website's performance for various devices and screen sizes.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
