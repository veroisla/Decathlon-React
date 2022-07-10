import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

function FilterByBrand(props) {
  const handleChange = (ev) => {
    props.handleFilterBrand(ev.target.value);
  };
  const renderBrand = () => {
    return props.brands.map((brand, index) => {
      return (
        <li className="filter__check" key={index}>
          <input
            className="filter__box"
            type="checkbox"
            name="brand"
            onChange={handleChange}
            value={brand}
          />
          <label className="filter__label" htmlFor="">
            {brand}
          </label>
        </li>
      );
    });
  };
  return (
    <section className="filter__ByTitle">
      <div className="filter__ByType">
        <label className="filter__type" htmlFor="">
          filtrar por marca
        </label>
      </div>
      <ul>{renderBrand()}</ul>
    </section>
  );
}

export default FilterByBrand;
