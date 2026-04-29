import {useBookingStore} from "../store/useBookingStore";
import {Sparkles, Monitor} from "lucide-react"; // אייקונים ליוגה וטכנולוגיה

const services = [
  {
    id: "yoga",
    title: "Yoga Session",
    desc: "1-on-1 private flow",
    icon: <Sparkles />,
  },
  {
    id: "tech",
    title: "Tech Consulting",
    desc: "Architecture & Review",
    icon: <Monitor />,
  },
];

export default function ServiceStep() {
  const setService = useBookingStore((state) => state.setService);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Choose a Service
      </h2>
      <div className="space-y-3">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setService(s.id)}
            className="w-full flex items-center p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-100 text-blue-600">
              {s.icon}
            </div>
            <div className="ml-4 text-left">
              <div className="font-medium text-gray-800">{s.title}</div>
              <div className="text-sm text-gray-500">{s.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
