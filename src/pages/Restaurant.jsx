import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/productAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { FaFireFlameCurved } from "react-icons/fa6";
import { getRestaurants } from "../actions/restaurantAction";
import RestaurantDetail from "./RestaurantDetail";
import { addToBasket, updateItem } from "../actions/basketActions";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // useDispatch fonksiyon olarak çağrılmalı

  //iki farklı reducer'a abone olma
  const productState = useSelector((store) => store.products);
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  //bu restaraurant 'a ait ürünleri api'dan alma
  useEffect(() => {
    dispatch(getRestaurants(id));
    dispatch(getProducts(id));
  }, []);

  // sepete ürün eklemeyi yeyikler
  const handleAdd = (item, found) => {
    //bulunduysa sepetteki halini güncelle
    //elemanı sepette bulamadıysa sepete ekle
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(item, restaurants));
  };
  // id değiştiğinde useEffect tekrar çalışacak
  return (
    <div>
      <div className="shadow">
        <Container>
          <h1>
            {isLoading ? (
              <Loader />
            ) : (
              !error && <RestaurantDetail data={restaurants} />
            )}
          </h1>
        </Container>
        <hr />
      </div>
      <Container>
        <div className="mb-6">
          <h2 className="flex items-center gap-2 font-bold text-xl">
            <FaFireFlameCurved className="text-red-500" />
            Popüler
          </h2>
          <p className="text-gray-600">
            Restaurant' ın en çok tercih edilen ürünleri
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {productState.isLoading ? (
            <Loader />
          ) : productState.error ? (
            <Error message={productState.error} />
          ) : (
            productState.products.map((item) => (
              <ProductCard item={item} key={item.id} handleAdd={handleAdd} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurant;
