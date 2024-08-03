import { FaLinkedin } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';


export const metadata = {
  title: 'Home - Ahmad B'
};

export default function Home() {
  return (
    <main className="flex flex-col items-center md:h-fit text-base md:text-lg">
      <div className="w-5/6 md:w-6/12 text-md flex flex-col">
        <section className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-3xl mb-8">Hello, I&apos;m Ahmad <span className="inline-block animate-wave">👋</span></h1>
        <p className="mb-8">I&apos;m a Senior Computer Science student at The University of Texas at Dallas, graduating in Fall 2024 🎓.</p>
        </section>

        <section className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <p className="mb-8">I am deeply passionate about coding 💻 and the limitless opportunities it offers in technology 🚀.</p>
        </section>

        <section className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="mb-8">I thrive on collaborating within teams 🤝, where I can leverage collective creativity and skills to solve complex problems and develop innovative solutions 🛠️.</p>
        </section>

        <section className="opacity-0 animate-fadeIn mb-8" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl">In my free time, I enjoy:</h2>
          <ul className="space-y-2 text-sm md:text-base list-arrow">
            <li> Playing chess ♟️</li>
            <li> Enjoying latte art and coffee drinking ☕</li>
            <li> Watching movies 🎬 & listening to music 🎵</li>
            <li> Spending time with family & friends 👨‍👩‍👧‍👦</li>
            <li> Exploring new technologies 🔍</li>
            <li> Learning new programming languages 📚</li>
            <li> Traveling & experiencing new cultures 🌍</li>
          </ul>
        </section>

        <section className="opacity-0 animate-fadeIn mb-8" style={{ animationDelay: '1s' }}>
          <h2 className="text-2xl">Skills & Interests:</h2>
          <ul className="space-y-2 text-sm md:text-base list-arrow">
            <li> Backend Development 🐍</li>
            <li> Frontend Development ⚛️</li>
            <li> Deep Learning and Artificial Intelligence 🤖</li>
            <li> User Interface & User Experience Design 🎨</li>
            <li> Networking and Cybersecurity 🔐</li>
          </ul>
        </section>

        <section className="opacity-0 animate-fadeIn space-y-3" style={{ animationDelay: '1.2s' }}>
          <h2 className="text-3xl">Let&apos;s Connect!</h2>
          <p>Feel free to reach out to me on LinkedIn or GitHub, or drop me an email!</p>
          <p> I&apos;m always excited to connect with like-minded individuals and explore new opportunities 🌐.</p>
          <ul className="space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/ahmadbakhitalfayez/" className="underline" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline-block mr-2" size={25} />ahmadbakhitalfayez
              </a>
            </li>
            <li>
              <a href="https://github.com/AhmadaBa" className="underline" target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline-block mr-2" size={25} />AhmadaBa
              </a>
            </li>
            <li>
              <a href="mailto:ahmadbakhitalfayez@gmail.com" className="underline whitespace-nowrap" target="_blank" rel="noopener noreferrer">
                <IoIosMail className="inline-block mr-2" size={25} />ahmadbakhitalfayez@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
