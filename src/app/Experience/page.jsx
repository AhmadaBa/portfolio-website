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
          <div className="space-y-12">
            <div className="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-blue-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                    <p className="text-gray-500 mt-1">Mercatalyst, Carrollton, TX</p>
                    <span className="text-gray-500">May 2024 - Present</span>
                  </div>
                </div>
              </div>
              <ul className="mt-4 list-arrow space-y-4">
                <li> Rewrote legacy code from callbacks to async/await, improving performance by approximately 40%.</li>
                <li> Developed an AI image generation bot using the OpenAI API, with robust fallback mechanisms for failure scenarios.</li>
                <li> Authored comprehensive unit and integration tests to ensure code reliability and maintainability.</li>
                <li> Updated ESLint rules to enforce a consistent coding style and migrated to a newer version for enhanced code quality.</li>
                <li> Collaborated effectively with a cross-functional team, participating in code reviews and knowledge-sharing sessions.</li>
              </ul>
            </div>

            <div className="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div className="flex flex-col w-auto">
                    <h3 className="text-xl font-semibold">Computer Science Tutor</h3>
                    <p className="text-gray-500 mt-1">Moraine Valley Community College, Palos Hills, IL</p>
                    <span className="text-gray-500">Jan 2020 - May 2020</span>
                  </div>
                </div>
              </div>
              <ul className="mt-4 list-arrow space-y-4">
                <li> Provided tutoring support for the Introduction to Computer Science course, with an emphasis on C++.</li>
                <li> Successfully assisted an average of 6 students per hour during high-demand tutoring sessions.</li>
                <li> Offered tailored guidance to students encountering complex challenges in advanced computer science topics.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Experience;
