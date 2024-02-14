import React, { useEffect, useState } from 'react'
import CarouselPhara from './components/CarouselPhara'
import CarouselMusic from './components/CarouselMsuic'


import logo from './assets/logo_faraon.svg'
import bg from './assets/bg.png'
import hello_one from './assets/hello_one.png'
import hello_two from './assets/hello_two.png'
import heart from './assets/heart.png'

import photo_one from './assets/photo_one.png'
import photo_two from './assets/photo_two.png'
import photo_three from './assets/photo_three.png'
import Poster from './components/poster/Poster'


export default function App() {
  const [position, setPosition] = useState({ x: 100, y: 105 });


  const handleClick = () => {
    const xPos = Math.random() * (window.innerWidth - 200); // Ограничиваем максимальное значение, чтобы кнопка не уходила за край экрана
    const yPos = Math.random() * (window.innerHeight - 50); // Ограничиваем максимальное значение, чтобы кнопка не уходила за край экрана
    setPosition({ x: xPos, y: yPos });
  };


  const [page, setPage] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Проверяем, если page стал false
    if (!page) {
      // Устанавливаем таймер
      const timer = setTimeout(() => {
        // По завершению таймера меняем состояния страниц
        setShowPage(true); // Показываем страницу
        setPage(false); // Меняем состояние page
        setPageTwo(false); // Меняем состояние pageTwo
      }, 2000); // Через 5 секунд изменится состояние

      // Возвращаем функцию очистки для предотвращения утечек памяти
      return () => clearTimeout(timer);
    }
  }, [page]); // Добавляем зависимость от переменной page

  // Функция для изменения состояний page и pageTwo
  const decreaseCount = () => {
    setPage(false); // Меняем состояние page
    setPageTwo(true); // Меняем состояние pageTwo
  };

  const bodyBackgroundColor = showPage ? 'black' : 'white';

  // Изменяем стиль body напрямую
  document.body.style.backgroundColor = bodyBackgroundColor;

  return (
    <div className='container' >
      {page &&
        <div className='onebord'>
          <img className='bg' src={bg} alt='bg' />
          <div className='conent'>
            <img src={hello_one} alt='hello' />
            <h1>Будешь моей валентинкой?</h1>
            <div className='button'>
              <button onClick={decreaseCount}>Да</button>
              <button
                className="floating-button"
                style={{ left: position.x, top: position.y }}
                onClick={handleClick}>
                Нет
              </button>
            </div>
          </div>
        </div>
      }


      {
        pageTwo &&
        <div className='onebord'>
          <img className='bg' src={bg} alt='bg' />
          <div className='conent'>
            <img src={hello_two} alt='hello' />
            <h1>УРААА, СПАСИБО!!!</h1>
            <div className='heart'>
              <img src={heart} alt='heart' />
            </div>
          </div>
        </div>
      }


      {
        showPage &&
        <div className='container'>
          <img className='logo' src={logo} alt='logo' />
          <CarouselPhara />
          <div className='block_first_text'>
            <span className='first_text'>Где правили фараоны?</span>
            <span className='first_text'>А, где?</span>
            <span className='first_text'>В РУССКОМ РЭПЕ!!!</span>
          </div>
          <CarouselMusic />
          <div className='photo'>
            <img src={photo_one} alt='photo_one' />
            <span>Лучший рэпер PHARA<strong>ОН</strong></span>
            <img src={photo_two} alt='photo_two' />
            <span>Лучший рэпер PHARA<strong>ОН</strong></span>
            <img src={photo_three} alt='photo_three' />
            <span>Лучший рэпер PHARA<strong>ОН</strong></span>
          </div>
          <span className='line'></span>
          <Poster />
        </div>
      }
    </div >
  )
}
