import InputField from "./components/InputField";

export default function UserForm() {
    return (
      <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Tambah User</h2>

         <InputField
         label="Name"
         type="text"
         placeholder="Ketik nama..."/>

          <InputField
         label="Email"
         type="email"
         placeholder="Masukkan email..."/>

          <InputField
         label="Tanggal lahir"
         type="date"
          />
          <button className="w-full bg-yellow-500 text-white p-2 rounded">
            Simpan
          </button>
        </div>
      </div>
    );
  }
  