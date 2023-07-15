import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/first.png';
import featureimage1 from '../images/second.png';
import featureimage2 from '../images/third.png';


const Feature = () => {
  return (
    <div id="features">
      <div className='a-container'>
        <FeatureBox image={featureimage} title='Automatic Payouts'/>
        <FeatureBox image={featureimage1} title='Network Effect'/>
        <FeatureBox image={featureimage2} title='Bigger Rewards Method'/>

      </div>
    </div>
  )
}

export default Feature;
