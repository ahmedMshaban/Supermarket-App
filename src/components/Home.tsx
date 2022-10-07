import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="home-layout">
      <div>
        <h1>Feel Better. Do More!</h1>
        <p>
          Orange Insoles, we can help you reduce pain and increase performance.
        </p>
        <Link to="/products" className="btn btn-default">
          Buy Now
        </Link>
      </div>
      <img
        src="home-banner.gif"
        width="350"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
};
