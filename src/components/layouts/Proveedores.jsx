import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

const dataProveedores = [
  {
    id: "01",
    servicio: "camaraService",
    name: "Sony",
  },
  {
    id: "02",
    servicio: "camaraService",
    name: "Canon",
  },
  {
    id: "03",
    servicio: "almacenamietoService",
    name: "SanDisk",
  },
  {
    id: "04",
    servicio: "accesoriosService",
    name: "Amazon",
  },
];

const Proveedores = () => {
  return (
    <section>
      <Header />
      <main>
        <h1 className="tittle">List Proveedores</h1>
        <section className="data-container">
          {dataProveedores.map((data) => (
            <div className="data-element" key={data.id}>
              <h1>{data.id}</h1>
              <h3>{data.name}</h3>
              <h5>{data.servicio}</h5>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Proveedores;
