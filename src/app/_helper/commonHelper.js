import { format } from "date-fns";

export const generateOTP = (digits = 6) => {
  let otp = "";
  for (let i = 0; i < digits; i++) {
    otp += Math.floor(Math.random() * 10); // Random digit between 0-9
  }
  return otp;
};

export const capitalize = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatDateTime = (date) => {
  return format(new Date(date), "dd MMM yyyy hh:mm a")
};

export const formatDate = (date) => {
  return format(new Date(date), "dd MMM yyyy")
};
