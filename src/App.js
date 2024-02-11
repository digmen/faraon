import React from 'react';
import './index.css';
import logo from './assets/logo_faraon.svg';
import photo_one from './assets/photo_one.png'
import photo_two from './assets/photo_two.png'
import photo_three from './assets/photo_three.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, FreeMode, Autoplay } from 'swiper/modules';


import poster_one from './assets/poster/photo_onecvbcvbcvbcv.png'
import poster_2 from './assets/poster/photo_onecvbcvbvcb.png'
import poster_3 from './assets/poster/photo_onedfdf.png'
import poster_4 from './assets/poster/photo_onedfgdfgd.png'
import poster_5 from './assets/poster/photo_onedfgdfgdf.png'
import poster_6 from './assets/poster/photo_onedfgdfgdfg.png'
import poster_7 from './assets/poster/photo_onedsfsdfs.png'
import poster_8 from './assets/poster/photo_oneewe.png'
import poster_9 from './assets/poster/photo_onefdsfsd.png'
import poster_10 from './assets/poster/photo_onefsdfds.png'
import poster_11 from './assets/poster/photo_onefsdfs.png'
import poster_12 from './assets/poster/photo_onegdgdfgdf.png'
import poster_13 from './assets/poster/photo_onesdf.png'
import poster_14 from './assets/poster/photo_onesdfsdf.png'
import poster_15 from './assets/poster/photo_onewe.png'
import poster_17 from './assets/poster/photo_onewew.png'
import poster_18 from './assets/poster/photo_onewewae.png'
import poster_19 from './assets/poster/photo_three.png'
import poster_20 from './assets/poster/photo_two.png'

export default function App() {
  return (
    <div className='container'>
      <img className='logo' src={logo} alt='logo' />
      <div className='slider_one'>
        <Swiper
          mousewheel={true}
          slidesPerView={10}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Autoplay, FreeMode]}
        >
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_one'>PHARAОН</div></SwiperSlide>
        </Swiper>
      </div>

      <div className='text_one'>
        <span className='title_one'>
          Где правили фараоны?
        </span>
        <span>
          А, где?
        </span>
        <span className='red'>
          В РУССКОМ РЭПЕ!!!
        </span>
      </div>


      <div className='slider_two'>
        <Swiper
          mousewheel={true}
          slidesPerView={10}
          spaceBetween={0}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Autoplay, FreeMode]}
        >
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
          <SwiperSlide><div className='slider_block_two'>Музыка</div></SwiperSlide>
        </Swiper>
      </div>


      <div className='photo_block'>
        <img src={photo_one} alt='photo_one' />
        <span className='text_photo'>Лучший рэпер PHARA<strong>ОН</strong></span>
        <img src={photo_two} alt='photo_two' />
        <span className='text_photo'>Лучший рэпер PHARA<strong>ОН</strong></span>
        <img src={photo_three} alt='photo_three' />
        <span className='text_photo'>Лучший рэпер PHARA<strong>ОН</strong></span>
      </div>

      <span className='line'></span>

      <div className='poster'>
        <div className='poster_one'>
          <img className='poster_photo_one' src={poster_one} alt='poster' />
        </div>
        <div className='poster_two'>
          <img className='poster_photo_two' src={poster_2} alt='poster' />
        </div>
        <div className='poster_three'>
          <img className='poster_photo_three' src={poster_3} alt='poster' />
        </div>
        <div className='poster_four'>
          <img className='poster_photo_four' src={poster_4} alt='poster' />
        </div>
        <div className='poster_five'>
          <img className='poster_photo_five' src={poster_5} alt='poster' />
        </div>
        <div className='poster_six'>
          <img className='poster_photo_six' src={poster_6} alt='poster' />
        </div>
        <div className='poster_seven'>
          <img className='poster_photo_seven' src={poster_7} alt='poster' />
        </div>
        <div className='poster_eight'>
          <img className='poster_photo_eight' src={poster_8} alt='poster' />
        </div>
        <div className='poster_nine'>
          <img className='poster_photo_nine' src={poster_9} alt='poster' />
        </div>
        <div className='poster_ten'>
          <img className='poster_photo_ten' src={poster_10} alt='poster' />
        </div>
        <div className='poster_eleven'>
          <img className='poster_photo_eleven' src={poster_11} alt='poster' />
        </div>
        <div className='poster_twelve'>
          <img className='poster_photo_twelve' src={poster_12} alt='poster' />
        </div>
        <div className='poster_thirteen'>
          <img className='poster_photo_thirteen' src={poster_13} alt='poster' />
        </div>
        <div className='poster_fourteen'>
          <img className='poster_photo_fourteen' src={poster_14} alt='poster' />
        </div>
        <div className='poster_fifteen'>
          <img className='poster_photo_fifteen' src={poster_15} alt='poster' />
        </div>
        <div className='poster_sixteen'>
          <img className='poster_photo_sixteen' src={poster_17} alt='poster' />
        </div>
        <div className='poster_seventeen'>
          <img className='poster_photo_seventeen' src={poster_18} alt='poster' />
        </div>
        <div className='poster_eighteen'>
          <img className='poster_photo_eighteen' src={poster_19} alt='poster' />
        </div>
        <div className='poster_nineteen'>
          <img className='poster_photo_nineteen' src={poster_20} alt='poster' />
        </div>
      </div>
    </div>
  );
}
