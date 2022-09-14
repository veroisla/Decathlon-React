import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/App.scss';

import ls from '../services/localStorage';
import Header from '../components/Header';
import PreInfo from './PreInfo';
import getApiData from '../services/DecathlonApi';
import ListProducts from './ListProducts';
import ProductDetail from './ProductDetail';
import Filters from './Filters';
import Footer from '../components/Footer';
import ArrowUp from './ArrowUp';

function App() {
  const [dataProducts, setDataProducts] = useState(ls.get('dataProducts', []));

  const [inputSearch, setInputSearch] = useState(ls.get('inputSearch', ''));

  const [filterBrand, setFilterBrand] = useState([]);

  const [filterDepartment, setFilterDepartment] = useState([]);

  //COLAPSABLES-----------------------------------------------------------------//
  const [collapseFilter, setCollapseFilter] = useState('collapsed');

  const handleCollapse = (legendId) => {
    const idCollapse = legendId;
    if (idCollapse === 'id-filters') {
      if (collapseFilter === 'collapsed') {
        setCollapseFilter('');
      } else {
        setCollapseFilter('collapsed');
      }
    }
  };

  //PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //FETCH
  useEffect(() => {
    if (dataProducts.length === 0) {
      getApiData().then((data) => {
        setDataProducts(data);
      });
    }
  }, []);

  //GUARDAR EN LocalStorage

  useEffect(() => {
    ls.set('dataProducts', dataProducts);
    ls.set('inputSearch', inputSearch);
  }, [dataProducts, inputSearch]);

  //INPUT SEARCH
  const handleFilterByText = (value) => {
    setInputSearch(value);
  };

  //GET BRAND
  const getBrand = () => {
    const productBrand = dataProducts.map((product) => product.brand.label);
    const uniqueBrand = productBrand.filter((brand, index) => {
      return productBrand.indexOf(brand) === index;
    });
    return uniqueBrand.sort();
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
    return uniqueDepartment.sort(); //Ordenar alfabéticamente
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

  //BUTTON RESET
  const handleResetButton = () => {
    // ls.remove('filterBrand');
    // ls.remove('filterDepartment');
    ls.remove('inputSearch');
    // ls.clear();
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
      return (
        product.sportGroups[0].label
          .toLowerCase()
          .includes(inputSearch.toLowerCase()) ||
        product.brand.label.toLowerCase().includes(inputSearch.toLowerCase())
      );
    })

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
  return (
    <>
      <Header
        handleFilterByText={handleFilterByText}
        inputSearch={inputSearch}
      />
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
                    brand={getBrand()}
                    handleFilterBrand={handleFilterBrand}
                    department={getDepartment()}
                    handleFilterDepartment={handleFilterDepartment}
                    handleSubmit={handleSubmit}
                    handleCollapse={handleCollapse}
                    collapseFilter={collapseFilter}
                    handleResetButton={handleResetButton}
                  />
                  <ArrowUp />
                  <ListProducts
                    products={productFilters}
                    inputSearch={inputSearch}
                    filterBrand={filterBrand}
                  />
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
