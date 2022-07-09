// <!-- PREINFO SHOES -->
import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/PreInfo.scss';

function PreInfo(props) {
  return (
    <section className="info">
      <p className="info__links">
        calzado deportivo... / zapatillas deportivas
      </p>
      <h3 className="info__title">Zapatillas deportivas de hombre</h3>
      <p className="info__text">
        Encuentra la mejor oferta de <em>zapatillas hombre</em> de tus marcas
        favoritas Adidas, Puma, New Balance y muchas más. Descubre cuáles son
        las mejores zapatillas deportivas de hombre para practicar deporte. Las
        tenemos aquí, en Decathlon.
      </p>
    </section>
  );
}

export default PreInfo;
