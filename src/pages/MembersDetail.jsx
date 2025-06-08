 import { useParams, Link } from "react-router-dom";
import membersData from "../data/members.json";

export default function MemberDetail() {
  const { id } = useParams();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-purple-800 mb-4">
          Member Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-6">
          Data member dengan ID tersebut tidak tersedia.
        </p>
        <Link to="/members" className="text-purple-600 underline hover:text-purple-800 transition">
          ← Kembali ke daftar members
        </Link>
      </div>
    );
  }

  const statusClass = {
    Aktif: "bg-green-100 text-green-800",
    Cuti: "bg-yellow-100 text-yellow-700",
    TidakAktif: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-purple-200 p-8">
        {/* Member Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-300 shadow-lg ring-2 ring-purple-200 transition-transform duration-300 hover:scale-105"
          />

          <div className="text-center sm:text-left space-y-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-purple-700">Members ID:</span>{" "}
              <span className="font-mono">{member.members_id || "-"}</span>
            </p>

            <h2 className="text-3xl font-extrabold text-purple-900 tracking-tight">
              {member.name}
            </h2>

            <p className="text-gray-700 text-base">{member.contact}</p>

            <p className="text-sm text-gray-600">
              Paket:{" "}
              <span className="font-medium text-gray-800">{member.paket}</span>
            </p>

            <p className="text-sm">
              Status:{" "}
              <span
                className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${statusClass[member.status] || "bg-gray-200 text-gray-700"}`}
              >
                {member.status}
              </span>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            to="/members"
            className="inline-block text-sm font-semibold text-purple-700 border border-purple-500 rounded-full px-6 py-2 hover:bg-purple-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          >
            ← Kembali ke daftar members
          </Link>
        </div>
      </div>
    </div>
  );
}