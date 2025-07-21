"use client";

import React from 'react';
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Loader from "../../components/Loader";

// Supabase Client
import { supabase } from "../config/supabaseClient";

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

    timer = setTimeout(() => setIsLoading(false), 3000);
    fetchData();
    return () => clearTimeout(timer);
  }, []);


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

        {/* Section 2 */}
        <section className="section2" data-animate="fadeInUp">
          <h2 className="section-title" data-animate="fadeInUp">
            What We Do: <br></br> Creative. Strategic. Informative.
          </h2>
          <p className="section-desc" data-animate="fadeInUp">
            Solusi digital menyeluruh yang dirancang untuk membentuk masa depan
            bisnis Anda. Kami membaginya menjadi dua pilar utama: Akaal Digital
            untuk transformasi <br></br>
            teknologi, dan Akaal Agency untuk kekuatan strategi serta komunikasi
            brand.
          </p>

          <div className="home-digi-container" data-animate="fadeInUp">
            <div className="home-digi-left">
              <Image
                src="/img/icon-white.png"
                alt="Service Logo"
                className="service-logo"
                width={48}
                height={48}
              />
              <h3>Our Services:</h3>
              <h2>
                <em>AKAAL DIGITAL & TECH</em>
              </h2>
              <p>
                Solusi berbasis teknologi yang dirancang untuk memperkuat
                fondasi digital bisnis Anda, mengoptimalkan operasional, dan
                menciptakan pengalaman visual yang memikat.
              </p>
            </div>
            <div className="home-digi-right">
              <Image
                src="/img/group51.png"
                alt="Service Illustration"
                className="service-image"
                width={580}
                height={410}
              />
            </div>
            <div className="service-card">
              <FiTrendingUp className="service-icon" size={35} />
              <h4>High-Conversion Landing Pages</h4>
              <p>
                Desain yang responsif dan strategis, dirancang untuk
                meningkatkan penjualan, memperkuat keterlibatan, dan membangun
                koneksi yang lebih dalam dengan audiens Anda.
              </p>
            </div>

            <div className="service-card">
              <FiShield className="service-icon" size={35} />
              <h4>Website Maintenance</h4>
              <p>
                Layanan menyeluruh mencakup pembaruan keamanan, pengecekan
                performa rutin, dan perbaikan bug, agar website Anda tetap
                stabil, cepat, dan aman sepanjang waktu.
              </p>
            </div>

            <div className="service-card">
              <FaCheckCircle className="service-icon" size={30} />
              <h4>Professional UI/UX Design</h4>
              <p>
                Antarmuka yang intuitif dan ramah pengguna, dirancang untuk
                memberikan pengalaman terbaik bagi pengunjung serta mendukung
                pencapaian tujuan bisnis Anda secara efektif.
              </p>
            </div>

            <div className="service-card">
              <BiSearchAlt2 className="service-icon" size={35} />
              <h4>SEO Optimization</h4>
              <p>
                Penerapan strategi kata kunci yang tepat dan penyesuaian konten
                yang relevan untuk meningkatkan visibilitas di search engine
                serta mendatangkan trafik berkualitas ke website.
              </p>
            </div>
          </div>
        </section>
        <section className="section-home-agen">
          <div
            className="home-agen-container"
            data-animate="fadeInUp"
            data-animate-delay="200"
          >
            {/* Top Section */}
            <div className="topSection">
              <div className="imageColumn">
                <Image
                  src="/img/donut.png"
                  alt="Donut"
                  className="donut-img"
                  width={549}
                  height={420}
                />
              </div>
              <div
                className="textColumn"
                data-animate="fadeInUp"
                data-animate-delay="200"
              >
                <Image
                  src="/img/icon-white.png"
                  alt="IconWhite"
                  className="iconwhite-img"
                  width={48}
                  height={48}
                />
                <p
                  className="serviceLabel"
                  data-animate="fadeInUp"
                  data-animate-delay="200"
                >
                  Our Services:
                </p>
                <h2
                  className="agencyTitle"
                  data-animate="fadeInUp"
                  data-animate-delay="200"
                >
                  AKAAL CREATIVE AGENCY
                </h2>
                <p
                  className="agendesc"
                  data-animate="fadeInUp"
                  data-animate-delay="200"
                >
                  Solusi berbasis teknologi yang dirancang untuk memperkuat
                  fondasi digital bisnis Anda, mengoptimalkan operasional, dan
                  menciptakan pengalaman visual yang memikat.
                </p>
              </div>
            </div>

            {/* Card Section */}
            <div className="agencardRow">
              <div className="agencard">
                <FaPaintBrush className="icon" />
                <h3 className="agencardTitle">Branding & Visual Identity</h3>
                <p className="agencardText">
                  Membangun identitas merek yang kuat dan konsisten di setiap
                  titik interaksi.
                </p>
              </div>

              <div className="agencard">
                <FaCameraRetro className="icon" />
                <h3 className="agencardTitle">Creative Content Production</h3>
                <p className="agencardText">
                  Konten visual kreatif yang menarik dan relevan untuk
                  memperkuat pesan brand Anda.
                </p>
              </div>

              <div className="agencard">
                <FaBullhorn className="icon" />
                <h3 className="agencardTitle">Digital Marketing</h3>
                <p className="agencardText">
                  Strategi pemasaran digital yang tepat sasaran untuk menjangkau
                  audiens dan meningkatkan performa bisnis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-home-contact">
          <div className="home-contact-container">
            <div className="home-contact-text-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "nowrap",
                }}
              >
                <div className="home-contact-journey">
                  Start Your Journey With
                </div>
                <div className="home-contact-akaal">AKAAL</div>
              </div>
              <div className="home-contact-description">
                Setiap bisnis punya tantangan dan tujuan unik—kami siap
                mendengarkan dan membantu Anda menemukan solusinya.
              </div>
              <div className="home-contact-action">
                <div className="contact-row">
                  <Link href="https://wa.me/6281213957471" legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-contact-button-link"
                    >
                      <button className="home-contact-button">
                        Tell Us Your Idea
                      </button>
                    </a>
                  </Link>
                  <a
                    href="https://wa.me/6281213957471"
                    className="home-contact-whatsapp"
                  >
                    <span className="home-contact-icon">
                      <Icon path={mdiWhatsapp} size={1.2} />
                    </span>
                    <span className="home-contact-text">+6281213957471</span>
                  </a>
                  <a
                    href="mailto:asiakaryalumina@gmail.com"
                    className="home-contact-email"
                  >
                    <span className="home-contact-icon">
                      <Icon path={mdiEmail} size={1} />
                    </span>
                    <span className="home-contact-text">
                      asiakaryalumina@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-contact-logo-container">
              <Image
                src="/img/icon-white-big.png"
                alt="Akaal Logo"
                fill
                priority
                className="home-contact-logo"
                style={{ marginTop: "-110px" }}
              />
            </div>
          </div>
        </section>
        <div className="home-contact-service-button">
          <Link href="/service" className="btn btn-primary">
            Our Services
          </Link>
        </div>



        {/* Section 2 */}

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
      </div>
    </>
  );
}
