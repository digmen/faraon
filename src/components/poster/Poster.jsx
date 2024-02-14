import React, { useState } from 'react';
import './poster.css'

// Импортируйте все изображения
import poster_photo_one from '../../assets/poster/photo_onecvbcvbcvbcv.png';
import poster_photo_two from '../../assets/poster/photo_onecvbcvbvcb.png';
import poster_photo_three from '../../assets/poster/photo_onedfdf.png';
import poster_photo_four from '../../assets/poster/photo_onedfgdfgd.png';
import poster_photo_five from '../../assets/poster/photo_onedfgdfgdf.png';
import poster_photo_six from '../../assets/poster/photo_onedfgdfgdfg.png';
import poster_photo_seven from '../../assets/poster/photo_onedsfsdfs.png';
import poster_photo_eight from '../../assets/poster/photo_oneewe.png';
import poster_photo_nine from '../../assets/poster/photo_onefdsfsd.png';
import poster_photo_ten from '../../assets/poster/photo_onefsdfds.png';
import poster_photo_eleven from '../../assets/poster/photo_onefsdfs.png';
import poster_photo_twelve from '../../assets/poster/photo_onegdgdfgdf.png';
import poster_photo_fourteen from '../../assets/poster/photo_onesdfsdf.png';
import poster_photo_fifteen from '../../assets/poster/photo_onewe.png';
import poster_photo_sixteen from '../../assets/poster/photo_onewew.png';
import poster_photo_seventeen from '../../assets/poster/photo_onewewae.png';
import poster_photo_eighteen from '../../assets/poster/photo_three.png';
import poster_photo_nineteen from '../../assets/poster/photo_two.png';


import audio_photo_one from '../../sounds/audioone.mp3';
import audio_photo_two from '../../sounds/audio_two.mp3';
import audio_photo_three from '../../sounds/audio_three.mp3';
import audio_photo_four from '../../sounds/audio_four.mp3';
import audio_photo_five from '../../sounds/audio_five.mp3';
import audio_photo_six from '../../sounds/audio_six.mp3';
import audio_photo_seven from '../../sounds/audio_seven.mp3';
import audio_photo_eight from '../../sounds/audio_eight.mp3';
import audio_photo_nine from '../../sounds/audio_nine.mp3';
import audio_photo_ten from '../../sounds/audio_ten.mp3';
import audio_photo_eleven from '../../sounds/audio_eleven.mp3';
import audio_photo_twelve from '../../sounds/audio_twelve.mp3';
import audio_photo_fourteen from '../../sounds/audio_fourteen.mp3';
import audio_photo_fifteen from '../../sounds/audio_fifteen.mp3';
import audio_photo_sixteen from '../../sounds/audio_sixteen.mp3';
import audio_photo_seventeen from '../../sounds/audio_seventeen.mp3';
import audio_photo_eighteen from '../../sounds/audio_eighteen.mp3';
import audio_photo_nineteen from '../../sounds/audio_nineteen.mp3';


