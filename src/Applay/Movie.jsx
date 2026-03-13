import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const resp = await fetch(
          `http://localhost:8000/api/v1/admin/getMovie/${id}`,
        );

        const data = await resp.json();
        console.log(data);
        setMovie(data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading)
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        Loading Movie...
      </div>
    );

  if (!movie)
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        Movie Not Found
      </div>
    );

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url(${movie.posterUrl})`,
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="m-10 bg-gray-800 px-5 py-2 rounded"
      >
        ← Back
      </button>

      <div className="px-20 pt-20 max-w-2xl">
        <h1 className="text-6xl font-bold mb-5">{movie.name}</h1>

        <p className="text-gray-300 mb-6">{movie.description}</p>

        <p className="mb-3">⭐ Rating: {movie.imdbRating}</p>
        <p className="mb-6">🎬 Genre: {movie.genre?.join(", ")}</p>

        <button
          onClick={() => navigate(`/watch/${movie._id}`, { state: movie })}
          className="bg-red-600 px-8 py-3 rounded hover:bg-red-700"
        >
          ▶ Play Movie
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
