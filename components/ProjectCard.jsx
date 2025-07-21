// components/ProjectCard.jsx
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ data }) {
  return (
    <Link
      href={`/articles/${data.slug}`}
      className="project-card-link">
      <div className="project-card">
        <div className="card-image-container">
          <Image
            src={data.image_1}
            width={632}
            height={400}
            alt={data.client_name}
            className="project-card-image"
          />
          <div className="card-overlay"></div>
          <div className="card-content">
            <div className="content-left">
              <p className="client-name">{data.client_name || "PT. XYZ"}</p>
              <p className="service-type">{data.judul || "Social Media and Branding"}</p>
            </div>
            <div className="content-right">
              <div className="agency-wrapper">
                <p className="agency-name">
                  AKAAL<br />Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// PropTypes validation
ProjectCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image_1: PropTypes.string.isRequired,
    client_name: PropTypes.string,
    judul: PropTypes.string
  }).isRequired
};

// Default props
ProjectCard.defaultProps = {
  data: {
    client_name: "PT. XYZ",
    judul: "Social Media and Branding"
  }
};