function Poster() {
    const [imageData, setImageData] = useState({
        poster_photo_one: { text: 'PHARAOH & i61 - RAGE MODE', clicked: false },
        poster_photo_two: { text: 'PHARAOH — «PHOSPHOR» 2016', clicked: false },
        poster_photo_three: { text: 'PHARAOH - DOLOR 2015', clicked: false },
        poster_photo_four: { text: 'PHARAOH - На Луне', clicked: false },
        poster_photo_five: { text: 'ЛСП & PHARAOH - Кондитерская', clicked: false },
        poster_photo_six: { text: 'PHARAOH - PHUNERAL', clicked: false },
        poster_photo_seven: { text: '2023 PHREQUENCY', clicked: false },
        poster_photo_eight: { text: 'GHOSTEMANE & PHARAOH - Blood Oceans (How Many?)', clicked: false },
        poster_photo_nine: { text: 'PHARAOH & BOULEVARD DEPO - Плакшери 2016', clicked: false },
        poster_photo_ten: { text: 'PHARAOH - Флора | PHLORA 2014', clicked: false },
        poster_photo_eleven: { text: 'PHARAOH - УАДЖЕТ', clicked: false },
        poster_photo_twelve: { text: 'PHARAOH - Pink Phloyd 2017', clicked: false },
        poster_photo_fourteen: { text: '2022 PHILARMONIA', clicked: false },
        poster_photo_fifteen: { text: 'PHARAOH - ПРАВИЛО', clicked: false },
        poster_photo_sixteen: { text: 'PHARAOH - Не по пути', clicked: false },
        poster_photo_seventeen: { text: 'PHARAOH — Узы Моба', clicked: false },
        poster_photo_eighteen: { text: 'PHARAOH - Million Dollar Depression', clicked: false },
        poster_photo_nineteen: { text: 'PHARAOH feat. Mnogoznaal - Акид', clicked: false },
    });

    // Массив изображений
    const images = [
        { src: poster_photo_one, key: 'poster_photo_one', audioKey: audio_photo_one },
        { src: poster_photo_two, key: 'poster_photo_two', audioKey: audio_photo_two },
        { src: poster_photo_three, key: 'poster_photo_three', audioKey: audio_photo_three },
        { src: poster_photo_four, key: 'poster_photo_four', audioKey: audio_photo_four },
        { src: poster_photo_five, key: 'poster_photo_five', audioKey: audio_photo_five },
        { src: poster_photo_six, key: 'poster_photo_six', audioKey: audio_photo_six },
        { src: poster_photo_seven, key: 'poster_photo_seven', audioKey: audio_photo_seven },
        { src: poster_photo_eight, key: 'poster_photo_eight', audioKey: audio_photo_eight },
        { src: poster_photo_nine, key: 'poster_photo_nine', audioKey: audio_photo_nine },
        { src: poster_photo_ten, key: 'poster_photo_ten', audioKey: audio_photo_ten },
        { src: poster_photo_eleven, key: 'poster_photo_eleven', audioKey: audio_photo_eleven },
        { src: poster_photo_twelve, key: 'poster_photo_twelve', audioKey: audio_photo_twelve },
        { src: poster_photo_fourteen, key: 'poster_photo_fourteen', audioKey: audio_photo_fourteen },
        { src: poster_photo_fifteen, key: 'poster_photo_fifteen', audioKey: audio_photo_fifteen },
        { src: poster_photo_sixteen, key: 'poster_photo_sixteen', audioKey: audio_photo_sixteen },
        { src: poster_photo_seventeen, key: 'poster_photo_seventeen', audioKey: audio_photo_seventeen },
        { src: poster_photo_eighteen, key: 'poster_photo_eighteen', audioKey: audio_photo_eighteen },
        { src: poster_photo_nineteen, key: 'poster_photo_nineteen', audioKey: audio_photo_nineteen },
    ];


    const [audio, setAudio] = useState(null);

    const playSound = (path) => {
        const audio = new Audio(path);
        audio.play();
        setAudio(audio); // Устанавливаем аудио для дальнейшего управления
    };

    const handleClick = (imageKey, audioKey) => {
        const isClicked = imageData[imageKey].clicked;
        const updatedData = { ...imageData };
        updatedData[imageKey].clicked = !isClicked;
        setImageData(updatedData);

        if (isClicked) {
            stopSound();
        } else {
            const audioPath = audioKey;
            playSound(audioPath);
        }
    };

    const stopSound = () => {
        if (audio && !audio.paused) {
            audio.pause();
        }
    };

    return (
        <div className='block_poster' style={{ position: 'relative' }}>
            <span>Нажми на фото)))</span>
            {images.map((image, index) => (
                <div key={index} className='poster'>
                    <img
                        src={image.src}
                        alt={`Poster ${index + 1}`}
                        onClick={() => handleClick(image.key, image.audioKey)}
                        className={imageData[image.key].clicked ? 'clicked' : ''}
                    />
                    {imageData[image.key].clicked && (
                        <div className='text-overlay'>
                            <p>{imageData[image.key].text}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Poster;
