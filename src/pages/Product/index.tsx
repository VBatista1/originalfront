import React, { useEffect, Dispatch } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDescription from "../../components/ProductDescription";
import { getProduct } from "../../services/product";
import { ProductContainer } from "./styles";
import { ProductActions } from "../../redux/actions/ProductActions";
import { useDispatch } from "react-redux";
import { Produto } from "../../interfaces/Produto";
import Gallery from "../../components/Gallery";
import Recommendations from "../../components/Recommendations";

function Product() {
  const productDispatch = useDispatch<Dispatch<ProductActions>>();

  useEffect(() => {
    setProduct();
  }, []);

  async function setProduct() {
    const response: Produto = await getProduct();
    productDispatch({
      type: "SET_PRODUCT",
      payload: response,
    });
  }

  return (
    <ProductContainer>
      <div>
        <Breadcrumb />
        <div>
          <Gallery />
          <ProductDescription />
        </div>
        <Recommendations />
      </div>
    </ProductContainer>
  );
}

export default Product;
