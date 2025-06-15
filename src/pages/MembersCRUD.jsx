 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { membersAPI } from "../services/membersAPI";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";

export default function Members() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [members, setMembers] = useState([]);
  const [dataForm, setDataForm] = useState({
    nama: "",
    kontak: "",
    paket: "",
    status: "",
  });

  const paketOptions = ["Basic", "Gold", "Premium"];
  const statusOptions = ["Aktif", "Cuti", "Tidak Aktif"];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const loadMembers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await membersAPI.fetchMembers();
      setMembers(data);
    } catch (err) {
      setError("Gagal memuat data members.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await membersAPI.createMember({ ...dataForm }); // Submit form
      await loadMembers(); // Refresh data agar langsung muncul

      setSuccess("Member berhasil ditambahkan!");
      setDataForm({ nama: "", kontak: "", paket: "", status: "" });
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(
        `Gagal menambah member: ${err.response?.data?.message || err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus member ini?")) return;
    try {
      setLoading(true);
      await membersAPI.deleteMember(id);
      await loadMembers(); // Refresh data setelah delete
      setSuccess("Member berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Gagal menghapus member.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      {/* Form Tambah Member */}
      <div className="bg-white p-6 md:p-8 mx-4 mt-12 mb-6 rounded-xl shadow border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-700 mb-6">
          Tambah Member Baru
        </h3>

        {success && <AlertBox type="success">{success}</AlertBox>}
        {error && <AlertBox type="error">{error}</AlertBox>}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama Member"
            value={dataForm.nama}
            onChange={handleChange}
            required
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="kontak"
            placeholder="Kontak Member"
            value={dataForm.kontak}
            onChange={handleChange}
            required
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            name="paket"
            value={dataForm.paket}
            onChange={handleChange}
            required
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Pilih Paket</option>
            {paketOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <select
            name="status"
            value={dataForm.status}
            onChange={handleChange}
            required
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Pilih Status</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition md:col-span-2"
          >
            {loading ? "Menyimpan..." : "Simpan Member"}
          </button>
        </form>

        <div className="mt-2">
          <button
            onClick={() => navigate("/members")}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 rounded-lg transition"
          >
            ← Kembali ke Halaman Members
          </button>
        </div>
      </div>

      {/* Tabel Member */}
      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Foto", "Nama", "Kontak", "Paket", "Status", "Aksi"].map(
                (header, index, array) => (
                  <th
                    key={header}
                    className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 
                    ${index === 0 ? "border-l border-purple-300" : ""} 
                    ${index !== array.length - 1 ? "border-r border-purple-300" : ""}`}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-6">
                  <LoadingSpinner text="Memuat data..." />
                </td>
              </tr>
            ) : members.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  Belum ada member yang ditambahkan.
                </td>
              </tr>
            ) : (
              members.map((m) => (
                <tr
                  key={m.id}
                  className="hover:bg-purple-50 transition duration-300"
                >
                  <td className="px-6 py-4 border-b border-gray-200 border-l border-r">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.nama}
                        className="w-12 h-12 object-cover rounded-full border-2 border-pink-300"
                      />
                    ) : (
                      <span className="text-gray-400">–</span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-700 border-b border-gray-200 border-r">
                    {m.nama}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {m.kontak}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {m.paket}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 border-r">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        m.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : m.status === "Cuti"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 border-r">
                    <button
                      onClick={() => handleDelete(m.id)}
                      disabled={loading}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                    >
                      <AiFillDelete className="text-lg" />
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}