import React from "react";

const Pricing = () => {
  return (
    <div>
      <h2>Pricing</h2>
      <div className="pricing-container">
        <div className="plan">
          <h3>Premium Plan</h3>
          <p>$100</p>
          <p>✔️ Acceso ilimitado a todas las películas y series.</p>
          <p>✔️ Reproducción en hasta 4 dispositivos simultáneamente.</p>
          <p>✔️ Descargas disponibles para ver sin conexión.</p>
        </div>
        <div className="plan">
          <h3>Standard Plan</h3>
          <p>$87</p>
          <p>✔️ Acceso a una amplia selección de películas y series.</p>
          <p>✔️ Reproducción en hasta 2 dispositivos simultáneamente.</p>
          <p>✔️ Sin anuncios durante la reproducción.</p>
        </div>
        <div className="plan">
          <h3>Basic Plan</h3>
          <p>$60</p>
          <p>✔️ Acceso limitado a películas y series seleccionadas.</p>
          <p>✔️ Reproducción en un solo dispositivo a la vez.</p>
          <p>✔️ Anuncios ocasionales durante la reproducción.</p>
        </div>
      </div>
      <style jsx>{`
        .pricing-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .plan {
          border: 2px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          width: 300px;
          text-align: center;
        }

        .plan h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .plan p {
          font-size: 18px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
