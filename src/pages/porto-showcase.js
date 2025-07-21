"use client";
import React from 'react'; // Added React import
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../config/supabaseClient";
import Loader from "../../components/Loader";
import ProjectCard from "../../components/ProjectCard";
import useClientSide from '../hooks/useClientSide';
import { initCarousel } from "../../utils/carousel";

export default function Showcase() {
  const isClient = useClientSide();
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
      // Removed cleanupCarousel since it wasn't defined
      return () => {
        // Add any necessary cleanup logic here if needed
      };
    }
  }, [isClient]);

  return (
    <>
      {isLoading && <Loader />}
      <div style={{ display: isLoading ? "none" : "block" }}>
        <section className="hero-section" id="home">
          <header className="hero-header">
            <div className="hero-content" id="carouselSlides">
              <div className="slide active">
                <div className="about-content-image-wrapper">
                  <Image
                    src="/img/turning-ideas.png"
                    alt="Deskripsi Gambar"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="hero-navigation">
            <a href="#card">
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
        <section className="section2" data-animate="fadeInUp">
          <h2 className="section-title" id="card">Our Latest Projects</h2>
          <p className="section-desc">
            Kami telah berkolaborasi dengan berbagai brand, menghadirkan solusi
            digital yang memperkuat identitas dan memperluas jangkauan mereka.
          </p>
        </section>
        <section className="section5">
          <div className="section5-container" data-animate="fadeInUp">
            <div className="card-grid">
              {cards.length > 0 ? (
                cards.map((card) => <ProjectCard key={card.id} data={card} />)
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}