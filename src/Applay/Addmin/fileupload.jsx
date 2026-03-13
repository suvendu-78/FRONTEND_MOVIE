// import { useRef, useState } from "react";

// const FileUpload = () => {
//   const nameRef = useRef();
//   const dateRef = useRef();
//   const sizeRef = useRef();
//   const descRef = useRef();
//   const genreRef = useRef();
//   const ratingRef = useRef();
//   const languageRef = useRef();
//   const trailerRef = useRef();
//   const coverRef = useRef();
//   const videoRef = useRef();

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [coverName, setCoverName] = useState("");
//   const [videoName, setVideoName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     const info = {
//       name: nameRef.current.value,
//       releaseDate: dateRef.current.value,
//       size: sizeRef.current.value,
//       description: descRef.current.value,
//       genre: genreRef.current.value,
//       rating: ratingRef.current.value,
//       language: languageRef.current.value,
//       trailer: trailerRef.current.value,
//       coverimgurl: coverRef.current.files[0],
//       videourl: videoRef.current.files[0],
//     };

//     formData.append("name", nameRef.current.value);
//     formData.append("releaseDate", dateRef.current.value);
//     formData.append("size", sizeRef.current.value);
//     formData.append("description", descRef.current.value);
//     formData.append("genre", genreRef.current.value);
//     formData.append("rating", ratingRef.current.value);
//     formData.append("language", languageRef.current.value);
//     formData.append("trailer", trailerRef.current.value);

//     formData.append("cover", coverRef.current.files[0]);
//     formData.append("video", videoRef.current.files[0]);

//     console.log(info);

//     try {
//       setLoading(true);

//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       const url = "http://localhost:8000/api/v1/admin/upload-movie";

//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(true);
//         alert("Movie Uploaded Successfully");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Upload Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-black flex justify-center items-center p-10 relative">
//         {loading && (
//           <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//             <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         {success && (
//           <div className="absolute top-10 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
//             🎉 Movie Uploaded Successfully
//           </div>
//         )}

//         <div className="bg-gray-900 p-8 rounded-lg w-[600px]">
//           <h2 className="text-white text-3xl font-bold mb-6 text-center">
//             Upload Movie
//           </h2>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               ref={nameRef}
//               type="text"
//               placeholder="Movie Name"
//               className="p-3 rounded bg-gray-800 text-white"
//               required
//             />

//             <input
//               ref={dateRef}
//               type="date"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <input
//               ref={sizeRef}
//               type="text"
//               placeholder="Movie Size"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <input
//               ref={genreRef}
//               type="text"
//               placeholder="Genre"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <input
//               ref={ratingRef}
//               type="number"
//               step="0.1"
//               placeholder="IMDb Rating"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <input
//               ref={languageRef}
//               type="text"
//               placeholder="Language"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <input
//               ref={trailerRef}
//               type="text"
//               placeholder="Trailer URL"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <textarea
//               ref={descRef}
//               placeholder="Movie Description"
//               className="p-3 rounded bg-gray-800 text-white"
//             />

//             <div>
//               <label className="text-white mb-2 block font-semibold">
//                 Cover Image
//               </label>

//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg h-32 cursor-pointer hover:border-red-500 hover:bg-gray-800 transition">
//                 {coverName ? (
//                   <span className="text-green-400 text-sm font-semibold">
//                     {coverName}
//                   </span>
//                 ) : (
//                   <>
//                     <span className="text-gray-400 text-sm">
//                       Drag & Drop Poster Here
//                     </span>
//                     <span className="text-red-500 text-sm mt-1">
//                       or Click to Upload
//                     </span>
//                   </>
//                 )}

//                 <input
//                   type="file"
//                   ref={coverRef}
//                   className="hidden"
//                   accept="image/*"
//                   onChange={(e) => {
//                     setCoverName(e.target.files[0]?.name);
//                   }}
//                 />
//               </label>
//             </div>

//             <div>
//               <label className="text-white mb-2 block font-semibold">
//                 Movie Video
//               </label>

//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg h-32 cursor-pointer hover:border-red-500 hover:bg-gray-800 transition">
//                 {videoName ? (
//                   <span className="text-green-400 text-sm font-semibold">
//                     {videoName}
//                   </span>
//                 ) : (
//                   <>
//                     <span className="text-gray-400 text-sm">
//                       Drag & Drop Movie File
//                     </span>
//                     <span className="text-red-500 text-sm mt-1">
//                       or Click to Upload
//                     </span>
//                   </>
//                 )}

