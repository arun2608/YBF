import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import EditState from "./EditCity";
import EditCity from "./EditCity";

export const metadata = {
  title: "Edit City | Personal Secretary",
};

const page = () => {
  return (
    <Suspense>
      <EditCity />
    </Suspense>
  );
};

export default page;
