function ResetButton(props) {
  const handleChange = (ev) => {
    props.handleResetButton(ev.target.value);
  };
  return <button onClick={handleChange}>Borrar filtros</button>;
}

export default ResetButton;
