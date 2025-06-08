 import { useEffect, useState } from "react";
import axios from "axios";

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.data.slip) {
          setQuote(response.data.slip);
        } else {
          setError("Gagal memuat quote.");
        }
      })
      .catch(() => {
        setError("Terjadi kesalahan saat mengambil data.");
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-5">
      <div className="bg-white border border-gray-500 rounded-lg shadow-lg max-w-md w-full px-8 py-6 text-gray-800 text-base">
        <h2 className="font-semibold text-2xl mb-4 text-center text-indigo-700">
          Quote of the Day
        </h2>

        {error ? (
          <p className="text-sm text-red-500 italic text-center">{error}</p>
        ) : quote ? (
          <>
            <p className="italic leading-relaxed text-center text-gray-700">
              "{quote.advice}"
            </p>
          </>
        ) : (
          <p className="text-gray-400 italic text-sm text-center">Memuat quote...</p>
        )}
      </div>
    </div>
  );
}
