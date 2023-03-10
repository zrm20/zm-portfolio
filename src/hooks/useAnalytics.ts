import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

export default function useAnalytics() {
  const { pathname } = useLocation();

  // initialize on first render
  useEffect(() => {
    ReactGA.initialize("G-07XTW2QS68");
  }, []);

  // send page view everytime the browser path changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname, title: document.title})
  }, [pathname]);
};