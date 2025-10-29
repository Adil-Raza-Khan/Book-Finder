import React from "react";

export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/120x180?text=No+Cover";

  const title = book.title || "Untitled";
  const author = book.author_name?.join(", ") || "Unknown Author";
  const year = book.first_publish_year || "—";
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const reviews = Math.floor(Math.random() * 800);

  const wikiLink = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(title)}`;

  return (
    <a
      href={wikiLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-white 
        rounded-xl 
        shadow-md 
        hover:shadow-2xl 
        hover:-translate-y-1 
        transition-all 
        duration-300 
        overflow-hidden 
        border border-gray-100 
        flex flex-col 
        justify-between 
        mx-auto 
        w-[160px] sm:w-[180px] md:w-[200px]
      "
    >
      <div className="w-full aspect-[2/3] overflow-hidden">
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3 text-center">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mt-1">{author}</p>

        <div className="mt-2 text-[11px] text-gray-500">
          <p>⭐ {rating}</p>
          <p>{reviews} reviews</p>
          <p>{year}</p>
        </div>

        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded transition">
          View on Wikipedia
        </button>
      </div>
    </a>
  );
}
