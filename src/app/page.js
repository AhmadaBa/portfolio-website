export const metadata = {
  title: "Home - Ahmad B",
};

export default function Home() {
  return (
    <main className="border border-purple-800 flex flex-col items-center md:h-screen">
      <div className="border border-blue-300 w-5/6 text-md h-full flex flex-col">
        <section>
          <h1 className="text-3xl mb-8">Hello, I'm Ahmad 👋</h1>
          <p class="mb-8">I'm a Senior Computer Science student at The University of Texas at Dallas, graduating in Fall 2024 🎓.</p>
        </section>

        <section>
          <p className="mb-8">I am deeply passionate about coding 💻 and the limitless opportunities it offers in technology 🚀.</p>
        </section>

        <section>
          <p className="mb-8">I thrive on collaborating within teams 🤝, where I can leverage collective creativity and skills to solve complex problems and develop innovative solutions 🛠️.</p>
        </section>

        <section>
          <h2>In my free time, I enjoy:</h2>
          <ul>
            <li>Playing chess ♟️</li>
            <li>Watching movies 🎬 and listening to music 🎵</li>
            <li>Spending time with family and friends 👨‍👩‍👧‍👦</li>
            <li>Exploring new technologies and learning new programming languages 📚</li>
            <li>Participating in hackathons and coding competitions 🏆</li>
            <li>Traveling and experiencing new cultures 🌍</li>
          </ul>
        </section>

        <section>
          <h2>Skills & Interests:</h2>
          <ul>
            <li>Backend Development with Node.js and Python 🐍</li>
            <li>Frontend Development with React.js ⚛️</li>
            <li>Deep Learning and Artificial Intelligence 🤖</li>
            <li>User Interface and User Experience Design 🎨</li>
            <li>Networking and Cybersecurity 🔐</li>
          </ul>
        </section>

        <section>
          <h2>Let's Connect!</h2>
          <p className="mb-8">Feel free to reach out to me on LinkedIn or GitHub, or drop me an email. I'm always excited to connect with like-minded individuals and explore new opportunities 🌐.</p>
          <ul>
            <li>LinkedIn: [Your LinkedIn Profile]</li>
            <li>GitHub: [Your GitHub Profile]</li>
            <li>Email: [Your Email Address]</li>
          </ul>
        </section>

      </div>
    </main>
  );
}