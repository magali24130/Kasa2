import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Banner.scss";
export default function Banner() {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    } else {
      setAboutPage(false);
    }
  }, [location]);

  return (
    <section className={aboutPage ? "banner_about" : "banner"}>
      {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
    </section>
  );
}
