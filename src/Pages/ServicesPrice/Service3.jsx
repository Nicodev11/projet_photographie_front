import React from 'react';
import Services from '../../Components/Services';
import Button from '../../Components/Button';

const Service3 = () => {
  return (
    <div>
      <Services serviceNumber={2} />
      <Button left={"/prestation-2"} right={"/prestation-4"}/>
    </div>
  );
};

export default Service3;