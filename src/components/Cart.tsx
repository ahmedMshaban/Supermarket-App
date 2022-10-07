import { useEffect, useState } from "react";
import { Button, Input } from "../components/ui";
import { loadStripe } from "@stripe/stripe-js";

interface Product {
  [key: string]: string | number;
}

interface Props {
  cart: Product[];
}

const stripe = await loadStripe(
  "pk_test_nIXm3FHhT48RBH1FjblNYaWg"
);



export const Cart: React.FC<Props> = ({ cart }) => {
  const [email, setEmail] = useState("");
  let totalCart = 0;

  useEffect(() => {
    if (email && cart.length > 0) {
      stripe
        ?.redirectToCheckout({
          lineItems: cart.map((product) => {
            return {
              price: product.price_id as string,
              quantity: product.quantity as number,
            };
          }),
          mode: "payment",
          successUrl: "https://ahmedmshaban.com/",
          cancelUrl: "https://ahmedmshaban.com/",
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    }
  }, [email]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (
      document.querySelector("form input") as HTMLInputElement
    ).value;
    setEmail(emailInput);
  };

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th data-width="25%" className="th-product">
                    Product
                  </th>
                  <th data-width="20%">Unit price</th>
                  <th data-width="10%">Quanity</th>
                  <th data-width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product: Product) => {
                  totalCart += +product.quantity * +product.price;
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          width="30"
                          height="30"
                          alt={product.name as string}
                          src={product.image as string}
                        />
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${+product.quantity * +product.price}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalCart}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Input
                autoComplete="email"
                placeholder="Email"
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  );
};