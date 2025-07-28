"use client";

import React from 'react';
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Loader from "../../components/Loader";
import ProjectCard from "../../components/ProjectCard";

// Supabase Client
import { supabase } from "../config/supabaseClient";

// Carousel utility
import { initCarousel } from "../../utils/carousel";

// Icon Imports
import Icon from "@mdi/react";
import {
  mdiCheckCircleOutline,
  mdiAccountHeartOutline,
  mdiChartLine,
  mdiReload,
  mdiTicketConfirmation,
  mdiViewGridOutline,
  mdiCreditCardOutline,
  mdiWhatsapp,
  mdiEmail,
} from "@mdi/js";

import { FiTrendingUp, FiShield } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  FaPaintBrush,
  FaCameraRetro,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";

// CSS Imports
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroImages, setHeroImages] = useState([]);
  const [projectCards, setProjectCards] = useState([]);

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      try {
        // Only fetch hero images since we're not using portfolio data
        const { data: heroData, error: heroError } = await supabase
          .from("hero")
          .select("img");

        if (heroError) throw heroError;

        if (heroData && heroData.length > 0) {
          const imageUrls = heroData.map((item) => item.img);
          setHeroImages(imageUrls);
        } else {
          console.warn("No hero images found in database");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("portofolio")
        .select("id, image_1, client_name, judul, slug");
      if (!error && data) setProjectCards(data);
    };

    timer = setTimeout(() => setIsLoading(false), 3000);
    fetchData();
    fetchProjects();
    return () => clearTimeout(timer);
  }, []);

  // Initialize carousel after images are loaded
  useEffect(() => {
    if (heroImages.length > 0 && !isLoading) {
      // Small delay to ensure DOM elements are ready
      const timer = setTimeout(() => {
        initCarousel();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [heroImages, isLoading]);

  // Auto-scrolling client logos
  const clientLogos = [
    { src: "/img/hei.png", alt: "HEI" },
    { src: "/img/bsi.png", alt: "BSI" },
    { src: "/img/ikram.png", alt: "Ikram" },
    { src: "/img/hijrahfest.png", alt: "Hijrahfest" },
    { src: "/img/laukstory.png", alt: "Laukstory" },
    { src: "/img/ocula.png", alt: "Ocula" },
  ];

  return (
    <>
      <Head>
        <title>Be The Game Changer With One Stop Digi-Solution</title>
        <link rel="icon" href="img/icon-gradientbg-rgb.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {isLoading && <Loader />}
      <div style={{ display: isLoading ? "none" : "block" }}>
        <section className="hero-section" id="home">
          <header className="hero-header">
            <div className="hero-content" id="carouselSlides">
              {/* Slides generated dynamically */}
              {heroImages.map((imageUrl, index) => (
                <div
                  className={`slide ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="hero-image-wrapper">
                    <Image
                      src={imageUrl}
                      alt={`Hero Image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </header>
          <div className="hero-navigation">
            <Image
              src="/img/Arrow-left.png"
              alt="Left Arrow"
              width={40}
              height={40}
              className="arrow-icon"
              id="prevSlide"
            />
            <Image
              src="/img/Arrow-right.png"
              alt="Right Arrow"
              width={40}
              height={40}
              className="arrow-icon"
              id="nextSlide"
            />
          </div>
        </section>

        {/* Landing Page End */}

        {/* Section 1 */}
        <section className="section1">
          <div className="container-section1" data-animate="fadeIn">
            {/* Left Side */}
            <div className="left">
              <h1>
                Bringing Vision to Life,
                <br />
                Delivering Solutions.
              </h1>
              <p>
                Kami membangun kepercayaan dan memperkuat identitas. Dengan
                menggabungkan teknologi terkini dan inovasi kreatif, kami
                meningkatkan efektivitas serta jangkauan kampanye transformatif.
                Komitmen kami untuk memahami setiap kebutuhan unik memastikan
                bahwa setiap solusi yang kami hadirkan memberikan dampak nyata,
                beresonansi dengan audiens Anda, dan mendorong pertumbuhan yang
                berkelanjutan.
              </p>
              <Link href="https://wa.me/6281213957471" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="btn-idea" data-animate="fadeIn">
                    <span className="idea-text">Tell Us Your Idea</span>
                  </button>
                </a>
              </Link>
            </div>

            {/* Right Side */}
            <div className="right">
              <div className="item">
                <div className="icon">
                  <Icon path={mdiCheckCircleOutline} size={1.2} />
                </div>
                <div className="text">
                  <h3>Were a proven partner</h3>
                  <p>
                    lebih dari 100 brand telah sukses <br></br> berkembang
                    bersama kami
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <Icon path={mdiReload} size={1} />
                </div>
                <div className="text">
                  <h3>We Make Their Brand Speak</h3>
                  <p>
                    Mengubah brand menjadi suara yang <br></br>kuat dan
                    berpengaruh.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <Icon path={mdiAccountHeartOutline} size={1.2} />
                </div>
                <div className="text">
                  <h3>We Create Loyalist</h3>
                  <p>
                    Membangun hubungan emosional <br></br>yang menciptakan
                    pelanggan setia.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <Icon path={mdiChartLine} size={1.2} />
                </div>
                <div className="text">
                  <h3>We Increase Value</h3>
                  <p>
                    Mengoptimalkan strategi untuk<br></br> meningkatkan daya
                    saing dan nilai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End*/}

        {/* Section 3 */}
        <section className="section3">
          <div className="wrapper" data-animate="fadeInUp">
            <h2 className="judul">
              Be the <span className="highlight">Game Changer</span> with <br />
              <span className="highlight">One Stop</span> Digi-Solution.
            </h2>
            <div className="visual" data-animate="fadeInUp">
              <Image
                src="/img/light.png"
                width={800}
                height={500}
                alt="Digital Solution Illustration"
              />
            </div>
            <p className="description" data-animate="fadeInUp">
              Kami adalah mitra inovatif yang siap membawa bisnis Anda ke era
              digital dengan teknologi mutakhir. Berbasis di Jakarta, Akaal
              menghadirkan solusi terbaik dalam digital marketing, branding
              kreatif, IT solutions, dan AI automation yang dirancang khusus
              untuk memenuhi kebutuhan unik setiap klien. Sebagai partner
              strategis, kami berkomitmen untuk mendorong kesuksesan digital
              Anda melalui keahlian, kreativitas, dan teknologi terbaru.
            </p>
            <Link
              href="/about"
              className="btn btn-primary"
              data-animate="fadeInUp"
            >
              About AKAAL
            </Link>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section4">
          <div className="content" data-animate="fadeInUp">
            <Image
              src="/img/AksessLogo.png"
              alt="Aksess Logo"
              width={144}
              height={37}
              className="logo"
            />

            <h2 className="heading">
              The Ultimate Ticketing Solution for <br />
              Seamless Events.
            </h2>
            <p className="subheading">
              Kelola dan jual tiket event dengan lebih mudah, cepat, dan aman
              dengan AKSESS—platform ticketing inovatif yang dirancang untuk
              penyelenggara event modern.
            </p>

            <div className="features">
              <div className="feature">
                <Icon path={mdiTicketConfirmation} size={1} />
                <div>
                  <h4>Pemesanan Tiket Mudah</h4>
                  <p>Sistem whitelabel dengan kategori tiket yang fleksibel</p>
                </div>
              </div>

              <div className="feature">
                <Icon path={mdiViewGridOutline} size={1} />
                <div>
                  <h4>Dashboard Manajemen</h4>
                  <p>
                    Pantau penjualan, pemesanan, dan check-in dalam satu tempat
                  </p>
                </div>
              </div>

              <div className="feature">
                <Icon path={mdiCreditCardOutline} size={1} />
                <div>
                  <h4>Pembayaran Terintegrasi</h4>
                  <p>
                    Dukungan berbagai metode pembayaran yang aman dan efisien
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-aksess-wrapper">
              <a href="#aksess" className="btn">
                Jelajah AKSESS
              </a>
            </div>
          </div>
        </section>
        {/* New Projects Section */}
        <section className="latest-projects-section">
          <div className="latest-projects-header">
            <div className="latest-projects-desc">
              Kami telah berkolaborasi dengan berbagai brand, menghadirkan solusi digital yang memperkuat identitas dan memperluas jangkauan mereka.
            </div>
            <h2 className="latest-projects-title">
              Our Latest <span className="highlight">Projects.</span>
            </h2>
          </div>
          <div className="latest-projects-grid">
            {projectCards.length > 0 ? (
              projectCards.slice(0, 9).map((card) => <ProjectCard key={card.id} data={card} section="latest" />)
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="clients-section">
            <div className="clients-title">
              Clients <span>and Partners</span>
            </div>
            <hr className="clients-line" />
            <div className="clients-scroll-container">
              <div className="clients-scroll">
                {/* First set of logos */}
                {clientLogos.map((logo, idx) => (
                  <img
                    key={`${logo.src}-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo"
                  />
                ))}
                {/* Second set for seamless loop */}
                {clientLogos.map((logo, idx) => (
                  <img
                    key={`${logo.src}-duplicate-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo"
                  />
                ))}
                {/* Third set to ensure no gaps */}
                {clientLogos.map((logo, idx) => (
                  <img
                    key={`${logo.src}-triplicate-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
