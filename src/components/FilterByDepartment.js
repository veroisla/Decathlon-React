import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Filters.scss';

function FilterByDepartment(props) {
  const handleChange = (ev) => {
    props.handleFilterDepartment(ev.target.value);
  };
  const renderDepartment = () => {
    return props.departments.map((department, index) => {
      return (
        <li className="filter__check" key={index}>
          <input
            className="filter__box"
            type="checkbox"
            name="department"
            value={department}
            onChange={handleChange}
            checked={props.filterDepartment}
          />
          <label className="filter__label" htmlFor="">
            {department}
          </label>
        </li>
      );
    });
  };
  return (
    <section className="filter__ByTitle">
      <div className="filter__ByType">
        <label className="filter__type" htmlFor="">
          filtrar por deporte
        </label>
      </div>
      <ul>{renderDepartment()}</ul>
    </section>
  );
}

export default FilterByDepartment;
