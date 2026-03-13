// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Watch = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8000/api/v1/admin/getMovie/${id}`)
//       .then((res) => res.json())
//       .then((data) => setMovie(data.data));
//   }, [id]);

//   if (!movie)
//     return (
//       <div className="bg-black h-screen flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );

//   return (
//     <div className="bg-black h-screen flex items-center justify-center">
//       <video
//         src={movie.videoUrl}
//         controls
//         autoPlay
//         className="w-[90%] h-[90%]"
//       />
//     </div>
//   );
// };

// export default Watch;

import { useLocation, useNavigate } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state;

  if (!movie) {
    return (
      <div className="bg-black h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl mb-4">Movie Not Found</h1>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <video
        src={movie.videoUrl}
        controls
        autoPlay
        className="w-[90%] h-[90%]"
      />
    </div>
  );
};

export default Watch;
