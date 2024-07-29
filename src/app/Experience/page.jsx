import React from 'react';
import { FaBriefcase } from "react-icons/fa";

export const metadata = {
  title: "Experience - Ahmad B",
};

const Experience = () => {
  return (
    <main className="flex flex-col items-center md:h-auto text-base md:text-lg">
      <div className="w-5/6 md:w-5/12 text-md flex flex-col">
      <section className="mb-8">
          <div className="space-y-8">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-blue-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
                    <p className="text-gray-500">Mercatalyst, Carrollton, TX</p>
                  </div>
                </div>
                <span className="text-gray-500">Jun 2024 - Present</span>
              </div>
              <ul className="mt-2 list-disc list-inside">
                <li>Collaborated on the development of a scalable e-commerce platform using Node.js and React.</li>
                <li>Implemented new features and optimized existing code for performance improvements.</li>
                <li>Participated in code reviews and contributed to team knowledge sharing sessions.</li>
              </ul>
            </div>

            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Computer Science Tutor</h3>
                    <p className="text-gray-500">University of Texas at Dallas, Richardson, TX</p>
                  </div>
                </div>
                <span className="text-gray-500">Sep 2022 - May 2024</span>
              </div>
              <ul className="mt-2 list-disc list-inside">
                <li>Provided tutoring and academic support to students in various computer science courses.</li>
                <li>Assisted students with understanding complex concepts and solving coding challenges.</li>
                <li>Developed and conducted study sessions to help students prepare for exams.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Experience;
