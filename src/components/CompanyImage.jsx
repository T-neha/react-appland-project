import React from 'react';
import CompanyName from './CompanyName';
import featureimage from '../images/company1.png';
import featureimage1 from '../images/company2.png';
import featureimage2 from '../images/company3.png';
import featureimage3 from '../images/company4.png';
import featureimage4 from '../images/company5.png';



const Feature = () => {
  return (
    <div id="featues">
         <h5 style={{textAlign:'center'}}>Trusted by companies like</h5>
      <div className='a-container'>
     
        <CompanyName image={featureimage} title=''/>
        <CompanyName image={featureimage1} title=''/>
        <CompanyName image={featureimage2} title=''/>
        <CompanyName image={featureimage3} title=''/>
        <CompanyName image={featureimage4} title=''/>

      </div>
    </div>
  )
}

export default Feature
