import {format, addDays, startOfDay} from "date-fns";
import {useBookingStore} from "../store/useBookingStore";
import {ChevronLeft} from "lucide-react";

export default function DateTimeStep() {
  const {setDateTime, setStep} = useBookingStore();

  // יצירת מערך של 7 הימים הקרובים לצורך הפשטות
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

      {/* בחירת יום */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => {
              /* כאן אפשר להוסיף בחירת יום לסטייט */
            }}
            className="flex-shrink-0 w-14 h-20 border rounded-xl flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-500 transition-all"
          >
            <span className="text-xs text-gray-400 uppercase">
              {format(day, "EEE")}
            </span>
            <span className="text-lg font-bold text-gray-800">
              {format(day, "d")}
            </span>
          </button>
        ))}
      </div>

      {/* בחירת שעה */}
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => setDateTime(new Date(), time)} // כרגע שולח את היום הנוכחי
            className="p-2 text-sm border rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
