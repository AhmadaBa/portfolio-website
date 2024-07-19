

export const metadata = {
  title: "Home - Ahmad B",
};

export default function Home() {
  return (
    <main class="border border-purple-800 flex flex-col items-center h-svh">
      <div class="border border-blue-300 w-5/6 h-full text-md">
        <section class="mb-8">
          <h1 class="text-3xl mb-8">Hello I'm Ahmad  👋</h1>
          <p>I'm a Senior Computer Science student at The University of Texas at Dallas, graduating in Fall 2024.</p>
        </section>

        <section>
          <p class="mb-8">I am deeply passionate about coding and the limitless opportunities it offers in technology.</p>
          <p class="mb-8">I thrive on collaborating within teams, where I can leverage collective creativity and skills to solve complex problems and develop innovative solutions.</p>
        </section>

        <section class="mb-8">
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
