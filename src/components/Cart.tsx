interface Product {
  [key: string]: string | number;
}

interface Props {
  cart: Product[];
}

export const Cart: React.FC<Props> = ({ cart }) => {
  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
          <table className="table table-cart">
            <thead>
              <tr>
                <th width="25%" className="th-product">
                  Product
                </th>
                <th width="20%">Unit price</th>
                <th width="10%">Quanity</th>
                <th width="25%">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img width="30" height="30" alt="" />
                  NAME
                </td>
                <td>$PRICE</td>
                <td>QUANTITY</td>
                <td>
                  <strong>$TOTALPRICE</strong>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
                <th className="cart-highlight">Total</th>
                <th className="cart-highlight">$TOTALCART</th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  );
};
