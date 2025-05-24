export default function Error({
    code = "400",
    title = "Not Found",
    message = "Oops! It seems you followed a broken backlink.",
    imageSrc = "/img/error.png",
    buttonText = "← Back To Home",
    buttonLink = "/"
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex flex-col md:flex-row items-center p-8 md:p-12 max-w-4xl w-full space-y-8 md:space-y-0 md:space-x-10 border border-gray-200">
          
          {/* Ilustrasi */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="Error Illustration"
              className="w-72 md:w-80 object-contain"
            />
          </div>
  
          {/* Konten teks */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-6xl font-extrabold text-blue-800">{code}</h1>
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-500">{message}</p>
            <button
              onClick={() => window.location.href = buttonLink}
              className="inline-flex items-center px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-transform transform active:scale-95"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
  