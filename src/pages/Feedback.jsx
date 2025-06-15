 import { useEffect, useState } from "react";
import { feedbackAPI } from "../services/feedbackAPI";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";

export default function Feedback() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const [formData, setFormData] = useState({
    nama: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadFeedback = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await feedbackAPI.fetchFeedback();
      setFeedbackList(data);
    } catch (err) {
      setError("Gagal memuat feedback.");
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

      await feedbackAPI.createFeedback(formData);
      setSuccess("Feedback berhasil ditambahkan!");
      setFormData({ nama: "", pesan: "" });
      setTimeout(() => setSuccess(""), 3000);
      loadFeedback();
    } catch (err) {
      setError("Gagal menambahkan feedback.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus feedback ini?")) return;
    try {
      setLoading(true);
      await feedbackAPI.deleteFeedback(id);
      setSuccess("Feedback berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
      loadFeedback();
    } catch (err) {
      setError("Gagal menghapus feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">

      {/* Form Feedback */}
      <div className="bg-white p-6 md:p-8 mx-4 mt-12 mb-6 rounded-xl shadow border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-700 mb-6">Tambah Feedback</h3>

        {success && <AlertBox type="success">{success}</AlertBox>}
        {error && <AlertBox type="error">{error}</AlertBox>}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 mb-6"
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            name="pesan"
            placeholder="Masukkan pesan..."
            value={formData.pesan}
            onChange={handleChange}
            required
            rows={4}
            className="p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </div>

      {/* Table Feedback */}
      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["No", "Nama", "Pesan", "Aksi"].map((header, index, array) => (
                <th
                  key={header}
                  className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 
                    ${index === 0 ? "border-l border-purple-300" : ""} 
                    ${index !== array.length - 1 ? "border-r border-purple-300" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  <LoadingSpinner text="Memuat feedback..." />
                </td>
              </tr>
            ) : feedbackList.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  Belum ada feedback yang masuk.
                </td>
              </tr>
            ) : (
              feedbackList.map((f, index) => (
                <tr key={f.id} className="hover:bg-purple-50 transition duration-300">
                  <td className="px-6 py-4 border-b border-gray-200 border-l border-r">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-700 border-b border-gray-200 border-r">
                    {f.nama}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {f.pesan}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 border-r">
                    <button
                      onClick={() => handleDelete(f.id)}
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