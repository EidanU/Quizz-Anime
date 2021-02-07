import Meteo from "../components/landing/Meteo";
import Navbar from "../components/Navbar";
import Container from "../components/landing/Container";
import Presentation from "../components/landing/Presentation";

//Data
import data from "../Data/PresentationData.json";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Container/>
      <Meteo />
      <section className="anims">
        {data.map((data) => {
          return (
            <Presentation
              clas={data.clas}
              titre={data.titre}
              description={data.description}
              img={data.url}
            />
          );
        })}
      </section>
      <br/>
    </>
  );
};
export default Landing;
