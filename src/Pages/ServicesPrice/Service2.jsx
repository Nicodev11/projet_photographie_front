import React from 'react';
import Services from '../../Components/Services';
import Button from '../../Components/Button';

const Service2 = () => {

  return (
    <div>
      <Services serviceNumber={1} />
      <Button left={"/prestation-1"} right={"/prestation-3"}/>
    </div>
  );
};

export default Service2;