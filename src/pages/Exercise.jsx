import React, { useEffect, useState } from 'react';
import PageHeader from "../components/PageHeader";
import exercisesData from "../data/exercise.json";

export default function Exercise() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(exercisesData);
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader title="Exercise" />
      

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Nama Latihan", "Jenis", "Durasi", "Intensitas", "Pelatih", "Kontak", "Deskripsi"].map((header, index, array) => (
                <th
                  key={header}
                  className={`px-6 py-4 text-sm font-semibold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 ${index === 0 ? "border-l" : ""} ${index === array.length - 1 ? "border-r" : ""} border-r`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr
                key={ex.id}
                className="hover:bg-purple-50 transition duration-300"
              >
                <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-200 border-l">
                  {ex.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.type}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.duration}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.intensity}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.trainer.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.trainer.contact}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {ex.description}
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
}
