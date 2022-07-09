// <!-- FILTER BY DEPARTMENT -->

// <script>
// export let uniqueDepartment, handlecheckboxDepartment;

//  const handleChange = (event) => {
//     handlecheckboxDepartment(event.target.value);
//  };
// </script>

// <section className="filter__ByTitle">
//     <div className="filter__ByType">
//         <label className="filter__type" for="">filtrar por deporte</label>
//     </div>

//     <ul>
//     {#each uniqueDepartment as department}
//     <li className="filter__check">
//    <input className="filter__box" type="checkbox" name="sport" on:change={handleChange} value={department} group={department} >

//      <label className="filter__label" for="">{department}</label>
//     </li>
//     {/each}
//     </ul>
// </section>

// <style lang="less">
//     @import '../styles/core/Reset.less';
//     @import '../styles/core/Vars.less';
//     @import "../styles/components/Filters.less";
// </style>

import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

function FilterByDepartment(props) {
  return <></>;
}

export default FilterByDepartment;
