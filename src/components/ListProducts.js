// <!-- LIST OF PRODUCTS -->

// <script>
//     import Product from "./Product.svelte";
//     export let products;
// </script>

// <main>
//     <ul className="listProducts">
//         {#if products.length === 0}
//         <p>No existen productos con tu descripción</p>
//         {:else}
//         {#each products as product}
//         <Product product={product}/>
//         {/each}
//         {/if}

// <!--
//     {#each products as product}
//     <Product product={product}/>
//     {/each}  -->
//     </ul>
// </main>

// <style lang="less">
//     @import '../styles/core/Reset.less';
//     @import '../styles/core/Vars.less';
//     @import "../styles/components/ListProducts.less";
// </style>

import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/ListProducts.scss';

function ListProducts(props) {
  return <></>;
}

export default ListProducts;
