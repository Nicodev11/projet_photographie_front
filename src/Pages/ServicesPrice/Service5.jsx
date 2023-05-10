import React from 'react';
import Services from '../../Components/Services';
import Button from '../../Components/Button';

const Service5 = () => {
  return (
    <div>
      <Services serviceNumber={4} />
      <Button left={"/prestation-4"} right={"/prestation-6"}/>
    </div>
  );
};

export default Service5;