import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ setBooks, setLoading, setError }) {
  const [query, setQuery] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setBooks([]);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
        trimmed
      )}`;
      console.log("Fetching:", url);
      const res = await fetch(url);
      const data = await res.json();

      if (Array.isArray(data.docs) && data.docs.length > 0) {
        setBooks(data.docs);
      } else {
        setBooks([]);
        setError("No results found for that title.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={searchBooks}
      className="flex max-w-xl mt-6 shadow-md rounded-lg overflow-hidden border border-gray-200 bg-white"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book title..."
        className="flex-grow px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-5 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 font-medium transition"
      >
        <Search size={18} /> <span>Search</span>
      </button>
    </form>
  );
}
