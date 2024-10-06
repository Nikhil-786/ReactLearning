

const RestaurantDetails = (props) => {
    const { resName } = props;
  
    return (
      <div className="reDetails">
        {" "}
        <img src={resName?.info.image.url} alt="" />
        <h2>{resName.info.name}</h2>
        <p>{resName.info.cuisine[0].name}</p>
        <h3>{resName.info.rating.rating_text}</h3>
        <h3>{resName.info.cft.text}</h3>
      </div>
    );
  };
export default RestaurantDetails;  