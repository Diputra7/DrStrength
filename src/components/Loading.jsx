export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-1 items-end h-8">
            <div className="w-2 h-4 bg-blue-600 animate-bounce [animation-delay:0s] rounded-md"></div>
            <div className="w-2 h-6 bg-blue-500 animate-bounce [animation-delay:0.1s] rounded-md"></div>
            <div className="w-2 h-8 bg-blue-400 animate-bounce [animation-delay:0.2s] rounded-md"></div>
            <div className="w-2 h-6 bg-blue-500 animate-bounce [animation-delay:0.3s] rounded-md"></div>
            <div className="w-2 h-4 bg-blue-600 animate-bounce [animation-delay:0.4s] rounded-md"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Mohon Tunggu...</h2>
      </div>
    </div>
  );
}
