import React, { useEffect, Dispatch, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDescription from "../../components/ProductDescription";
import { getProduct } from "../../services/product";
import { ProductContainer } from "./styles";
import { ProductActions } from "../../redux/actions/ProductActions";
import { useDispatch } from "react-redux";
import { Produto } from "../../interfaces/Produto";
import Gallery from "../../components/Gallery";
import Recommendations from "../../components/Recommendations";
import Loader from "../../components/Loader";

function Product() {
  const [isLoadingProduto, setIsLoadingProduto] = useState<boolean>(false);
  const productDispatch = useDispatch<Dispatch<ProductActions>>();

  useEffect(() => {
    setProduct();
  }, []);

  async function setProduct() {
    setIsLoadingProduto(true);
    const response: Produto = await getProduct();
    setIsLoadingProduto(false);
    productDispatch({
      type: "SET_PRODUCT",
      payload: response,
    });
  }

  return (
    <ProductContainer>
      <Loader status={isLoadingProduto} />
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
