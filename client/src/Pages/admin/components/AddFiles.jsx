import React, { useState } from "react";
import axios from "axios";

const AddFiles = () => {
  const categories = [
    { id: 1, name: "Bébé" },
    { id: 2, name: "Couple" },
    { id: 3, name: "Evènement" },
    { id: 4, name: "Famille" },
    { id: 5, name: "Grossesse" },
    { id: 6, name: "Seul" },
  ];

  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState();


  const handlePost = async (e) => {
    e.preventDefault();

    if(postPicture && file) {
      const data = new FormData(
        document.querySelector('form'),
        document.querySelector('.btn')
      );

      await axios({
        url: `http://localhost:5000/api/image/`,
        method: "POST",
        data: data,
      })

      removeform();
      
    } else {
      console.log("error");
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    document.querySelector('.img').classList.add('img-thumbnail');
  };

  const removeform = () => {
    setPostPicture(null);
    setFile(null);
    document.querySelector('.img').classList.remove('img-thumbnail');
  };

  return (
    <div>
      <div className="col-12 col-md-6 col-lg-4 rounded border border-success p-3 bg-dark">
        <h3 className="text-white fs-4 text-center">Ajouter une image</h3>
        <form method="post">
          <div className="my-3">
            <select name='category' className="form-select">
            {
              categories.map((category) => (
                <option  value={category.name}>{category.name}</option>
              ))
            }
            </select>
          </div>
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Choisissez votre image
            </label>
            <input onChange={(e) => handlePicture(e) } className="form-control" type="file" id="formFile" name="file" accept=".jpg, .jpeg, .png" />
          </div>
            <img src={postPicture} className="img" alt="" />
            <button onClick={handlePost} className="btn btn-success w-100 mt-3">
              Valider
            </button>
        </form>
      </div>
    </div>
  );
};

export default AddFiles;
