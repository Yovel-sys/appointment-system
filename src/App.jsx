import BookingManager from "./components/BookingManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
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
