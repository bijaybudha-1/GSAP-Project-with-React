import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import { useRef, useState } from "react";

function App() {
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const randomXValue = gsap.utils.random(-500, 500, 100);
    const randomYValue = gsap.utils.random(-400, 400, 100);
    const circleRef = useRef();
    

    useGSAP(() => {
        gsap.to(circleRef.current, {
            x: xValue,
            y: yValue,
            duration: 1,
            delay: .5,
        })
    }, [xValue, yValue])
    return (
        <div className="container">
            <div className="content-1">
                <div ref={circleRef} className="circle"></div>
            </div>
            <button onClick={() => {setXValue(randomXValue), setYValue(randomYValue)}}>Animate Circle</button>
        </div>
    );
}

export default App;
