import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contains at least 3 characters!"],
    maxLength: [30, "First name can't exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contains at least 3 characters!"],
    maxLength: [30, "Last name can't exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contains 11 digits!"],
    maxLength: [11, "Phone number must contains 11 digits!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
