import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Publicar() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let formdata = new FormData();
    for (let index in videos) {
      formdata.append("videos", videos[index]);
    }
    formdata.append("name", name);
    formdata.append("content", content);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/media/create`, formdata)
      .then((success) => {
        swal("video cargado :)");
        navigate("/posts");
      })
      .catch((error) => {
        console.log(error);
        swal("Error");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            className="form-control"
            placeholder="título"
          />
        </div>
        <div className="form-group mb-1">
          <textarea
            onChange={(e) => setContent(e.target.value)}
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
            name="videos"
            id="videos"
            onChange={(e) => setVideos(e.target.files)}
            className="form-control"
            accept=".mp4, .mkv"
            multiple
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
