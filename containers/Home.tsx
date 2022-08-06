import { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { AccessTokenProps } from "../types/AccessTokenProps";

const Home: NextPage<AccessTokenProps> = ({ setAccessToken }) => {
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userMail");
    setAccessToken("");
  };

  return (
    <>
      <Header logout={logout} />
      <Footer />
    </>
  );
};

export default Home;
