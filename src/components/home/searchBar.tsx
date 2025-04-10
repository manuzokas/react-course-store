import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 z-20">
                <div className="flex items-center bg-black/20 backdrop-blur-md border border-white/40 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-2">
                  <input
                  type="text"
                  placeholder="Search for courses, e-books, or resources..."
                  className="w-full bg-transparent border-none outline-none px-4 py-2 text-blue-200 placeholder-blue-400"
                  />
                  <button className="p-3 bg-blue-500/20 backdrop-blur-sm border border-white/10 text-blue-200 rounded-lg hover:bg-blue-500/40 hover:border-blue-500 transition-all duration-300">
                  <FaSearch className="text-xl" />
                  </button>
                </div>
              </div>
    )
}