import Place from "./places";

const PlacesList = () => {
  return (
    <div className="grid mt-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
        <div className="col">
          <Place />
        </div>
      </div>
    </div>
  );
};

export default PlacesList;
