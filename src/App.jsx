import Header from "./component/Header";
import Container from "./component/Container";
import Footer from "./component/Footer";
import Editor from "./component/Editor";
import loadingImg from "./assets/loading.gif";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }
  }, [loading]);
  return (
    <>
      {loading === false ? (
        <div className="loadingContainer">
          <img src={loadingImg} alt="Loading..." />
        </div>
      ) : (
        <div>
          <Header />
          <Editor />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
