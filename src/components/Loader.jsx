import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 mt-3">Fetching books…</p>
    </div>
  );
}
