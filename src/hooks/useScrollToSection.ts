import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToSection() {
    const { hash, pathname, key } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if(element) {
                element.scrollIntoView()
            };
        };

    }, [hash, pathname, key]);
};