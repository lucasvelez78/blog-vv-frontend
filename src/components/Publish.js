import { useState } from "react";

function Publicar() {
  const [publication, setPublication] = useState({
    title: "",
    content: "",
  });
  const [fileUpload, setFileUpload] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setPublication((prevPublication) => {
      return {
        ...prevPublication,
        [name]: value,
      };
    });
  }

  function handleFileInput(event) {
    console.log(event.target.files[0]);
    setFileUpload(event.target.files[0]);
  }

  return (
    <div>
      <form method="POST" action="/administrador" encType="multipart/form-data">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={publication.title}
            name="title"
            type="text"
            className="form-control"
            placeholder="título"
          />
        </div>
        <div className="form-group mb-1">
          <textarea
            onChange={handleChange}
            value={publication.content}
            name="content"
            className="form-control"
            placeholder="contenido"
            rows="4"
            id="form-content"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="file"
            value={fileUpload.filename}
            onChange={handleFileInput}
            className="form-control"
          />
        </div>
        <button type="submit" className="publicarBtn">
          Publicar
        </button>
      </form>
    </div>
  );
}

export default Publicar;
