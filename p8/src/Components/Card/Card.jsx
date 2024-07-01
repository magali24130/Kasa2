import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/Accomodation/${id}`} className="gallery_card">
      <img src={cover} alt={"Kasa -" + title} />
      <h3>{title}</h3>
    </Link>
  );
}
