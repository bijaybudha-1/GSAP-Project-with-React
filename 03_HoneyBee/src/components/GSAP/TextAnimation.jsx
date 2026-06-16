import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const TextAnimation = ({ number }) => {
    const numberRef = useRef();
    useGSAP(() => {
        gsap.from(numberRef.current, {
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: numberRef.current,
                start: "top 60%",
                end: "top 20%",
                toggleActions: "play none none reverse",
            },
        });
    });
    return (
        <div>
            <h2 ref={numberRef} className="text-[17vw] text-[#ead38f]">
                {number}
            </h2>
        </div>
    );
};

export default TextAnimation;
