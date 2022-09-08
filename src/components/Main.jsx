
const Main = () => {
    return (  
    <>
      <div className="headers">
        <h1>News</h1>
      </div>
      <div className="square-container">
        <div className="square top-right">
          <img
            src="https://vandergragt.eu/Michiel_2.jpg"
            alt=""
          />
          <div className="item-info headers">
            <div className="align-left">
              <h3 className="item-name">Vit Stråhatt</h3>
              <h4 className="price">299:-</h4>
            </div>
            <button>köp</button>
          </div>
        </div>

        <div className="square top-right">
          <img
            src="https://vandergragt.eu/filip_2.jpg"
            alt=""
          />
          <div className="item-info headers">
            <div className="align-left">
              <h3 className="item-name">Solglasögon</h3>
              <h4 className="price">599 SEK</h4>
            </div>
            <button>köp</button>
          </div>
        </div>

        <div className="square top-right">
          <img
            src="https://vandergragt.eu/Michiel_1.jpg"
            alt=""
          />
          <div className="item-info headers">
            <div className="align-left">
              <h3 className="item-name">Dödskalle Tröja</h3>
              <h4 className="price">799 SEK</h4>
            </div>
            <button>köp</button>
          </div>
        </div>

        <div className="square top-right">
          <img
            src="https://vandergragt.eu/filip_1.jpg"
            alt=""
          />
          <div className="item-info headers">
            <div className="align-left">
              <h3 className="item-name">Småhäftig Jacka</h3>
              <h4 className="price">1299 SEK</h4>
            </div>
            <button>köp</button>
          </div>
        </div>
      </div>
      <h3 className="car-header text-center">Get inspired and share your style. #coolfashionstyles <br /> <i className="fa-brands fa-instagram"></i></h3>
  
    </>
    );
}
 
export default Main;
