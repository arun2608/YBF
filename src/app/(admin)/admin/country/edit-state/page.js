import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import EditState from "./EditState";

export const metadata = {
  title: "Edit State | Personal Secretary",
};

const page = () => {
  return (
    <Suspense>
      <EditState />
    </Suspense>
  );
};

export default page;
