import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import classData from "../data/class.json";

export default function Class() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(classData);
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader title="Class" />

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Kelas", "Pelatih", "Durasi", "Intensitas", "Deskripsi"].map((header, index, arr) => (
                <th
                  key={header}
                  className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 ${index !== arr.length - 1 ? "border-r border-purple-300" : ""} ${index === 0 ? "border-l" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr
                key={classItem.id}
                className="hover:bg-purple-50 transition duration-300"
              >
                <td className="px-6 py-4 text-gray-700 font-semibold border-b border-gray-200 border-l border-r">
                  {classItem.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {classItem.trainer.name}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {classItem.duration}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {classItem.intensity}
                </td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-l border-r">
                  {classItem.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
