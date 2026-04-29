import {useState} from "react";
import {useBookingStore} from "../store/useBookingStore";
import {Loader2} from "lucide-react"; // לאנימציית טעינה

export default function DetailsStep() {
  const {setStep} = useBookingStore();
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // סימולציה של שליחה ל-API
    setTimeout(() => {
      setLoading(false);
      setIsConfirmed(true);
    }, 2000);
  };

  // ... בתוך הקומפוננטה
  if (isConfirmed) {
    return (
      <div className="p-8 text-center">
        {/* מסך הצלחה - ללא כפתור Back */}
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
        <p className="text-gray-500 mt-2">
          A confirmation email has been sent.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-blue-600 font-medium"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* כפתור ה-Back מופיע כאן, בשלב מילוי השם והמייל */}
      <button
        type="button"
        onClick={() => setStep(2)}
        className="flex items-center text-sm text-gray-500 mb-4 hover:text-gray-700"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back
      </button>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Final Details
      </h2>
      {/* ... שאר הפורם כפי שהיה */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            required
            type="text"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            required
            type="email"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="john@example.com"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
