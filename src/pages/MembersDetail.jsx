 import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import membersData from "../data/members.json";

export default function MemberDetail() {
  const { id } = useParams();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="p-6">
        <PageHeader title="Member Tidak Ditemukan" />
        <p className="text-gray-600 mb-4">Data member dengan ID tersebut tidak tersedia.</p>
        <Link to="/members" className="text-purple-600 underline">
          Kembali ke daftar members
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <PageHeader title={`Detail Member: ${member.name}`} />

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 border border-purple-200">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={member.photo}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-pink-300 shadow"
          />
          <div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold text-purple-700">Members ID:</span>{" "}
              <span className="font-mono">{member.members_id || "-"}</span>
            </p>
            <h2 className="text-2xl font-bold text-purple-800">{member.name}</h2>
            <p className="text-gray-600">{member.contact}</p>
            <p className="mt-1 text-sm text-gray-500">Paket: {member.paket}</p>
            <p className="mt-1 text-sm text-gray-500">
              Status:{" "}
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
            </p>
          </div>
        </div>

        <Link to="/members" className="text-purple-600 hover:underline">
          &larr; Kembali ke daftar members
        </Link>
      </div>
    </div>
  );
}
