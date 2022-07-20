import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

import FilterByBrand from '../components/FilterByBrand';
import FilterByDepartment from './FilterByDepartment';
import { MdOutlineSettingsInputComposite } from 'react-icons/md';

function Filters(props) {
  //-----------------------------
  const handleChangeCollapse = (ev) => {
    ev.preventDefault();
    const legendId = ev.currentTarget.id;
    props.handleCollapse(legendId);
  };

  //---------------------------------
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="filter">
        <legend
          className="filter__filtros"
          id="id-filters"
          onClick={handleChangeCollapse}
        >
          filtros
          <MdOutlineSettingsInputComposite
            className="filter__icon"
            onClick={handleChangeCollapse}
          />
        </legend>
        {/* <div className="filter__mobileVersion"> */}
        <div className={`filter__mobileVersion ${props.collapseFilter}`}>
          <FilterByBrand
            brands={props.brand}
            handleFilterBrand={props.handleFilterBrand}
          />
          <FilterByDepartment
            departments={props.department}
            handleFilterDepartment={props.handleFilterDepartment}
          />
        </div>
      </div>
    </form>
  );
}

export default Filters;
