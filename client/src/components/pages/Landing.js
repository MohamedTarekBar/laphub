import AppDetails from "../../config";
import { AppRoutes } from "../../config";
const Landing = () => {
  return (
    <div className="page">
      <header className="App-header">
        <img src={AppDetails.logo} className="App-logo" alt="logo" />
        <p>
          <a
            href={AppRoutes.app.landing}
            style={{
              color: "#fee44b",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            {AppDetails.formatedTitle}
          </a>{" "}
          - Perfect Computer Shop !
        </p>
      </header>
    </div>
  );
};

export default Landing;
