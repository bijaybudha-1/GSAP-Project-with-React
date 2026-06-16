import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const BeeAnimation = () => {
    const beeContentRef = useRef();
    const beeRef = useRef();
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: beeContentRef.current,
                scroller: "body",
                start: "top top",
                end: "+=350%",
                scrub: 1,
                pin: true,
            },
        });

        gsap.set(beeRef.current, {
            scaleX: -1,
        });

        timeline.to(beeRef.current, {
            x: "-60vw",
        });
        timeline.to(beeRef.current, {
            x: "-60vw",
        });
        timeline
            .to(beeRef.current, {
                scaleX: 1,
                duration: 0.1,
            })
            .to(
                beeRef.current,
                {
                    x: "-10vw",
                    duration: 2,
                },
                "<",
            );
        timeline.to(beeRef.current, {
            x: "0vw",
        });
        timeline
            .to(beeRef.current, {
                scaleX: -1,
                duration: 0.1,
            })
            .to(
                beeRef.current,
                {
                    x: "-50vw",
                    duration: 2,
                },
                "<",
            );
        timeline.to(beeRef.current, {
            x: "-60vw",
        });
        timeline.to(beeRef.current, {
            x: "-90vw",
        });
    });
    return (
        <div>
            <div ref={beeContentRef} className="honeybee">
                <img
                    ref={beeRef}
                    className="h-[450px]"
                    src="./src/assets/bee.gif"
                    alt=""
                />
            </div>
        </div>
    );
};

export default BeeAnimation;
