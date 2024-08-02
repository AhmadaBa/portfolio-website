import React from 'react';

export const metadata = {
  title: 'Experience - Ahmad B'
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
                  <div class="flex items-center rounded-full mr-4">
                    <img src="/work-logos/mercatalyst.jpg" alt="mercatalyst Logo" className="w-14 h-14 mr-2 rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-xl font-semibold">Software Engineer Intern</h3>
                    <p class="text-gray-500 mt-1">Mercatalyst, Carrollton, TX</p>
                    <span class="text-gray-500">May 2024 - Present</span>
                  </div>
                </div>
              </div>
              <ul class="mt-4 list-arrow space-y-4">
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}> Refactored legacy code to utilize async/await, resulting in a 40% improvement in system performance and responsiveness.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.7s' }}> Engineered sophisticated REST API controller modules for seamless HTTP request handling, CRUD operations, and integration with MongoDB and Salesforce (Apache Cassandra) databases.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s' }}> Played a pivotal role in migrating service APIs from Node.js 18 to Node.js 20, leading to enhanced website loading speeds, increased service reliability, and optimized server memory utilization.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.1s' }}> Authored and implemented comprehensive unit and integration tests, achieving a 30% increase in test coverage across six microservices, thereby significantly enhancing system reliability and maintainability.</li>
                <li class="opacity-0 animate-fadeIn" style={{ animationDelay: '1.3s' }}> Actively participated in Agile development processes, collaborating with cross-functional teams, conducting code reviews, and contributing to knowledge-sharing sessions, while effectively managing version control using GitHub.</li>
              </ul>
            </div>


            <div class="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <img src="/school-logos/Moraine Valley.jpg" alt="Moraine Valley Logo" className="w-14 h-14 mr-2 rounded-full" />
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
};

export default Experience;
