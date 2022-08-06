import type { NextPage } from "next";
import { useState, useEffect } from "react";

import Login from "../containers/Login";
import Home from "../containers/Home";

const Index: NextPage = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        setAccessToken(token);
      }
    }
  }, [setAccessToken]);

  return !accessToken ? (
    <Login setAccessToken={setAccessToken} />
  ) : (
    <Home setAccessToken={setAccessToken} />
  );
};

export default Index;
