import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import EditDistrict from "./EditDistrict";

export const metadata = {
  title: "Edit District | Personal Secretary",
};

const page = () => {
  return (
    <Suspense>
      <EditDistrict />
    </Suspense>
  );
};

export default page;
