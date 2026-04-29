import {format, addDays, startOfDay, isSameDay} from "date-fns"; // הוספנו isSameDay
import {useBookingStore} from "../store/useBookingStore";
import {ChevronLeft} from "lucide-react";

export default function DateTimeStep() {
  const {setDateTime, setStep, setSelectedDate, bookingData} =
    useBookingStore();

  const days = [...Array(7)].map((_, i) => addDays(startOfDay(new Date()), i));
  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"];

  return (
    <div className="p-6">
      <button
        onClick={() => setStep(1)}
        className="flex items-center text-sm text-gray-500 mb-4 hover:text-gray-700"
      >
        <ChevronLeft size={16} /> Back
      </button>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Select Date & Time
      </h2>

      {/* בחירת יום פונקציונלית */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {days.map((day) => {
          const isSelected =
            bookingData.date && isSameDay(day, bookingData.date);
          return (
            <button
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`flex-shrink-0 w-14 h-20 border rounded-xl flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-white shadow-md transform scale-105"
                  : "bg-white border-gray-200 text-gray-800 hover:border-blue-400"
              }`}
            >
              <span
                className={`text-xs uppercase ${isSelected ? "text-blue-100" : "text-gray-400"}`}
              >
                {format(day, "EEE")}
              </span>
              <span className="text-lg font-bold">{format(day, "d")}</span>
            </button>
          );
        })}
      </div>

      {/* בחירת שעה - מופעלת רק אם נבחר יום */}
      <h3 className="text-sm font-medium text-gray-500 mb-3">
        Available Time Slots
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            disabled={!bookingData.date} // מניעת בחירת שעה לפני יום
            onClick={() => setDateTime(bookingData.date, time)}
            className={`p-2 text-sm border rounded-lg transition-all ${
              !bookingData.date
                ? "opacity-50 cursor-not-allowed bg-gray-50"
                : "hover:bg-blue-600 hover:text-white border-gray-200"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
      {!bookingData.date && (
        <p className="text-xs text-blue-500 mt-3 italic">
          * Please select a date first
        </p>
      )}
    </div>
  );
}
