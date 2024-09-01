import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='puts'>
        <div className='img'>
          <p>- Desde 2024 -</p>
          <hr />
          <h1>COPR</h1>
          <hr />
          <h2>Cooperativa Online de Produtores Rurais</h2>
        </div>
      </div>
      <div className='info-section'>
        <div className='info-card'>
          <h2>SOBRE O COPR</h2>
          <a href="http://localhost:3000/SobreNos">Nossa história</a>
        </div>
        <div className='info-text'>
          <h2>Qualidade em Foco na COPR</h2>
          <p>Na COPR, garantimos qualidade em todos os aspectos. Nossa plataforma oferece tecnologia de ponta para uma experiência eficiente e segura. Além disso, nosso suporte ao cliente está sempre disponível para ajudar. Na COPR, qualidade é prioridade.</p>
        </div>
        <div className='info-card'>
          <h2>ACESSAR AS VAGAS</h2>
          <a href="http://localhost:3000/Vagas">Vagas</a>
        </div>
      </div>
      <div className='texto'>
        <h3>O QUE DIZEM NOSSOS CLIENTES</h3>
        <p>"Utilizar a COPR transformou a maneira como contratamos mão de obra temporária. <br />
          A plataforma é intuitiva, e encontramos trabalhadores qualificados com muita facilidade. <br />
          Além disso, o sistema de avaliações garante que contratamos os melhores profissionais disponíveis. <br />
          O suporte ao cliente é sempre prestativo e ágil. <br />
          A COPR é essencial para quem busca eficiência e confiança no setor agrícola."
        </p>
      </div>
    </div>
  );
}

export default Home;
