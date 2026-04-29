import BookingManager from "./components/BookingManager";

function App() {
  return (
    <div className="bg-gray-50 py-12 px-4 min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-gray-50 to-white">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Book Your Session
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Professional Yoga & Tech Consulting
      </p>
      <BookingManager />
    </div>
  );
}

export default App;
