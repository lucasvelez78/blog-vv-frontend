import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  return (
    <div className="loader">
      <BeatLoader color="#7a4495" loading={true} />
    </div>
  );
}

export default Loader;
