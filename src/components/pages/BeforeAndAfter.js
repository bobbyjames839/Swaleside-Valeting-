import { useState } from 'react';
import { Img } from 'react-image';
import '../styles/other_styling/BeforeAfter.css';
import before1 from '../images/beforeafter/before5.webp';
import after1 from '../images/beforeafter/after5.webp';
import before2 from '../images/beforeafter/before7.webp';
import after2 from '../images/beforeafter/after7.webp';
import before3 from '../images/beforeafter/before1.webp';
import after3 from '../images/beforeafter/after1.webp';
import before4 from '../images/beforeafter/before2.webp';
import after4 from '../images/beforeafter/after2.webp';
import before5 from '../images/beforeafter/before3.webp';
import after5 from '../images/beforeafter/after3.webp';
import before6 from '../images/beforeafter/before4.webp';
import after6 from '../images/beforeafter/after4.webp';
import before7 from '../images/beforeafter/before6.webp';
import after7 from '../images/beforeafter/after6.webp';
import before8 from '../images/beforeafter/before8.webp';
import after8 from '../images/beforeafter/after8.webp';
import before9 from '../images/beforeafter/before9.webp';
import after9 from '../images/beforeafter/after9.webp';
import before10 from '../images/beforeafter/before10.webp';
import after10 from '../images/beforeafter/after10.webp';

export const BeforeAndAfter = () => {

  const BeforeAfter = ({ name, image1, image2 }) => {
    const [before, setBefore] = useState(true);

    const toggleView = () => {
      setBefore(!before);
    }

    return (
      <div className='before_after_item'>
        <h3 className='before_after_title'>{name}</h3>
        <Img
          className={`before_after_image before`}
          src={image1}
          alt="Before"
          style={{ clipPath: before ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)' }}
          loader={<div>Loading...</div>}
          unloader={<div>Error loading image</div>}
        />
        <Img
          className={`before_after_image after`}
          src={image2}
          alt="After"
          style={{ clipPath: before ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)' }}
          loader={<div>Loading...</div>}
          unloader={<div>Error loading image</div>}
        />
        <button className='view_toggle' onClick={toggleView}>
          {before ? 'View After' : 'View Before'}
        </button>
      </div>
    );
  };

  return (
    <div className="before_and_after_page">
      <div className='before_after_open'>
        <h1 className='section_title'>Before and after</h1>
        <h3 className='section_subtitle'>Transforming Vehicles, One Detail at a Time</h3>
      </div>

      <div className='before_after_inner'>
        <BeforeAfter name='Mercedes CLA35 AMG' image1={before1} image2={after1} />
        <BeforeAfter name='Lotus' image1={before10} image2={after10} />
        <BeforeAfter name='Range Rover' image1={before2} image2={after2} />
        <BeforeAfter name='Ford Fiesta' image1={before3} image2={after3} />
        <BeforeAfter name='VW Crafter Van' image1={before4} image2={after4} />
        <BeforeAfter name='Fiat Autotrail Van' image1={before5} image2={after5} />
        <BeforeAfter name='Land Rover Freelander' image1={before6} image2={after6} />
        <BeforeAfter name='Land Rover Defender 110' image1={before7} image2={after7} />
        <BeforeAfter name='DAF Truck' image1={before8} image2={after8} />
        <BeforeAfter name='VW Transporter' image1={before9} image2={after9} />
      </div>
    </div>
  );
};
