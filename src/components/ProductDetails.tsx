import { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import { Loader } from "../components/ui";
import { useParams, NavLink, Switch, Route } from "react-router-dom";
import {
  ProductDetailInfo,
  ProductDetailSpecs,
  ProductDetailDelivery,
} from ".";

interface Params {
  id?: string;
}

interface Details {
  description: string;
  delivery: string;
  specs: { materials: string; gender: string; athletic: string };
  details: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
}

interface Props {
  onProductAdd: (params: { [key: string]: string | number }) => void;
}

export const ProductDetails: React.FC<Props> = ({ onProductAdd }) => {
  const { id } = useParams<Params>();
  const [details, setDetails] = useState<Details | null>(null);
  const { get, loading } = useFetch(
    "https://orangeinsoles-c0976-default-rtdb.firebaseio.com/"
  );

  useEffect(() => {
    get<Details>(`products/${id}.json`)
      .then((data) => {
        if (data) {
          setDetails(data);
        }
      })
      .catch(() => {
        console.error("Could't retrive the product details.");
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    details && (
      <div className="product-details-layout">
        <div>
          <h2>{details.name}</h2>
          <img
            width="125"
            height="125"
            className="product-details-image"
            alt={details.name}
            src={details.image}
          />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <NavLink
                  exact
                  to={`/products/${id}`}
                  activeClassName="tab-active"
                >
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/products/${id}/specs`}
                  activeClassName="tab-active"
                >
                  Specs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/products/${id}/delivery`}
                  activeClassName="tab-active"
                >
                  Delivery
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path={`/products/${id}`}>
              <ProductDetailInfo
                details={details.details}
                price={details.price}
                name={details.name}
                id={details.id}
                image={details.image}
                price_id={details.price_id}
                onProductAdd={onProductAdd}
              />
            </Route>
            <Route exact path={`/products/${id}/specs`}>
              <ProductDetailSpecs specs={details.specs} />
            </Route>
            <Route exact path={`/products/${id}/delivery`}>
              <ProductDetailDelivery delivery={details.delivery} />
            </Route>
          </Switch>
        </div>
      </div>
    )
  );
};
