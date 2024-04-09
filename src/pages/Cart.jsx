import { useEffect } from "react"; // useEffect içe aktarıldı
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { getCart } from "../actions/basketActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Cartitem from "../components/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">sepet</h1>
      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error message={cart.error} />
        ) : cart.data.length === 0 ? (
          <p className="flex flex-col items-center gap-3">
            Sepette Ürün Bulunmamaktadır{" "}
            <Link
              to={"/"}
              className="border p-2 shadow rounded hover:bg-gray-100"
            >
              Ürün Ekle{" "}
            </Link>
          </p>
        ) : (
          cart.data.map((item) => <Cartitem key={item.id} item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Cart;
