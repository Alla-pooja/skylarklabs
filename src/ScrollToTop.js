import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Check if the URL contains a hash (e.g., #contact)
        if (window.location.hash) {
            const elementId = window.location.hash.substring(1);  // Remove '#' from the hash
            const element = document.getElementById(elementId);

            if (element) {
                // Scroll to the element if it exists
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Scroll to the top of the page if no hash is present
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
}

export default ScrollToTop;
