import React from 'react';

export const metadata = {
  title: 'Experience - Ahmad B'
};

const Experience = () => {
  return (
    <main className="flex flex-col items-center md:h-auto text-base md:text-lg">
      <div className="w-5/6 md:w-5/12 text-md flex flex-col">
        <section className="mb-8">
          <div className="space-y-12">
            <div className="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center rounded-full mr-4">
                    <img src="/work-logos/stores.jpg" alt="stores.com Logo" className="w-14 h-14 mr-2 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <p className="text-gray-500 mt-1">Mercatalyst, Carrollton, TX (Remote)</p>
                    <span className="text-gray-500">December 2024 - Present</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center rounded-full mr-4">
                    <img src="/work-logos/stores.jpg" alt="mercatalyst Logo" className="w-14 h-14 mr-2 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                    <p className="text-gray-500 mt-1">Mercatalyst, Carrollton, TX</p>
                    <span className="text-gray-500">May 2024 - December 2024</span>
                  </div>
                </div>
              </div>
              <ul className="mt-4 list-arrow space-y-4">
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}> Refactored legacy code to utilize async/await, resulting in a 40% improvement in system performance and responsiveness.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}> Engineered sophisticated REST API controller modules for seamless HTTP request handling, CRUD operations, and integration with MongoDB and Salesforce (Apache Cassandra) databases.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}> Played a pivotal role in migrating service APIs from Node.js 18 to Node.js 20, leading to enhanced website loading speeds, increased service reliability, and optimized server memory utilization.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}> Authored and implemented comprehensive unit and integration tests, achieving a 30% increase in test coverage across six microservices, thereby significantly enhancing system reliability and maintainability.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.7s' }}> Actively participated in Agile development processes, collaborating with cross-functional teams, conducting code reviews, and contributing to knowledge-sharing sessions, while effectively managing version control using GitHub.</li>
              </ul>
            </div>


            <div className="pb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/school-logos/Moraine Valley.jpg" alt="Moraine Valley Logo" className="w-14 h-14 mr-2 rounded-full" />
                  <div className="flex flex-col w-auto">
                    <h3 className="text-xl font-semibold">Computer Science Tutor</h3>
                    <p className="text-gray-500 mt-1">Moraine Valley Community College, Palos Hills, IL</p>
                    <span className="text-gray-500">Jan 2020 - May 2020</span>
                  </div>
                </div>
              </div>
              <ul className="mt-4 list-arrow space-y-4">
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s' }}> Provided tutoring support for the Introduction to Computer Science course, with an emphasis on C++.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '1.0s' }}> Successfully assisted an average of 6 students per hour during high-demand tutoring sessions.</li>
                <li className="opacity-0 animate-fadeIn" style={{ animationDelay: '1.1s' }}> Offered tailored guidance to students encountering complex challenges in advanced computer science topics.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experience;
