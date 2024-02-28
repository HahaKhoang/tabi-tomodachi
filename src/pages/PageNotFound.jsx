import { useNavigate, useRouteError } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div
      style={{
        backgroundColor: "#e63946",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4rem",
        color: "white",
        padding: "4rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Something went wrong! So sorry about that
      </h1>
      <p style={{ fontSize: "2rem" }}>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default PageNotFound;
