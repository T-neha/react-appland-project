import React from 'react';

const FeatureBox = (props) => {
  return (
    <div className='a-box'>
      
        <div className='a-b-img'>
            <img src={props.image} alt=""/>


        </div>
        <div className='s-b-text'>
            <h4>{props.title}</h4>
            <p>Lorem ipsum dolor sit, amet cacere labore, perferendis natus ea eos perspiciatis accusamus distinctio!</p>
        </div>
      
    </div>
  )
}

export default FeatureBox;
