import {motion, AnimatePresence} from "framer-motion";
import {useBookingStore} from "../store/useBookingStore";
import ServiceStep from "./ServiceStep";
import DateTimeStep from "./DateTimeStep";
import DetailsStep from "./DetailsStep";

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
