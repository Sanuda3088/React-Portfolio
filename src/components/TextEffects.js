import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './TextEffects.css';

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        'Problem Solver',
        1500,
        'Mobile App Developer',
        1500,
        'Web Developer',
        1500,
        'Fullstack Developer',
        1500
      ]}
      speed={50}
      className='type-animation'
      repeat={Infinity}
    />
  );
};

export default TextEffects;
