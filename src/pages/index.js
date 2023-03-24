import Head from 'next/head';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const professionals = [
    {
      nome: 'Profissional 1',
      especialidade: 'Psicóloga',
      idade: 30,
      formacao: 'Psicologia pela Universidade XYZ',
      experiencia: '5 anos de atuação na área',
      registro: 'CRP 01/12345',
      imagem: 'https://robohash.org/profissional1'
    },
    {
      nome: 'Profissional 2',
      especialidade: 'Psicóloga',
      idade: 30,
      formacao: 'Psicologia pela Universidade XYZ',
      experiencia: '5 anos de atuação na área',
      registro: 'CRP 01/12346',
      imagem: 'https://robohash.org/profissional2'
    },
    {
      nome: 'Profissional 3',
      especialidade: 'Psicóloga',
      idade: 30,
      formacao: 'Psicologia pela Universidade XYZ',
      experiencia: '5 anos de atuação na área',
      registro: 'CRP 01/12346',
      imagem: 'https://robohash.org/profissional3'
    },
    {
      nome: 'Profissional 4',
      especialidade: 'Psicóloga',
      idade: 30,
      formacao: 'Psicologia pela Universidade XYZ',
      experiencia: '5 anos de atuação na área',
      registro: 'CRP 01/12346',
      imagem: 'https://robohash.org/profissional4'
    },
    // ... Adicione outros profissionais aqui
  ];


  const renderProfessionals = () => {
    const visibleProfessionals = professionals.slice(
      currentIndex,
      currentIndex + 3
    );

    return visibleProfessionals.map((professional, index) => (
      <div key={index} className="professional">
        <Avatar src={professional.imagem} alt={professional.nome} round />
        <div>
          <h3>{professional.nome}</h3>
          {Object.entries(professional).map(
            ([key, value]) =>
              key !== 'nome' && key !== 'imagem' && (
                <p key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
              )
          )}
        </div>
      </div>
    ));
  }

  const nextProfessionals = () => {
    setCurrentIndex((currentIndex + 1) % (professionals.length - 2));
  };

  const prevProfessionals = () => {
    setCurrentIndex(
      (currentIndex - 1 + (professionals.length - 2)) %
      (professionals.length - 2)
    );
  };

  return (
    <div>
      <Head>
        <title>A.COR.DAR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-d+LoHxJxD81/ZeQGWt/UgDzRwpJPTifWTlH89KFN3+Ea9ddZaCbJLkHt1n5wEwuBv1jjBuxYVhpt5xgUXM9dZQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>

      {/* Header */}
      <header>
        <div class="header-container">
          <div class="logo-container">
            <img src="/icon.png" alt="Logo da Empresa" />
          </div>
          <div class="nav-buttons-container">
            <nav class="nav-buttons">
              <ul>
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#especialidades">especialidades</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#equipe">Equipe</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main>
        {/* Seção Início */}
        <section id="inicio">
          <div className="container">
            <h1>
              <span>A.</span>
              <span>C</span>
              <span>O</span>
              <span>R.</span>
              <span>D</span>
              <span>A</span>
              <span>R</span>
            </h1>
            <p>Despertando talentos, colorindo sonhos!</p>
            <button onClick={() => (window.location.href = '#contato')}>
              Fale conosco
            </button>
          </div>
        </section>

        {/* Seção Especialidades */}
        <section id="especialidades">
          <h2>Especialidades</h2>
          <ul>
            <li>TDAH</li>
            <li>Dislexia</li>
            <li>TEA</li>
            <li>Alfabetização</li>
            <li>Letramento</li>
          </ul>
        </section>

        {/* Seção Serviços */}
        <section id="servicos">
          <h2>Serviços</h2>
          <ul>
            <li>Neuropediatria e Neurofisiologia</li>
            <li>Psicoterapia - Ansiedade e Emagrecimento</li>
            <li>Terapia Cognitiva</li>
            <li>Estimulação Cognitiva</li>
            <li>Intervenção Psicopedagógica</li>
            <li>Avaliação Neuropsicológica</li>
            <li>Intervenção Fonoaudiológica</li>
            <li>Psicoterapia Comportamental - ABA</li>
            <li>Psicoterapia Infantil e Adolescente</li>
            <li>Reforço Escolar</li>
          </ul>
        </section>

        {/* Seção Equipe */}
        <section id="equipe">
          <h2>Equipe</h2>
          <div className="carousel">
            <button className="prevButton" onClick={prevProfessionals}>
              <img src="/left-arrow.png" alt="Anterior" />
            </button>
            <div className="professionalsContainer">
              {renderProfessionals()}
            </div>
            <button className="nextButton" onClick={nextProfessionals}>
              <img src="/right-arrow.png" alt="Próximo" />
            </button>
          </div>
        </section>
        {/* Seção Contato */}
        <section id="contato">
          <h2>Contato</h2>
          <div className="contact-container">
            <div className="info-container">
              <div className="social-media-container">
                <p>Redes sociais:</p>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/clinica.acordar/">
                      <FaInstagram className="icon" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/A.cor.dar">
                      <FaFacebook className="icon" /> Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div className="phone-container">
                <p>Telefone: </p>
                <p>
                  <FaPhone className="icon" /> 19 3841-7511
                </p>
              </div>
              <div className="email-container">
                <p>E-mail:</p>
                <p>
                  <FaEnvelope className="icon" /> atendimento.acordar@gmail.com
                </p>
              </div>
            </div>
            <div className="location-container">
              <div className="map-container">
                <iframe
                  title="Localização"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2521160275183!2d-46.94765678503441!3d-22.36816678529635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c4608cbb98a3%3A0x7c6de1a8ed1b6f2e!2sR.%20Waldomino%20Martini%2C%2075%20-%20Centro%2C%20Mogi%20Gua%C3%A7u%20-%20SP%2C%2013810-180!5e0!3m2!1sen!2sbr!4v1648056053249!5m2!1sen!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <p>Endereço: R. Waldomino Martini, 75 - Sobreloja Centro - Mogi Guaçu</p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}

        <footer>
          <p>&copy; 2023 acordar</p>
        </footer>
      </main>
    </div>
  );
}