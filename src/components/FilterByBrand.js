// <!-- FILTER BY BRAND -->

// <script>
// export let uniqueBrand, handlecheckboxBrand;

// const handleChange = (event) => {
//     handlecheckboxBrand(event.target.value);
// };
// </script>

// <section className="filter__ByTitle">
//     <div className="filter__ByType">
//       <label className="filter__type" for="">filtrar por marca</label>
//     </div>

//     <ul>
//         {#each uniqueBrand as brand}
//              <li className="filter__check">
//              <input  className="filter__box" type="checkbox" name="brand" on:change={handleChange} value={brand} group={brand}>
//              <label className="filter__label" for="">{brand}</label>
//              </li>
//         {/each}
//     </ul>
// </section>

//     <style lang="less">
//         @import '../styles/core/Reset.less';
//         @import '../styles/core/Vars.less';
//         @import "../styles/components/Filters.less";
//     </style>

import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

function FilterByBrand(props) {
  return <></>;
}

export default FilterByBrand;
