export const metadata = {
  title: "Education - Ahmad B",
};

export default function Education() {
  return (
    <main className="flex flex-col items-center md:h-auto h-fit text-base md:text-lg">
      <div className="w-5/6 md:w-5/12 text-md flex flex-col">
        <section className="mb-8 pt-3">
          <div className="space-y-8">
            <div className="pb-4 space-y-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <img src="/school-logos/UTD.jpg" alt="UTD Logo" className="w-14 h-14 mr-2 rounded-full" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">University of Texas at Dallas</h3>
                  <p className="text-gray-500 pt-1">Spring 2023 - Fall 2024</p>
                </div>
              </div>
              <p className="mt-5"><strong>Degree:</strong> BS Computer Science</p>
              <p><strong>GPA:</strong> 3.8</p>
              <p><strong>Relevant Coursework:</strong></p>
              <p class="hidden md:inline"> Advanced Data Structures & Algorithms, Machine Learning, Computer Architecture, Database Systems, UNIX, Operating Systems, Automata Theory.</p>
              <ul className="md:hidden list-arrow">
                <li> Advanced Data Structures & Algorithms</li>
                <li> Machine Learning</li>
                <li> Computer Architecture</li>
                <li> Database Systems</li>
                <li> UNIX</li>
                <li> Operating Systems</li>
                <li> Automata Theory</li>
              </ul>
            </div>

            <div className="pb-4 space-y-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <img src="/school-logos/Dallas-College.jpg" alt="Dallas College Logo" className="w-14 h-14 mr-2 rounded-full" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Dallas College</h3>
                  <p className="text-gray-500 pt-1">Fall 2022 & Summer 2023</p>
                </div>
              </div>
              <p className="mt-5"><strong>GPA:</strong> 4.0</p>
              <p><strong>Relevant Coursework:</strong></p>
              <p class="hidden md:inline"> Linear Algebra, Discrete Mathematics.</p>
              <ul className="md:hidden list-arrow">
                <li> Linear Algebra</li>
                <li> Discrete Mathematics</li>
              </ul>           
            </div>

            <div className="pb-4 space-y-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center">
                <img src="/school-logos/Moraine Valley.jpg" alt="Moraine Valley Logo" className="w-14 h-14 mr-2 rounded-full" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Moraine Valley Community College</h3>
                  <p className="text-gray-500 pt-1">Fall 2019 - Spring 2022</p>
                </div>
              </div>
              <p className="mt-5"><strong>Degree:</strong> AA General Studies</p>
              <p><strong>GPA:</strong> 3.9</p>
              <p><strong>Relevant Coursework: </strong></p>
              <p class="hidden md:inline">Computer Science 1, Computer Science 2, Calculus 1, Calculus 2, Calculus 3, Differential Equations.</p>
              <ul className="md:hidden  list-arrow">
                <li> Computer Science I</li>
                <li> Computer Science II</li>
                <li> Calculus I</li>
                <li> Calculus II</li>
                <li> Calculus III</li>
                <li> Differential Equations</li>
              </ul>            
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
