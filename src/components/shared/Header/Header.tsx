import { useMediaQuery } from "@mui/material";
import React from "react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width:1100px)");

  if (isDesktop) {
    return <HeaderDesktop />;
  }

  return <HeaderMobile />;
};
