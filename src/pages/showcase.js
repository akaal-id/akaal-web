"use client";
import React from 'react'; // Added React import
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../config/supabaseClient";
import ProjectCard from "../../components/ProjectCard";
import useClientSide from '../hooks/useClientSide';
import { initCarousel } from "../../utils/carousel";
import Icon from "@mdi/react";
import { mdiWhatsapp, mdiEmail } from "@mdi/js";

export default function Showcase() {
  const [cards, setCards] = useState([]);
  const isClient = useClientSide();

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from("portofolio")
        .select("id, image_1, client_name, judul, slug");
      
      if (!error) setCards(data);
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (isClient) {
      initCarousel();
      // Removed undefined cleanupCarousel
      return () => {
        // Add cleanup logic here if needed
      };
    }
  }, [isClient]);

  return (
    <>
      <div className="showcase-container">
        <div className="showcase-title">
          <div className="showcase-left">
            <div className="AKAAL-agency">
              AKAAL
              <br />
              Agency
            </div>

            <div className="rectangle"></div>

            <div className="showcase-info">
              <div className="client-name">PT. XYZ</div>
              <div className="service-type">Social Media and Branding</div>
            </div>
          </div>

          <Link href="/showcase" className="showcase-button">
            <div className="button-text">Showcase</div>
          </Link>
        </div>

        <div className="showcase-subtitle">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      
      <div className="image-section">
        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>

        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>

        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>
        
        <section className="section-home-contact">
          <div className="home-contact-container">
            <div className="home-contact-text-container">
              <div style={{
                display: "flex",
                alignItems: "baseline",
                flexWrap: "nowrap",
              }}>
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
                  <button className="home-contact-button">
                    Tell Us Your Idea
                  </button>
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

            <div className="other-left">
              <h3>Other Projects</h3>
            </div>
            <div className="card-grid">
              {cards.length > 0 ? (
                cards.slice(0, 3).map((card) => <ProjectCard key={card.id} data={card} />)
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
        
        <section className="section-home-contact">
          <Link href="/showcase" className="btn btn-primary">
            Back to Showcase
          </Link>
        </section>
      </div>
    </>
  );
}