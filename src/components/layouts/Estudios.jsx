import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

const dataEstudios = [
  {
    id: "01",
    name: "Estudio 01",
  },
  {
    id: "02",
    name: "Estudio 02",
  },
  {
    id: "03",
    name: "Estudio 03",
  },
  {
    id: "04",
    name: "Estudio 04",
  },
];

const Estudios = () => {
  return (
    <section>
      <Header />
      <main>
        <h1 className="tittle">List Estudios</h1>
        <section className="data-container">
          {dataEstudios.map((data) => (
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

export default Estudios;
