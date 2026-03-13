import { useNavigate } from "react-router-dom";

const MovieRow = ({ title, movies }) => {
  const navigate = useNavigate();
  console.log(title);
  if (!movies?.length) return null;

  return (
    <div className="px-10 mt-12">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {movies.map((m) => (
          <div
            key={m._id}
            onClick={() => {
              alert("clicked");
              navigate(`/MovieDetail/${m._id}`);
            }}
            className="min-w-[220px] h-[320px] rounded overflow-hidden transform hover:scale-110 transition duration-300 cursor-pointer"
          >
            <img src={m.posterUrl} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
