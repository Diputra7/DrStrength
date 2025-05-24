import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import trainersData from "../data/trainers.json";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    setTrainers(trainersData);
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader title="Trainers" />

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2 animate-pulse">
          💪 Daftar Trainer Keren 💪
        </h1>
        <p className="text-gray-600">Kenalan dengan pelatih profesional yang siap membimbing kamu!</p>
      </div>

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Foto", "Nama", "Keahlian", "Pengalaman", "Kontak"].map((header, index, array) => (
                <th
                  key={header}
                  className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 
                    ${index === 0 ? "border-l border-purple-300" : ""} 
                    ${index !== array.length - 1 ? "border-r border-purple-300" : ""}
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-purple-50 transition duration-300">
                <td className="px-6 py-4 border-b border-gray-200 border-l border-r">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-16 h-16 object-cover rounded-full border-4 border-pink-300 shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 text-gray-700 font-semibold border-b border-gray-200 border-r">
                  {trainer.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                  {trainer.expertise}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                  {trainer.experience}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                  {trainer.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
