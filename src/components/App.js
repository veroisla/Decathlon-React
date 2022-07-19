import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/App.scss';

import Header from '../components/Header';
import PreInfo from './PreInfo';
import getApiData from '../services/DecathlonApi';
import ListProducts from './ListProducts';
import ProductDetail from './ProductDetail';
import Filters from './Filters';
import Footer from '../components/Footer';

function App(props) {
  const [dataProducts, setDataProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setDataProducts(data);
    });
  }, []);

  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  //GET BRAND
  const getBrand = () => {
    const productBrand = dataProducts.map((product) => product.brand.label);
    const uniqueBrand = productBrand.filter((brand, index) => {
      return productBrand.indexOf(brand) === index;
    });
    return uniqueBrand;
  };

  const handleFilterBrand = (value) => {
    if (filterBrand.includes(value)) {
      const newBrand = filterBrand.filter((brand) => brand !== value);
      setFilterBrand(newBrand);
    } else {
      setFilterBrand([...filterBrand, value]);
    }
  };

  //GET DEPARTMENT
  const getDepartment = () => {
    const productDepartment = dataProducts.map(
      (product) => product.sportGroups[0].label
    );
    const uniqueDepartment = productDepartment.filter((department, index) => {
      return productDepartment.indexOf(department) === index;
    });
    return uniqueDepartment;
  };

  const handleFilterDepartment = (value) => {
    if (filterDepartment.includes(value)) {
      const newDepartment = filterDepartment.filter(
        (department) => department !== value
      );
      setFilterDepartment(newDepartment);
    } else {
      setFilterDepartment([...filterDepartment, value]);
    }
  };

  //GET ID PRODUCT/DETAIL
  const { pathname } = useLocation();
  const dataPath = matchPath('/productDetail/:id', pathname);

  const productId = dataPath !== null ? dataPath.params.id : null;
  const productFound = dataProducts.find(
    (product) => product.models[0].modelId === productId
  );

  //FILTERS
  const productFilters = dataProducts
    .filter((product) => {
      if (filterDepartment.length === 0) {
        return true;
      } else {
        return filterDepartment.includes(product.sportGroups[0].label);
      }
    })

    .filter((product) => {
      if (filterBrand.length === 0) {
        return true;
      } else {
        return filterBrand.includes(product.brand.label);
      }
    });
  console.log(productFilters);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PreInfo />
                <div className="computerVersion">
                  {' '}
                  <Filters
                    PreventSubmitForm={PreventSubmitForm}
                    brand={getBrand()}
                    handleFilterBrand={handleFilterBrand}
                    department={getDepartment()}
                    handleFilterDepartment={handleFilterDepartment}
                  />
                  <ListProducts products={productFilters} />
                </div>
              </>
            }
          />
          <Route
            path="/productDetail/:id"
            element={<ProductDetail product={productFound} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
