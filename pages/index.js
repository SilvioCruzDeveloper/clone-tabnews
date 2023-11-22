// pages/index.js

import React, { useState } from "react";

const Home = () => {
  const [mensagemAmor, setMensagemAmor] = useState("te amo muito sabias?");

  const styles = {
    container: {
      textAlign: "center",
      margin: "20px",
    },
    title: {
      color: "#ff66b2", // Rosa
    },
    message: {
      color: "#ff3399", // Rosa mais escuro
      fontSize: "1.2em",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#ff66b2", // Rosa
      color: "#fff", // Texto branco
      fontSize: "1em",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease", // Animação de transição de cor de fundo
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>to indo bem?</h1>
      <p style={styles.message}>oi ny, {mensagemAmor}</p>
      <button
        style={styles.button}
        onClick={() => setMensagemAmor("te amo mais ainda!!!!!")}
      >
        Expressar Amor
      </button>
    </div>
  );
};

export default Home;
