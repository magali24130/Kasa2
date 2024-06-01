import "./Accomodation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../Data/Data";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Collapse from "../../Components/Collapse/Collapse";
import NotFound from "../NotFound/NotFound";
import Tag from "../../Components/Tag/Tag";
import Rating from "../../Components/Rating/Rating";

export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const { id } = useParams();
  const dataCurrentAccomodation = datas.find((data) => data.id === id);

  useEffect(() => {
    if (dataCurrentAccomodation) {
      setImageSlider(dataCurrentAccomodation.pictures);
    }
  }, [id, dataCurrentAccomodation]);

  if (!dataCurrentAccomodation) {
    return <NotFound />;
  }

  const name = dataCurrentAccomodation.host.name.split(" ");
  const rating = dataCurrentAccomodation.rating;
  const description = dataCurrentAccomodation.description;
  const equipments = dataCurrentAccomodation.equipments;

  return (
    <div className="accomodation_wrapper">
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation.title}</h1>
            <p>{dataCurrentAccomodation.location}</p>
            <div>
              {dataCurrentAccomodation.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation.host.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="accomodation_content_host_stars">
              <Rating rating={rating} />
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
