import { json } from "express";
import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservationModel.js";

export const sendReservation = async (req, res, next) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.date ||
    !req.body.time
  ) {
    return next(new ErrorHandler("Please provide all information!"));
  }
  try {
    const newReserve = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      date: req.body.date,
      time: req.body.time,
    };

    await Reservation.create(newReserve);
    res.status(200).json({
      success: true,
      message: "Reservation sent succesfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};
