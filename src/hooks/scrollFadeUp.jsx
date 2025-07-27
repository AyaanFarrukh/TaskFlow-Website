import { useEffect } from 'react';

const useScrollFadeUp = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-fade-up")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entrie) => {
                if(entrie.isIntersecting) {
                    entrie.target.classList.add("visible");
                } else {
                    entrie.target.classList.remove("visible");
                }
            })
        },{ threshold: 0.1 });
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        }
    },[])
}

export default useScrollFadeUp;