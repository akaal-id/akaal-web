"use client";

import React from 'react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiWhatsapp, mdiEmail } from "@mdi/js";
import ProjectCard from "../../../components/ProjectCard";

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [projectData, setProjectData] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      // Fetch current project data
      const { data: project, error } = await supabase
        .from("portofolio")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching project:", error);
      } else {
        setProjectData(project);
      }

      // Fetch other projects (excluding current one)
      const { data: projects } = await supabase
        .from("portofolio")
        .select("id, image_1, client_name, judul, slug")
        .neq("slug", slug)
        .limit(3);

      setOtherProjects(projects || []);
    };

    fetchData();
  }, [slug]);

  if (!projectData) return <div>Loading...</div>;

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
              <div className="client-name">{projectData.client_name}</div>
              <div className="service-type">{projectData.judul}</div>
            </div>
          </div>

          <Link href="/showcase" className="showcase-button" legacyBehavior>
            <div className="button-text">Showcase</div>
          </Link>
        </div>

        <div className="showcase-subtitle">
          <p className="description">{projectData.description}</p>
        </div>
      </div>
      <div className="image-section">
        {projectData.image_2 && (
          <div className="data-img-wrapper">
            <img className="img" alt="Project" src={projectData.image_2} />
          </div>
        )}

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
              {otherProjects.length > 0 ? (
                otherProjects.map((card) => (
                  <ProjectCard key={card.id} data={card} />
                ))
              ) : (
                <p>No other projects found</p>
              )}
            </div>
          </div>
        </section>
        <section className="section-home-contact">
          <Link href="/porto-showcase" className="btn btn-primary">
            Back to Showcase
          </Link>
        </section>
      </div>
    </>
  );
}