import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

import FilterByBrand from '../components/FilterByBrand';

function Filters(props) {
  return (
    <form>
      <div className="filter">
        <h3 className="filter__filtros">filtros</h3>
        <div className="filter__mobileVersion">
          <FilterByBrand
            brands={props.brand}
            handleFilterBrand={props.handleFilterBrand}
          />
        </div>
      </div>
    </form>
  );
}

export default Filters;
