import {create} from "zustand";

export const useBookingStore = create((set) => ({
  step: 1,
  bookingData: {
    service: null,
    date: null,
    time: null,
    user: {name: "", email: ""},
  },

  setStep: (step) => set({step}),

  setService: (service) =>
    set((state) => ({
      bookingData: {...state.bookingData, service},
      step: 2,
    })),

  setDateTime: (date, time) =>
    set((state) => ({
      bookingData: {...state.bookingData, date, time},
      step: 3,
    })),

  resetBooking: () =>
    set({
      step: 1,
      bookingData: {
        service: null,
        date: null,
        time: null,
        user: {name: "", email: ""},
      },
    }),
}));
