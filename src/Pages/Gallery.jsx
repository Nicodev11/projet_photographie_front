import React, { useState } from 'react';
import { imagesData } from '../data/imagesData'
import Card from '../Components/Card';

const Gallery = () => {

  const [selectedRadioService, setSelectedRadioService] = useState("");
  const radios = ['Juste moi', 'Pour deux', 'Famille', 'Il était une fois', 'Mon bébé', 'Evénements']

  return (
    <div>
      <div className="container mt-3 bg-dark rounded p-2 border border-dark-subtle d-flex flex-md-row mb-3 flex-column justify-content-around">
      {radios.map((categories) => (
        <div class="form-check form-check-inline text-white d-flex justify-content-center mb-2">
          <input class="form-check-input me-2" type="radio" id={categories} checked={categories === selectedRadioService} onChange={(e) => setSelectedRadioService(e.target.id)} />
          <label class="form-check-label " for={categories}> {categories} </label>
        </div>
      ))}
      </div>
      <div className="row">
        {imagesData
        .filter((categories) => categories.name.includes(selectedRadioService))
        .map((images, index) => (
          <div className="col-md-6 col-lg-3 d-flex justify-content-center">
            <Card key={index} images={images} />
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Gallery;