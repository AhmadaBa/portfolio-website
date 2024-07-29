const apiKey = process.env.TMDB_API_KEY;

export const fetchMovieImage = async (title, year) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&include_adult=true&language=en-US&primary_release_year=${year}&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    const response = await fetch(url, options);


    if (!response.ok) {
      throw new Error(`Failed to fetch movie with title: ${title} and year: ${year}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Error fetching movie image:', error);
    return null;
  }
};
