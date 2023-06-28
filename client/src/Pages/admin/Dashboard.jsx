import React from 'react';
import AddFiles from './components/AddFiles'

const Dashboard = () => {

  return (
    <div className='my-5'>
      <h1 className='text-center text-white fs-2'>Tableau de bord</h1>
      <div className="container text-white">
        <div className="row mt-3">
          <AddFiles />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;