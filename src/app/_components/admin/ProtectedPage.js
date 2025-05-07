"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login"); // Redirect to the home page if unauthenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
      </div>
    );
  }

  // Return null if the user is unauthenticated, but let the effect handle the redirect
  if (status === "unauthenticated") {
    return null;
  }

  // Render the children if the user is authenticated
  return <>{children}</>;
};

export default ProtectedPage;

const styles = {
  loaderContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "6px solid #ccc",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite", // This relies on the global @keyframes
  },
    
};