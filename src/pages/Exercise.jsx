 import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import exercisesData from '../data/exercise.json';

export default function Exercise() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(exercisesData);
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader title="Exercise" />

      <div className="bg-white p-6 mx-4 mb-6 rounded-xl shadow-lg border border-purple-200 overflow-x-auto">
        <table className="min-w-full border-collapse table-auto">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left border-b-2 border-purple-300 border-l">Nama Latihan</th>
              <th className="px-6 py-4 text-left border-b-2 border-purple-300 border-l">Durasi</th>
              <th className="px-6 py-4 text-left border-b-2 border-purple-300 border-l">Pelatih</th>
              <th className="px-6 py-4 text-left border-b-2 border-purple-300 border-l">Kontak</th>
              <th className="px-6 py-4 text-left border-b-2 border-purple-300 border-l border-r">Deskripsi</th>
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
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l">
                  {ex.duration}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l">
                  {ex.trainer.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l">
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
