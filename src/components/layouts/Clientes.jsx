import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

const dataClientes = [
  {
    id: "01",
    name: "Manuel",
  },
  {
    id: "02",
    name: "Lopera",
  },
  {
    id: "03",
    name: "Uribe",
  },
  {
    id: "00",
    name: "Admin",
  },
];

const Clientes = () => {
  return (
    <section>
      <Header />
      <main>
        <h1 className="tittle">List Clientes</h1>
        <section className="data-container">
          {dataClientes.map((data) => (
            <div className="data-element" key={data.id}>
              <h1>{data.id}</h1>
              <h3>{data.name}</h3>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Clientes;
