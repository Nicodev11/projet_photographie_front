import React from 'react';
import Services from '../../Components/Services';
import Button from '../../Components/Button';

const Services4 = () => {
  return (
    <div>
      <Services serviceNumber={3} />
      <Button left={"/prestation-3"} right={"/prestation-5"}/>
    </div>
  );
};

export default Services4;