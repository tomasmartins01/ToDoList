import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
      <Footer />
    </Fragment>
  );
}
export default App;
