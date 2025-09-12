// IntroSlider.jsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import './style.scss';
import ottMovieData from '../../api/ottMovieData';

const OttMainVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const items = slider.querySelectorAll('.item');
        if (direction === 'next') {
            slider.appendChild(items[0]);
        } else if (direction === 'prev') {
            slider.prepend(items[items.length - 1]);
        }
    };

    const onClick = (video) => {
        navigate('/ottDetail', { state: video });
    };
    return (
        <main className="intro-slider">
            {/* {slides.map((video, index) => (
                <div
                    key={index}
                    className="background-video"
                    style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
                />
            ))} */}

            <ul className="slider" ref={sliderRef}>
                {ottMovieData.slice(0, 5).map((video, index) => (
                    <li
                        className="item"
                        key={index}
                        style={{ backgroundImage: `url(${video.img})` }}
                    >
                        <div className="content">
                            <h2 className="title">{video.title}</h2>
                            <div className="texts">
                                <ul className="inform">
                                    <li>{video.release}</li>
                                    <li>{video.genre}</li>
                                    <li>{video.duration}</li>
                                    <li>
                                        <strong>★ {video.rating}</strong>
                                    </li>
                                </ul>
                                <p className="description">{video.description}</p>
                                <button onClick={() => onClick(video)}>MORE</button>
                            </div>
                        </div>
                        <button onClick={() => onClick(video)}>MORE</button>
                    </li>
                ))}
            </ul>

            <nav className="navBtn">
                {/* <IoArrowBackOutline className="btn prev" onClick={() => handleClick('prev')} /> */}
                <IoArrowForwardOutline className="btn next" onClick={() => handleClick('next')} />
            </nav>
        </main>
    );
};

export default OttMainVisual;
