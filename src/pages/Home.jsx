import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
<div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#0cebeb] text-white">

<header className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight">
            🎬 Movie & Book Finder
          </h1>
          <p className="text-sm text-gray-500 text-center sm:text-right">
            Discover titles from Open Library
          </p>
        </div>
      </header>

      <main className="w-full max-w-6xl flex flex-col items-center px-4 py-8">
        <SearchBar
          setBooks={(list) => {
            setBooks(list.slice(0, 25));
            setError("");
          }}
          setLoading={setLoading}
          setError={setError}
        />

        {loading && <Loader />}


        {error && !loading && (
          <p className="text-red-500 mt-8 font-medium">{error}</p>
        )}

        {!loading && !error && books.length === 0 && (
          <p className="text-gray-500 mt-10 text-center">
            🎥 Start by typing a movie or book title above <br />
            (e.g. <b>Inception</b> or <b>Harry Potter</b>)
          </p>
        )}

        {!loading && !error && books.length > 0 && (
          <section
            className="
            grid 
            grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            gap-x-10 gap-y-12 
            px-8   
            mt-10
            "
          >
            {books.slice(0, 25).map((book, index) => (
              <BookCard key={book.key || index} book={book} />
            ))}
          </section>
        )}
      </main>

<footer className="mt-auto w-full border-t border-white/20 bg-white/10 backdrop-blur-md py-4 text-center text-xs text-gray-200">
        © 2025 Book Finder — Data from Open Library API
      </footer>
    </div>
  );
}
