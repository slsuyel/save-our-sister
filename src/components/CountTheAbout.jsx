/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CountTheAbout = ({ targetNumber, label, duration }) => {
    const [count, setCount] = useState(0); // Start from 0

    useEffect(() => {
        const intervalDuration = 1; // Change to 1000ms for 1 second intervals


        const totalIntervals = Math.ceil(duration / intervalDuration);
        const incrementPerInterval = targetNumber / totalIntervals;

        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + incrementPerInterval;
                return newCount <= targetNumber ? newCount : targetNumber;
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return (
        <div className="about-work py-4 col-6 col-md-3 col-sm-6 p-3 text-center">
            <span className="fs-1 number text-warning">{Math.round(count)}+ </span>
            <br />
            <span style={{ fontSize: 16 }}>{label}</span>
        </div>
    );
};

export default CountTheAbout;
