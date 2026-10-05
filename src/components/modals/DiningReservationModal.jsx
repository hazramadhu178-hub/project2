
import React, { useEffect, useState } from 'react';

import {
  X,
  Calendar,
  Clock,
  Users,
  UtensilsCrossed,
  Check,
  CheckCircle2,
  LoaderCircle,
  Phone,
  User,
} from 'lucide-react';


// Get today's date in YYYY-MM-DD format
const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};


export const DiningReservationModal = ({
  venue,
  isOpen,
  onClose,
  onConfirmReservation,
}) => {

  // Form values
  const [date, setDate] = useState(getToday);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Reservation result
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  // Loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  // Clear old confirmation when the modal opens
  useEffect(() => {
    if (isOpen) {
      setConfirmedReservation(null);
    }
  }, [isOpen]);


  // Do not show the modal if it is closed
  // or if there is no venue
  if (!isOpen || !venue) {
    return null;
  }


  // Submit reservation
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Create reservation object
    const reservation = {
      venue,
      date,
      time,
      guests,
      specialRequests,
      fullName,
      mobileNumber,
    };


    // Start loading
    setIsSubmitting(true);
    setErrorMessage('');


    try {

      // Send reservation to parent component
      await onConfirmReservation(reservation);


      // Show confirmation screen
      setConfirmedReservation(reservation);


      // Reset form values
      setDate(getToday());
      setTime('19:30');
      setGuests(2);
      setSpecialRequests('');
      setFullName('');
      setMobileNumber('');

    } catch (error) {

      // Show error if reservation fails
      setErrorMessage(
        error.message ||
        'The table reservation could not be submitted.'
      );

    } finally {

      // Stop loading
      setIsSubmitting(false);
    }
  };


  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-card max-w-lg p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>


        {/* Show confirmation after successful reservation */}
        {confirmedReservation ? (

          <div className="py-4 text-center">

            {/* Success icon */}
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>


            {/* Confirmation message */}
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              Reservation Confirmed
            </div>


            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Your table is reserved
            </h2>


            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              {confirmedReservation.venue.name} ·{' '}
              {confirmedReservation.venue.type}
            </p>


            {/* Reservation details */}
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-4 text-left text-xs space-y-3 mb-5">

              {/* Guest */}
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">
                  Guest
                </span>

                <strong className="text-slate-800 dark:text-slate-100">
                  {confirmedReservation.fullName}
                </strong>
              </div>


              {/* Date */}
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">
                  Date
                </span>

                <strong className="text-slate-800 dark:text-slate-100">
                  {confirmedReservation.date}
                </strong>
              </div>


              {/* Mobile */}
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">
                  Mobile
                </span>

                <strong className="text-slate-800 dark:text-slate-100">
                  {confirmedReservation.mobileNumber}
                </strong>
              </div>


              {/* Seating time */}
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">
                  Seating time
                </span>

                <strong className="text-slate-800 dark:text-slate-100">
                  {confirmedReservation.time}
                </strong>
              </div>


              {/* Number of guests */}
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">
                  Guests
                </span>

                <strong className="text-slate-800 dark:text-slate-100">
                  {confirmedReservation.guests}
                </strong>
              </div>


              {/* Special requests */}
              {confirmedReservation.specialRequests && (
                <div className="border-t border-slate-200 dark:border-slate-700 pt-3">

                  <span className="text-slate-500 dark:text-slate-400 block mb-1">
                    Special requests
                  </span>

                  <strong className="text-slate-800 dark:text-slate-100 font-normal">
                    {confirmedReservation.specialRequests}
                  </strong>

                </div>
              )}

            </div>


            {/* Done button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Done
            </button>

          </div>

        ) : (

          <>
            {/* Reservation heading */}
            <div className="flex items-center gap-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-sky-500" />

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Table Reservation
              </h2>
            </div>


            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              {venue.name} • {venue.type}
            </p>


            {/* Reservation form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name and mobile number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* Full name */}
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

                  <span className="flex items-center gap-1 mb-1">
                    <User className="w-3.5 h-3.5 text-sky-500" />
                    Full name
                  </span>

                  <input
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
                  />

                </label>


                {/* Mobile number */}
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

                  <span className="flex items-center gap-1 mb-1">
                    <Phone className="w-3.5 h-3.5 text-sky-500" />
                    Mobile number
                  </span>

                  <input
                    type="tel"
                    autoComplete="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
                  />

                </label>

              </div>


              {/* Date and seating time */}
              <div className="grid grid-cols-2 gap-3">

                {/* Date */}
                <div>

                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-sky-500" />
                    Date
                  </label>

                  <input
                    type="date"
                    min={getToday()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
                  />

                </div>


                {/* Seating time */}
                <div>

                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-sky-500" />
                    Seating Time
                  </label>

                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
                  >

                    <option value="08:00">
                      08:00 AM (Breakfast)
                    </option>

                    <option value="09:30">
                      09:30 AM (Breakfast)
                    </option>

                    <option value="12:30">
                      12:30 PM (Lunch)
                    </option>

                    <option value="17:30">
                      05:30 PM (Golden Hour Sunset)
                    </option>

                    <option value="19:30">
                      07:30 PM (Dinner Degustation)
                    </option>

                    <option value="20:30">
                      08:30 PM (Starlit Dinner)
                    </option>

                  </select>

                </div>

              </div>


              {/* Number of guests */}
              <div>

                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  <Users className="w-3.5 h-3.5 inline mr-1 text-sky-500" />
                  Number of Guests
                </label>


                <div className="flex gap-2">

                  {[1, 2, 4, 6].map((num) => (

                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        guests === num
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>

                  ))}

                </div>

              </div>


              {/* Special requests */}
              <div>

                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Special Dietary Notes or Seating Preference
                </label>

                <textarea
                  rows={3}
                  placeholder="e.g. Sunset terrace table, gluten-free preference, anniversary celebration..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none resize-none"
                />

              </div>


              {/* Error message */}
              {errorMessage && (
                <p
                  role="alert"
                  className="text-xs text-red-600 dark:text-red-400"
                >
                  {errorMessage}
                </p>
              )}


              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white font-bold text-xs rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-wait"
              >

                {isSubmitting ? (
                  <LoaderCircle className="w-4 h-4 animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}

                {isSubmitting
                  ? 'Submitting…'
                  : 'Confirm Table Reservation'}

              </button>

            </form>
          </>

        )}

      </div>
    </div>
  );
};