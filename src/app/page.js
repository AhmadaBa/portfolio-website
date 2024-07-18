

export const metadata = {
  title: "Home - Ahmad B",
};

export default function Home() {
  return (
    <main class="border border-blue-800 text-white flex flex-col items-center h-screen">
      <div class="border border-blue-300 w-5/6 h-full text-lg  ">
        <section class="mb-8">
          <h1 class="text-6xl mb-8">Hello 👋</h1>
          <p>I'm Ahmad Bakhit Al Fayez, a Senior Computer Science student at The University of Texas at Dallas, graduating in Fall 2024.</p>
        </section>

        <section class="mb-8">
          <p>I am deeply passionate about coding and the limitless opportunities it offers in technology.</p>
          <p>I thrive on collaborating within teams, where I can leverage collective creativity and skills to solve complex problems and develop innovative solutions.</p>
        </section>

        <section>
          <h2>In my free time, I enjoy:</h2>
          <ul>
            <li>Playing chess</li>
            <li>Watching movies and listening to music</li>
            <li>Spending time with family and friends</li>
          </ul>
        </section>
        </div>
    </main>
  );
}
