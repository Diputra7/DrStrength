 import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import membersData from "../data/members.json"; // path ke data json lokal
import { Link } from "react-router-dom";

export default function Members() {
  const [query, setQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  // Ambil data saat awal
  useEffect(() => {
    setMembers(membersData);
    setFilteredMembers(membersData);
  }, []);

  // Debounce pencarian berdasarkan query
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        setFilteredMembers(members);
      } else {
        const filtered = members.filter((member) =>
          member.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMembers(filtered);
      }
    }, 500);

    return () => clearTimeout(timeout); // bersihkan timeout saat query berubah
  }, [query, members]);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen p-6">
      <PageHeader title="Members" />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari member..."
        className="mb-6 p-3 w-full bg-white rounded-2xl shadow-lg"
      />

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Foto", "Id Members", "Nama", "Kontak", "Paket", "Status"].map(
                (header, index, array) => (
                  <th
                    key={header}
                    className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 
                    ${index === 0 ? "border-l border-purple-300" : ""} 
                    ${
                      index !== array.length - 1
                        ? "border-r border-purple-300"
                        : ""
                    }`}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-purple-50 transition duration-300"
                >
                  <td className="px-6 py-4 border-b border-gray-200 border-l border-r">
                    <Link to={`/members/${member.id}`}>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-16 h-16 object-cover rounded-full border-4 border-pink-300 shadow-sm cursor-pointer"
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 border-r font-mono text-gray-700 font-semibold">
                    {member.members_id || "-"}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold border-b border-gray-200 border-r">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {member.contact}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {member.paket}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        member.status === "Aktif"
                          ? "bg-green-100 text-green-800"
                          : member.status === "Cuti"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  Tidak ada member yang cocok dengan pencarian.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}