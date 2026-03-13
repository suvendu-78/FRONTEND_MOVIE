// const Foot = () => {
//   return (
//     <>
//       <footer className="bg-black text-gray-400 px-10 py-10 shadow-2xl">
//         <div className="max-w-7xl mx-auto">
//           {/* Top Text */}
//           <p className="mb-6 text-sm">
//             Questions? Call <span className="text-white">000-800-919-1694</span>
//           </p>

//           {/* Links */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-3 text-sm">
//             <a href="#" className="hover:underline">
//               FAQ
//             </a>
//             <a href="#" className="hover:underline">
//               Help Center
//             </a>
//             <a href="#" className="hover:underline">
//               Account
//             </a>
//             <a href="#" className="hover:underline">
//               Media Center
//             </a>

//             <a href="#" className="hover:underline">
//               Investor Relations
//             </a>
//             <a href="#" className="hover:underline">
//               Jobs
//             </a>
//             <a href="#" className="hover:underline">
//               Ways to Watch
//             </a>
//             <a href="#" className="hover:underline">
//               Terms of Use
//             </a>

//             <a href="#" className="hover:underline">
//               Privacy
//             </a>
//             <a href="#" className="hover:underline">
//               Cookie Preferences
//             </a>
//             <a href="#" className="hover:underline">
//               Corporate Information
//             </a>
//             <a href="#" className="hover:underline">
//               Contact Us
//             </a>
//           </div>

//           {/* Bottom */}
//           <p className="mt-8 text-xs text-gray-500">
//             © {new Date().getFullYear()} FilmCity. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Foot;

const Foot = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20 text-gray-400 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Back to top */}
        <div className="text-center mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white transition"
          >
            ↑ Back to Top
          </button>
        </div>

        {/* Top Text */}
        <p className="mb-8 text-sm">
          Questions? Call <span className="text-white">000-800-919-1694</span>
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 text-sm">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Media Center
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom */}
        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} FilmCity. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Foot;
