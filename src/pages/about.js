"use client";

import React from 'react';
import { useEffect, useState } from "react";

// CSS Imports
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Component Imports
import Image from "next/image";

// Icon Imports
import Icon from "@mdi/react";
import {
  mdiCheckCircleOutline,
  mdiAccountHeartOutline,
  mdiChartLine,
  mdiReload,
} from "@mdi/js";

import Loader from "../../components/Loader";

// import { FiTrendingUp, FiShield } from "react-icons/fi";


// import { BiSearchAlt2 } from "react-icons/bi";


// import {
//   FaPaintBrush,
//   FaCameraRetro,
//   FaBullhorn,
//   FaCheckCircle,
// } from "react-icons/fa";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div style={{ display: isLoading ? "none" : "block" }}>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <header className="hero-header">
            <div className="hero-content" id="carouselSlides">
              {/* Slide 1 */}
              <div className="slide active">
                <div className="about-content-image-wrapper">
                  <Image
                    src="/img/about-content.png"
                    alt="Deskripsi Gambar"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="hero-navigation">
            <a href="#about">
            <Image
              src="/img/Arrow-down.png"
              alt="Arrow Down"
              width={40}
              height={40}
              className="arrow-icon"
              id="about"
            />
            </a>
          </div>
        </section>

        {/* About AKAAL Section */}
        <section className="about-akaal-section" id="about">
          <div className="text-container" data-animate="fadeIn">
            <div className="left-text">
              <h5>About AKAAL</h5>
              <h2>
                Be the Game Changer with <span>One Stop Digi-Solution</span>,
                <br />
                driving innovation and <span>transformation</span>.
              </h2>
            </div>
            <div className="right-text">
              <p>
                Kami adalah mitra inovatif yang siap membawa bisnis Anda ke era
                digital dengan teknologi mutakhir. Berbasis di Jakarta, Akaal
                menghadirkan solusi terbaik dalam digital marketing, branding
                kreatif, IT solutions, dan AI automation yang dirancang khusus
                untuk memenuhi kebutuhan unik setiap klien. Sebagai partner
                strategis, kami berkomitmen untuk mendorong kesuksesan digital
                Anda melalui keahlian, kreativitas, dan teknologi terbaru.
              </p>
            </div>
          </div>

          <div className="image-wrapper" data-animate="fadeIn">
            <Image
              src="/img/light-2.png"
              alt="About Illustration"
              width={1200}
              height={500}
              className="about-image"
            />
          </div>

          {/* Vismis */}

          <div className="vismis">
            {/* Vision */}
            <div className="vision-mission-container" data-animate="fadeIn">
              <div className="mission-header">
                <h2>Vision</h2>
                <p>
                  Membangun ekosistem digital yang kolaboratif, terintegrasi,
                  dan inovatif untuk menciptakan dampak positif yang lebih luas.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="vision-mission-container" data-animate="fadeIn">
              <div className="mission-section">
                <div className="mission-header">
                  <h2>Mission</h2>
                  <p>
                    Kami berkomitmen untuk menghadirkan solusi digital inovatif,
                    membangun kemitraan strategis, dan mendorong bisnis melalui
                    teknologi dan kreativitas.
                  </p>
                </div>

                <div className="mission-grid" >
                  <div className="mission-card" data-animate="fadeInUp">
                    <h3>01</h3>
                    <h4>Menciptakan Solusi Digital Adaptif</h4>
                    <p>
                      Mengembangkan teknologi yang selaras dengan kebutuhan
                      bisnis, industri, dan komunitas.
                    </p>
                  </div>
                  <div className="mission-card" data-animate="fadeInUp">
                    <h3>02</h3>
                    <h4>Membangun Kemitraan Jangka Panjang</h4>
                    <p>
                      Memberikan layanan terbaik untuk menciptakan hubungan
                      bisnis yang berkelanjutan.
                    </p>
                  </div>
                  <div className="mission-card" data-animate="fadeInUp">
                    <h3>03</h3>
                    <h4>Menjadi Mitra Strategis</h4>
                    <p>
                      Memimpin transformasi digital untuk meningkatkan
                      produktivitas dan daya saing bisnis.
                    </p>
                  </div>
                  <div className="mission-card" data-animate="fadeInUp">
                    <h3>04</h3>
                    <h4>Berinovasi untuk Dampak Sosial</h4>
                    <p>
                      Mengembangkan aplikasi yang mendukung pertumbuhan
                      wirausaha dan mengatasi tantangan sosial.
                    </p>
                  </div>
                  <div className="mission-card" data-animate="fadeInUp">
                    <h3>05</h3>
                    <h4>Mengintegrasikan Penjualan & Pemasaran</h4>
                    <p>
                      Mengoptimalkan strategi digital dengan analisis data yang
                      presisi untuk hasil yang lebih efektif.
                    </p>
                  </div>
                  <div className="mission-image-card" data-animate="fadeInUp"></div>
                </div>
              </div>
            </div>
          </div>

          <section className="about-akaal-section" id="about">
            <div className="text-container" data-animate="fadeInUp">
              <div className="left-text">
                <h5>Why Choose AKAAL?</h5>
                <h2>
                  Bringing Vision to Life,
                  <br />
                  Delivering Solutions.
                </h2>
              </div>
              <div className="right-text">
                <p>
                  Kami membangun kepercayaan dan memperkuat identitas. Dengan
                  menggabungkan teknologi terkini dan inovasi kreatif, kami
                  meningkatkan efektivitas serta jangkauan kampanye
                  transformatif. Komitmen kami untuk memahami setiap kebutuhan
                  unik memastikan bahwa setiap solusi yang kami hadirkan
                  memberikan dampak nyata, beresonansi dengan audiens Anda, dan
                  mendorong pertumbuhan yang berkelanjutan.
                </p>
              </div>
            </div>

            <div className="feature-highlight" data-animate="fadeInUp">
              <div className="feature-box">
                <Icon path={mdiCheckCircleOutline} size={1.5} color="#fff" />
                <div className="feature-text">
                  <h4>We’re a proven partner</h4>
                  <p>
                    lebih dari 100 brand telah sukses berkembang bersama kami
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <Icon path={mdiReload} size={1.5} color="#fff" />
                <div className="feature-text">
                  <h4>We Make Their Brand Speak</h4>
                  <p>Mengubah brand menjadi suara yang kuat dan berpengaruh.</p>
                </div>
              </div>

              <div className="feature-box">
                <Icon path={mdiAccountHeartOutline} size={1.5} color="#fff" />
                <div className="feature-text">
                  <h4>We Create Loyalist</h4>
                  <p>
                    Membangun hubungan emosional yang menciptakan pelanggan
                    setia.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <Icon path={mdiChartLine} size={1.5} color="#fff" />
                <div className="feature-text">
                  <h4>We Increase Value</h4>
                  <p>
                    Mengoptimalkan strategi untuk meningkatkan daya saing dan
                    nilai.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="brand-akaal-section" id="about">
          <div className="text-container" data-animate="fadeInUp">
            <div className="left-text">
              <h5>How AKAAL Handle Your Brand</h5>
              <h2>
                Crafting Experiences,
                <br />
                Empowering Impact.
              </h2>
            </div>
            <div className="right-text">
              <p>
                Akaal membantu brand tumbuh melalui perjalanan kreatif, strategi
                pemasaran, dan identitas visual yang kuat. Kami wujudkan ide
                menjadi nyata, membangun koneksi emosional, dan menciptakan
                kampanye berdampak. Setiap langkah kami rancang untuk
                menghadirkan cerita brand yang autentik dan berkesan.
              </p>
            </div>
          </div>

          <div className="akaalcardRow" data-animate="fadeInUp">
            <div className="akaalcardItem">
              <div className="akaalcardImage">
                <Image
                  src="/img/hexa.png"
                  width={441}
                  height={446}
                  alt="Creative Journey"
                  layout="responsive"
                />
              </div>
              <div className="card-text">
                <h3>Creative Journey</h3>
                <p>From mood boards to prototypes – we make ideas tangible</p>
              </div>
            </div>

            <div className="akaalcardItem">
              <div className="akaalcardImage">
                <Image
                  src="/img/arrow-up.png"
                  width={441}
                  height={446}
                  alt="Marketing Journey"
                  layout="responsive"
                />
              </div>
              <div className="card-text">
                <h3>Marketing Journey</h3>
                <p>Omnichannel campaigns that blend storytelling and ROI</p>
              </div>
            </div>

            <div className="akaalcardItem">
              <div className="akaalcardImage">
                <Image
                  src="/img/Star.png"
                  width={441}
                  height={446}
                  alt="Branding Journey"
                  layout="responsive"
                />
              </div>
              <div className="card-text">
                <h3>Branding Journey</h3>
                <p>
                  Building emotional connections through logos, voice, and
                  visual ecosystems
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
