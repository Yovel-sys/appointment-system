import {motion, AnimatePresence} from "framer-motion";
import {useBookingStore} from "../store/useBookingStore";
import ServiceStep from "./ServiceStep";
import DateTimeStep from "./DateTimeStep";
import DetailsStep from "./DetailsStep";
import {Check} from "lucide-react";

// קומפוננטות זמניות לשלבים (נמלא אותן בהמשך)

const variants = {
  enter: (direction) => ({x: direction > 0 ? 100 : -100, opacity: 0}),
  center: {x: 0, opacity: 1},
  exit: (direction) => ({x: direction < 0 ? 100 : -100, opacity: 0}),
};
export default function BookingManager() {
  const {step} = useBookingStore();

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Progress Stepper */}
      <div className="w-full px-8 pt-10 pb-6 bg-gray-50/50 border-b">
        <div className="flex items-center justify-center max-w-xs mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-all duration-300 ${
                  step >= s
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > s ? <Check size={16} strokeWidth={3} /> : s}
              </div>

              {s < 3 && (
                <div className="flex-1 h-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500 ease-out"
                    style={{width: step > s ? "100%" : "0%"}}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait" custom={step}>
        <motion.div
          key={step}
          custom={step}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 0.3}}
        >
          {step === 1 && <ServiceStep />}
          {step === 2 && <DateTimeStep />}
          {step === 3 && <DetailsStep />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
