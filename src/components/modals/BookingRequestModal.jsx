
import React, { useState } from 'react';
import {
  Calendar,
  LoaderCircle,
  Mail,
  Phone,
  User,
  Users,
  X,
} from 'lucide-react';


// Convert a Date object into YYYY-MM-DD format
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};


// Add a number of days to a date
const addDays = (dateString, days) => {
  const date = new Date(`${dateString}T12:00:00`);

  date.setDate(date.getDate() + days);

  return formatDate(date);
};


// Get tomorrow's date
const getDefaultCheckIn = () => {
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  return formatDate(tomorrow);
};


// Create the initial form values
const getInitialForm = () => {
  const checkIn = getDefaultCheckIn();

  return {
    name: '',
    email: '',
    phone: '',
    checkIn,
    checkOut: addDays(checkIn, 5),
    adults: 2,
    children: 0,
    requests: '',
  };
};


// Common style for all inputs
const inputClassName =
  'w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-sky-500';


export const BookingRequestModal = ({
  room,
  isOpen,
  onClose,
  onSubmit,
}) => {

  // Store form data
  const [form, setForm] = useState(getInitialForm);

  // Store loading/submitting status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store error message
  const [errorMessage, setErrorMessage] = useState('');


  // Do not show the modal if it is closed
  // or if there is no room
  if (!isOpen || !room) return null;


  // Handle changes in all input fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,

      // Update the changed field
      [name]: value,

      // If check-in changes and check-out is before/equal to it,
      // automatically set check-out to one day after check-in
      ...(name === 'checkIn' && previous.checkOut <= value
        ? {
            checkOut: addDays(value, 1),
          }
        : {}),
    }));

    // Clear old error message
    setErrorMessage('');
  };


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();


    // Check that check-out is after check-in
    if (form.checkOut <= form.checkIn) {
      setErrorMessage('Check-out must be after check-in.');
      return;
    }


    // Start loading
    setIsSubmitting(true);
    setErrorMessage('');


    try {

      // Send booking information
      await onSubmit({
        ...form,

        // Add selected room name
        room: room.name,

        // Convert adults and children into numbers
        adults: Number(form.adults),
        children: Number(form.children),
      });


      // Reset the form after successful submission
      setForm(getInitialForm());

    } catch (error) {

      // Show error message if submission fails
      setErrorMessage(
        error.message || 'The reservation could not be submitted.'
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
        className="modal-card max-w-xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reservation form"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>


        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          Reserve your stay
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
          {room.name}
        </p>


        {/* Booking form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Name, Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {/* Full name */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <User className="w-3.5 h-3.5 text-sky-500" />
                Full name
              </span>

              <input
                className={inputClassName}
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />

            </label>


            {/* Email */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                Email
              </span>

              <input
                className={inputClassName}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />

            </label>


            {/* Phone */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                Phone
              </span>

              <input
                className={inputClassName}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={handleChange}
              />

            </label>

          </div>


          {/* Dates and Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {/* Check-in */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                Check-in
              </span>

              <input
                className={inputClassName}
                type="date"
                name="checkIn"
                min={formatDate(new Date())}
                required
                value={form.checkIn}
                onChange={handleChange}
              />

            </label>


            {/* Check-out */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                Check-out
              </span>

              <input
                className={inputClassName}
                type="date"
                name="checkOut"
                min={addDays(form.checkIn, 1)}
                required
                value={form.checkOut}
                onChange={handleChange}
              />

            </label>


            {/* Adults */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5 text-sky-500" />
                Adults
              </span>

              <input
                className={inputClassName}
                type="number"
                name="adults"
                min="1"
                max="20"
                required
                value={form.adults}
                onChange={handleChange}
              />

            </label>


            {/* Children */}
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5 text-sky-500" />
                Children
              </span>

              <input
                className={inputClassName}
                type="number"
                name="children"
                min="0"
                max="20"
                value={form.children}
                onChange={handleChange}
              />

            </label>

          </div>


          {/* Special requests */}
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">

            Special requests

            <textarea
              className={`${inputClassName} mt-1 resize-y`}
              name="requests"
              rows={3}
              value={form.requests}
              onChange={handleChange}
            />

          </label>


          {/* Error message */}
          {errorMessage && (
            <p
              role="alert"
              className="text-sm text-red-600 dark:text-red-400"
            >
              {errorMessage}
            </p>
          )}


          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer disabled:cursor-wait flex items-center justify-center gap-2"
          >

            {/* Loading icon */}
            {isSubmitting && (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            )}

            {/* Button text */}
            {isSubmitting
              ? 'Sending reservation…'
              : 'Submit reservation request'}

          </button>

        </form>
      </div>
    </div>
  );
};
