import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

const Gallery = () => {
  const [selectedRadioService, setSelectedRadioService] = useState("");
  const radios = [
    "Seul",
    "Couple",
    "Famille",
    "Grossesse",
    "Bébé",
    "Evènement",
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}api/image/`,
      );
      setImages(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-3 bg-dark rounded p-2 border border-dark-subtle d-flex flex-md-row mb-3 flex-column justify-content-around">
        {radios.map((categories) => (
          <div class="form-check form-check-inline text-white d-flex justify-content-center mb-2">
            <input
              class="form-check-input me-2"
              type="radio"
              id={categories}
              checked={categories === selectedRadioService}
              onChange={(e) => setSelectedRadioService(e.target.id)}
            />
            <label class="form-check-label " for={categories}>
              {categories}
            </label>
          </div>
        ))}
      </div>
      <div className="row m-0">
          {
            images
            .filter((image) => image.category.includes(selectedRadioService))
            .map((image, index) => (
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <Card key={index} image={image} />
            </div>
            ))
          }
      </div>
    </div>
  );
};

export default Gallery;
