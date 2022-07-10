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
import Filters from './Filters';
import Product from './Product';

function App(props) {
  const [dataProducts, setDataProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setDataProducts(data);
    });
  }, []);

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

  return (
    <>
      <Header />
      <PreInfo />
      <div className="computerVersion">
        {' '}
        <Filters
          brand={getBrand()}
          handleFilterBrand={handleFilterBrand}
          department={getDepartment()}
          handleFilterDepartment={handleFilterDepartment}
        />
        <ListProducts products={productFilters} />
      </div>
    </>
  );
}

export default App;

/* <script>

let products = []
// ---> Unique me da los checkbox sin repetir
let uniqueDepartment = [];
let uniqueBrand = []; 
// ---> checkbox seleccionados
let checkboxBrand = [];
let checkboxDepartment = [];

  $: console.log(checkboxBrand);
  $: console.log(checkboxDepartment)

//FETCH
    onMount(async () => {
		const res = await fetch(`https://5f86d366c8a16a0016e6bcd4.mockapi.io/products`);
		products= await res.json();  
    getDepartment();
    getBrand();
    // console.log(products);
	});


// FETCH, Hago el fetch fuera de onMount por ver si eso es el problema, si que se pintan los productos, pero el console.log(products) sigue sin devolverme nada, creo que por eso no puedo hacer el filtrado, porque la variable products fuera del fetch no tiene ningún valor, por lo que al pasarle a mi componente <ListProducts products={productFiltered}/> realmente no le estoy pasando nada.

//  fetch (`https://5f86d366c8a16a0016e6bcd4.mockapi.io/products`)
// .then(response => response.json())
// .then(data => products = data)
// console.log(products); 


//GET CHECKKBOX DEPARTMENT
    const getDepartment = () => {
    const productDepartment = products.map((product) => product.departmentLabel);
    //  console.log(productDepartment);
    uniqueDepartment = productDepartment.filter((department,index) => {
    return productDepartment.indexOf(department) === index;
    });
    uniqueDepartment = uniqueDepartment.sort()
  };

//GET CHECKKBOX BRAND
    const getBrand = () => {
    const productBrand = products.map((product) => product.brand.label);
    // console.log(productBrand);
    uniqueBrand = productBrand.filter((brand,index) => {
    return productBrand.indexOf(brand) === index;
    }) 
    uniqueBrand = uniqueBrand.sort();
  } 
  // onMount(() => getBrand()) ----> Me gustaría hacer el onMount aquí, y no cuando hago el fetch, pero desde aquí no funciona. 

 
//FILTERS
  const handlecheckboxBrand = (value) => {
    if (checkboxBrand.includes(value)) {
      const newBrand = checkboxBrand.filter((item) => item !== value);
      checkboxBrand=(newBrand);
    } else {
      checkboxBrand=([...checkboxBrand, value]);
    }};

    const handlecheckboxDepartment = (value) => {
    if (checkboxDepartment.includes(value)) {
      const newDepartment = checkboxDepartment.filter((item) => item !== value);
      checkboxDepartment=(newDepartment);
    } else {
      checkboxDepartment=([...checkboxDepartment, value]);
    }};


// LISTADO PRODUCTOS FILTRADOS
$: productFiltered = 
  products
  .filter((item) => {
    if (checkboxBrand.length === 0) {
      return true;
      
    } else {
      return checkboxBrand.includes(item.brand.label)
    }})

    .filter((item) => {
    if (checkboxDepartment.length === 0) {
      return true;
    } else {
      return checkboxDepartment.includes(item.departmentLabel)
    }
    }); 
    

</script>

<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />


 <section lang="less">
 <Header/> 
 <PreInfo/>
 <div className="computerVersion">
  <Filters {uniqueBrand}  {uniqueDepartment} {handlecheckboxBrand} {handlecheckboxDepartment}/>
  <!-- <ListProducts products={products}/>   -->
  <ListProducts products={productFiltered}/> 
 <!--  A ListProducts le pasaría como props en vez de la variable {products}, la variable con los filtros {productFiltered}--->
</div>
</section>  */
