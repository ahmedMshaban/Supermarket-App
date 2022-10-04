interface Product {
  [key: string]: string | number;
}

interface Props {
  cart: Product[];
}

export const Cart: React.FC<Props> = ({ cart }) => {
  let totalCart = 0;
  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
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
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  );
};
