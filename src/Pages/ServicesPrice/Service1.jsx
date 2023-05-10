import React from 'react';
import Services from '../../Components/Services';
import Button from '../../Components/Button';

const Service1 = () => {
  return (
    <div>
      <Services serviceNumber={0} />
      <Button right={"/prestation-2"}/>
    </div>
  );
};

export default Service1;