//                 <input
//                   type="file"
//                   ref={videoRef}
//                   className="hidden"
//                   accept="video/*"
//                   onChange={(e) => {
//                     setVideoName(e.target.files[0]?.name);
//                   }}
//                 />
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold"
//             >
//               {loading ? "Uploading..." : "Upload Movie"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FileUpload;

import { useRef, useState } from "react";

const FileUpload = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const sizeRef = useRef();
  const descRef = useRef();
  const genreRef = useRef();
  const ratingRef = useRef();
  const languageRef = useRef();
  const trailerRef = useRef();
  const coverRef = useRef();
  const videoRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [coverName, setCoverName] = useState("");
  const [videoName, setVideoName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", nameRef.current.value);
    formData.append("releaseDate", dateRef.current.value);
    formData.append("size", sizeRef.current.value);
    formData.append("description", descRef.current.value);
    formData.append("genre", genreRef.current.value);
    formData.append("rating", ratingRef.current.value);
    formData.append("language", languageRef.current.value);
    formData.append("trailer", trailerRef.current.value);
    formData.append("cover", coverRef.current.files[0]);
    formData.append("video", videoRef.current.files[0]);

    try {
      setLoading(true);

      const url = "http://localhost:8000/api/v1/admin/upload-movie";

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        // ✅ clear form
        nameRef.current.value = "";
        dateRef.current.value = "";
        sizeRef.current.value = "";
        descRef.current.value = "";
        genreRef.current.value = "";
        ratingRef.current.value = "";
        languageRef.current.value = "";
        trailerRef.current.value = "";
        coverRef.current.value = "";
        videoRef.current.value = "";

        setCoverName("");
        setVideoName("");

        setTimeout(() => setSuccess(false), 2500);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-10 relative">
      {/* ✅ Loader */}
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ✅ Premium Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-5 rounded-2xl shadow-2xl text-center animate-bounce">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-lg font-semibold">Movie Uploaded Successfully</p>
          </div>
        </div>
      )}

      <div className="bg-gray-900 p-8 rounded-lg w-[600px]">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Upload Movie
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={nameRef}
            type="text"
            placeholder="Movie Name"
            className="p-3 rounded bg-gray-800 text-white"
            required
          />

          <input
            ref={dateRef}
            type="date"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <input
            ref={sizeRef}
            type="text"
            placeholder="Movie Size"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <input
            ref={genreRef}
            type="text"
            placeholder="Genre"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <input
            ref={ratingRef}
            type="number"
            step="0.1"
            placeholder="IMDb Rating"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <input
            ref={languageRef}
            type="text"
            placeholder="Language"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <input
            ref={trailerRef}
            type="text"
            placeholder="Trailer URL"
            className="p-3 rounded bg-gray-800 text-white"
          />

          <textarea
            ref={descRef}
            placeholder="Movie Description"
            className="p-3 rounded bg-gray-800 text-white"
          />

          {/* Cover Upload */}
          <div>
            <label className="text-white mb-2 block font-semibold">
              Cover Image
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg h-32 cursor-pointer hover:border-red-500 hover:bg-gray-800 transition">
              {coverName ? (
                <span className="text-green-400 text-sm font-semibold">
                  {coverName}
                </span>
              ) : (
                <>
                  <span className="text-gray-400 text-sm">
                    Drag & Drop Poster Here
                  </span>
                  <span className="text-red-500 text-sm mt-1">
                    or Click to Upload
                  </span>
                </>
              )}

              <input
                type="file"
                ref={coverRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => setCoverName(e.target.files[0]?.name)}
              />
            </label>
          </div>

          {/* Video Upload */}
          <div>
            <label className="text-white mb-2 block font-semibold">
              Movie Video
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg h-32 cursor-pointer hover:border-red-500 hover:bg-gray-800 transition">
              {videoName ? (
                <span className="text-green-400 text-sm font-semibold">
                  {videoName}
                </span>
              ) : (
                <>
                  <span className="text-gray-400 text-sm">
                    Drag & Drop Movie File
                  </span>
                  <span className="text-red-500 text-sm mt-1">
                    or Click to Upload
                  </span>
                </>
              )}

              <input
                type="file"
                ref={videoRef}
                className="hidden"
                accept="video/*"
                onChange={(e) => setVideoName(e.target.files[0]?.name)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 active:scale-95 transition p-3 rounded text-white font-semibold shadow-lg"
          >
            {loading ? "Uploading..." : "Upload Movie"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
