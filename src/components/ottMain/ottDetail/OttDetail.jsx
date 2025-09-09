import './style.scss';
import { GoHeartFill, GoHeart } from 'react-icons/go';
import { IoShareSocial } from 'react-icons/io5';
import { MdReviews } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const OttDetail = () => {
    const location = useLocation();
    const video = location.state;
    return (
        <div className="detailWrap">
            <div className="horizon"></div>
            <div className="vertical"></div>
            <div className="bg">
                <img src={video.img} alt="" />
            </div>
            <section>
                <h2>{video.title}</h2>
                <ul className="inform">
                    <li>{video.release}</li>
                    <li>{video.genre}</li>
                    <li>{video.duration}</li>
                    <li>{video.rating}</li>
                </ul>
                <strong className="desc">{video.description}</strong>
                <ul className="buttons">
                    <li>
                        <MdReviews />
                    </li>
                    <li>
                        <IoShareSocial />
                    </li>
                    <li>
                        <GoHeart />
                        {/* <GoHeartFill /> */}
                    </li>
                </ul>
                <button>Play Now</button>
            </section>
            <div className="inner"></div>
        </div>
    );
};

export default OttDetail;
