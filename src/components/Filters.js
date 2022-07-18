import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

import FilterByBrand from '../components/FilterByBrand';
import FilterByDepartment from './FilterByDepartment';
import { MdOutlineSettingsInputComposite } from 'react-icons/md';

function Filters(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="filter">
        <h3 className="filter__filtros">
          <MdOutlineSettingsInputComposite className="filter__icon" />
          filtros
        </h3>
        <div className="filter__mobileVersion">
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
