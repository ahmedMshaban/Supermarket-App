import { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import { Loader } from "../components/ui";
import { useParams, NavLink, Switch, Route } from "react-router-dom";
import {
  ProductDetailInfo,
  ProductDetailNutrition,
  ProductDetailStorage,
} from ".";

interface Params {
  id?: string;
}

interface Details {
  description: string;
  id: number;
  image: string;
  name: string;
  nutrition: {
    carbs: number;
    fat: number;
    protein: number;
    salt: number;
  };
  price: number;
  price_id: string;
  storage: string;
}

interface Props {
  onProductAdd: ({
    name,
    id,
    image,
    price,
    price_id,
    quantity,
  }: {
    name: string;
    id: number;
    image: string;
    price: number;
    price_id: string;
    quantity: number
  }) => void;
}

export const ProductDetails: React.FC<Props> = ({ onProductAdd }) => {
  const { id } = useParams<Params>();
  const [details, setDetails] = useState<Details | null>(null);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get<Details>(`productinfo/id${id}.json`)
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
                  to={`/products/${id}/nutrition`}
                  activeClassName="tab-active"
                >
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/products/${id}/storage`}
                  activeClassName="tab-active"
                >
                  Storage
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path={`/products/${id}`}>
              <ProductDetailInfo
                description={details.description}
                price={details.price}
                name={details.name}
                id={details.id}
                image={details.image}
                price_id={details.price_id}
                onProductAdd={onProductAdd}
              />
            </Route>
            <Route exact path={`/products/${id}/nutrition`}>
              <ProductDetailNutrition nutrition={details.nutrition} />
            </Route>
            <Route exact path={`/products/${id}/storage`}>
              <ProductDetailStorage storage={details.storage} />
            </Route>
          </Switch>
        </div>
      </div>
    )
  );
};
