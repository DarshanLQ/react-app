import "./App.css";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import SidebarContent from "./components/navSideBar/sidebarContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInformation, setToken } from "./redux/slices/auth";
import { Spinner } from "react-bootstrap";
import AlertModal from "./components/modals/alertModal/alertModal";

function App() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error, isFree, isSubscribed, errorMessage } =
    useSelector((state) => state.auth);

  const handleLiquidRedirect = () =>
    window.open("https://app.liquid.diamonds", "_blank");

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token == null) {
      token = new URLSearchParams(window.location.search).get("access_token");
      setToken(token);
    }

    dispatch(fetchUserInformation(token));
  }, [dispatch]);

  if (error) {
    return (
      <AlertModal
        show={true}
        header={"Error"}
        content={errorMessage}
        handleClick={handleLiquidRedirect}
      />
    );
  }

  if (isSubscribed == false && isFree == false) {
    const errorMessage =
      "You are not Subscribed to anything or All your Free trials has been consumed. Contact Team for Resolving the issue";
    return (
      <AlertModal
        show={true}
        header={"Error"}
        content={errorMessage}
        handleClick={handleLiquidRedirect}
      />
    );
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        className="root-body"
      >
        <aside
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
          }}
          className="main-sidebar"
        >
          <SidebarContent />
        </aside>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
