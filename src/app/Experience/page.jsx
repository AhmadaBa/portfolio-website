import React from 'react';
import { FaBriefcase } from "react-icons/fa";

export const metadata = {
  title: "Experience - Ahmad B",
};

const Experience = () => {
  return (
    <main class="flex flex-col items-center md:h-auto text-base md:text-lg">
      <div class="w-5/6 md:w-5/12 text-md flex flex-col">
        <section class="mb-8">
          <div class="space-y-12">
            <div class="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="bg-blue-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-xl font-semibold">Software Engineer Intern</h3>
                    <p class="text-gray-500 mt-1">Mercatalyst, Carrollton, TX</p>
                    <span class="text-gray-500">May 2024 - Present</span>
                  </div>
                </div>
              </div>
              <ul class="mt-4 list-arrow space-y-4">
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>Rewrote legacy code from callbacks to async/await, improving performance by approximately 40%.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.7s' }}>Developed an AI image generation bot using the OpenAI API, with robust fallback mechanisms for failure scenarios.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s' }}>Authored comprehensive unit and integration tests to ensure code reliability and maintainability.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.1s' }}>Updated ESLint rules to enforce a consistent coding style and migrated to a newer version for enhanced code quality.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.3s' }}>Collaborated effectively with a cross-functional team, participating in code reviews and knowledge-sharing sessions.</li>
              </ul>
            </div>


            <div class="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="bg-green-200 p-2 rounded-full mr-4">
                    <FaBriefcase size={25} />
                  </div>
                  <div class="flex flex-col w-auto">
                    <h3 class="text-xl font-semibold">Computer Science Tutor</h3>
                    <p class="text-gray-500 mt-1">Moraine Valley Community College, Palos Hills, IL</p>
                    <span class="text-gray-500">Jan 2020 - May 2020</span>
                  </div>
                </div>
              </div>
              <ul class="mt-4 list-arrow space-y-4">
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.7s' }}> Provided tutoring support for the Introduction to Computer Science course, with an emphasis on C++.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.9s' }}> Successfully assisted an average of 6 students per hour during high-demand tutoring sessions.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '2.1s' }}> Offered tailored guidance to students encountering complex challenges in advanced computer science topics.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Experience;
