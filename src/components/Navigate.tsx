import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateComp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/profile')}>Go to Your Path</button>
  );
};

export default NavigateComp;