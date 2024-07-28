import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <main className="flex flex-col items-center md:h-auto text-base md:text-lg">
      <div className="w-5/6 text-md flex flex-col">
        <section className="mb-8">

          <div className="space-y-8">
            <div className=" pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/path/to/utd-logo.png" alt="UTD Logo" className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold">University of Texas at Dallas</h3>
                </div>
                <span className="text-gray-500">Spring 2023 - Fall 2024</span>
              </div>
              <p className="mt-2"><strong>Degree:</strong> Bachelor of Science in Software Engineering</p>
              <p><strong>GPA:</strong> 3.8</p>
              <p><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Network Security, Machine Learning</p>
            </div>

            <div className=" pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/path/to/dallas-college-logo.png" alt="Dallas College Logo" className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold">Dallas College</h3>
                </div>
                <span className="text-gray-500">Fall 2022 & Summer 2023</span>
              </div>
              <p className="mt-2"><strong>GPA:</strong> 4.0</p>
              <p><strong>Relevant Coursework:</strong> Introduction to Programming, Discrete Mathematics, Database Systems</p>
            </div>
            
            <div className=" pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/path/to/moraine-valley-logo.png" alt="Moraine Valley Logo" className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold">Moraine Valley Community College</h3>
              </div>
              <span className="text-gray-500">Fall 2019 - Spring 2022</span>
            </div>
            <p className="mt-2"><strong>Degree:</strong> Associate in General Studies</p>
            <p><strong>GPA:</strong> 3.9</p>
            <p><strong>Relevant Coursework:</strong> Introduction to Programming, Discrete Mathematics, Database Systems</p>
          </div>
          </div>



        </section>
      </div>
    </main>
  );
}
