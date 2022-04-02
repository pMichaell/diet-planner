import React from "react";
import Layout from "./layout/layout/Layout";
import classes from "./App.module.css";

function App() {
  //TODO add responsive typography with clamp
  return (
    <Layout>
      <div className={classes.testDiv}>
        <div>XD</div>
        <div>XD</div>
        <div>XD</div>
        <div>XD</div>
        <div>XD</div>
        <div>XD</div>
      </div>
    </Layout>
  );
}

export default App;
