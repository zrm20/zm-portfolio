import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { logEvent } from "../config/firebaseConfig";

export default function useAnalytics() {
  const { pathname } = useLocation();

  // send page view every time the browser path changes
  useEffect(() => {
    logEvent("page_change", {path: pathname, title: document.title})
  }, [pathname]);
};