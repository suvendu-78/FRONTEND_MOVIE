import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const navigate = useNavigate();

  const trendingRef = useRef(null);
  const bollywoodRef = useRef(null);
  const hollywoodRef = useRef(null);
  const koreanRef = useRef(null);

  // console.log(bollywoodRef);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/admin/getMovies")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.data) setMovies(data.data);
      })
      .catch(() => setMovies([]));
  }, []);

  // ✅ latest 5 movies
  const latestMovies =
    movies && movies.length > 0 ? [...movies].reverse().slice(0, 5) : [];

  const hero = latestMovies.length > 0 ? latestMovies[heroIndex] : null;

  useEffect(() => {
    if (latestMovies.length === 0) return;

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === latestMovies.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [latestMovies]);

  const trending = movies?.slice(0, 10) || [];
  const bollywood =
    movies?.filter((m) => m?.genre?.includes("Bollywood")) || [];
  const hollywood =
    movies?.filter((m) => m?.genre?.includes("Hollywood")) || [];
  const korean = movies?.filter((m) => m?.genre?.includes("Korean")) || [];

  const scroll = (ref, dir) => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;

    ref.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const auto = (ref) => {
      if (!ref.current) return;

      const max = ref.current.scrollWidth - ref.current.clientWidth;

      if (ref.current.scrollLeft >= max) {
        ref.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        ref.current.scrollBy({
          left: ref.current.clientWidth,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(() => {
      auto(trendingRef);
      auto(bollywoodRef);
      auto(hollywoodRef);
      auto(koreanRef);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const Row = ({ title, data, refVar }) => (
    <div className="relative px-10 mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <button
        onClick={() => scroll(refVar, "left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-4 rounded-full"
      >
        ❮
      </button>

      <div ref={refVar} className="flex gap-4 overflow-x-hidden">
        {data.map((m) =>
          m ? (
            <img
              key={m._id}
              onClick={() => navigate(`/MovieDetail/${m._id}`)}
              src={m.posterUrl}
              alt=""
              className="min-w-[220px] h-[320px] object-cover rounded-lg hover:scale-110 transition"
            />
          ) : null,
        )}
      </div>

      <button
        onClick={() => scroll(refVar, "right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-4 rounded-full"
      >
        ❯
      </button>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      {hero && (
        <div
          className="h-[90vh] flex items-center px-20 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.2)), url(${hero.posterUrl})`,
          }}
        >
          <div>
            <h1 className="text-6xl font-bold mb-5">{hero.name}</h1>

            <p className="max-w-xl text-gray-300 mb-6">
              {hero.description?.slice(0, 150)}
            </p>

            <button
              onClick={() => navigate(`/watch/${hero._id}`, { state: hero })}
              className="bg-red-600 px-6 py-3 rounded mr-4 hover:bg-red-700"
            >
              ▶ Watch Now
            </button>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = hero.videoUrl;
                link.download = hero.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600"
            >
              Download
            </button>
          </div>
        </div>
      )}

      {/* ROWS */}

      <Row title="Trending Movies" data={trending} refVar={trendingRef} />
      <Row title="Bollywood Movies" data={bollywood} refVar={bollywoodRef} />
      <Row title="Hollywood Movies" data={hollywood} refVar={hollywoodRef} />
      <Row title="Korean Dramas" data={korean} refVar={koreanRef} />
    </div>
  );
};

export default Home;
