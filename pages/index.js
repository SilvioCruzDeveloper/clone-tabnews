// pages/index.js (assumindo uso do Next.js)
import React from 'react';

function Home() {
    return (
        <div>
            <style jsx>{`
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }

                .ola-mundo {
                    text-align: center;
                    color: #2c3e50;
                    font-size: 2em;
                    padding: 20px;
                    border-radius: 8px;
                    background-color: #3498db;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
            `}</style>
            <div className="ola-mundo">
                <h1>Olá, meu Bem</h1>
                <p>to aprendendo aqui</p>
                <p> te amo muitoo!</p>
                <p>
                    vc e o amor da minha vida ny , <br> 
                    obrigado por me apioar 
                </p>
                <h2>
                    te amo , e se isso aqui deu certo me da um bejo?
                    
                </h2>
            </div> 
        </div>
    );
}

export default Home;
