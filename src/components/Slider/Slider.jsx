import { useState, useEffect } from 'react';
import { IconButton, PlayButton, Indicator } from "../Buttons/Buttons";
import './style.scss';

const Slider = ({ data }) => {
    const [activeId, setActiveId] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    
const prev = () => {
    if (activeId > 0) {
        setActiveId(activeId - 1);      
        } 
    };

const next = () => {
if (activeId < data.length - 1) {
    setActiveId(activeId + 1);
    } else {
        setActiveId(0); 
    }
};

useEffect(() => {
    const timer = setInterval(() => {
        if (isPlaying) {
            next(); 
        }
    }, 5000); 

    return () => {
        clearTimeout(timer); 
    };
}, [activeId, isPlaying]);

    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
    };

    const handleIndicatorClick = (index) => {
        setActiveId(index);
    };

    return (
        <div className="slider-wrap">
            <div className="slider-actions">
                <IconButton
                    direction="left"
                    onClick={prev}
                    disable={activeId === 0}
                />

                <PlayButton
                    active={isPlaying ? "active" : ""}
                    disable={false}
                    onClick={togglePlaying}
                />

                <IconButton
                    direction="right"
                    onClick={next}
                    disable={activeId === data.length - 1}
                />
            </div>
            
            <div className="slider">
                {data.map((slide, idx) => (
                    <div
                    key={idx}
                    className={`slide${idx === activeId ? " active" : ""}`}
                    >
                    <div className="slide__info">
                        <div className="slide__name">{slide.name}</div>
                        <div className="slide__text">{slide.text}</div>
                    </div>
                    <img src={slide.img} alt={`Slide ${idx + 1}`} />
                    </div>
                ))}
            </div>

            <div className="slide-indicators">
                {data.map((slide, idx) => (
                    <Indicator
                    key={idx}
                    active={idx === activeId ? "active" : ""}
                    onClick={handleIndicatorClick}
                    index={idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;