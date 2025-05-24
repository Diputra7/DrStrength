import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Forgot Password Kamu?
      </h2>

      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we&apos;ll send you a link to reset your password.
      </p>

      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Remembered your password?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
