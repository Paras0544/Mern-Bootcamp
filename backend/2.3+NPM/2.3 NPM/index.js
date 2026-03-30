import SoccerJersey from "soccer-jersey";

const TeamPage = () => {

  const jerseyImgSrc =  SoccerJersey.draw({  
      shirtText: "ARS",
      shirtColor: "#f00000",
      sleeveColor: "#fff",
      shirtStyle: "checkered",
      shirtStyleColor: "#dc0001",
      textColor: "#fff",
    }); // data:image/svg+xml;base64,......


  return (
    <div>
      <h1>ARS</h1>
      <img src={jerseyImgSrc} />
    </div>
  );
}