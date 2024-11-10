import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Hompage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Hompage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Hompage;
