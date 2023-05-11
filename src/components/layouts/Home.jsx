import Header from "../helpers/Header";
import Footer from "../helpers/Footer";
import camera from "../../../public/img/camera.jpg";
const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <h1>Fotos Arq</h1>
        <div className="img-container">
          <img id="camera-img" src={camera} />
        </div>
        <p>Empresa Colombiana dedicada al campo fotografico</p>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
