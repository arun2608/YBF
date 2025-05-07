import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import EditUser from "./EditUser";

export const metadata = {
    title: 'Edit User | YBF'
  }
  

const page = () => {
    return (
        <Suspense>
        <EditUser/>
        </Suspense>
    )
}

export default page;