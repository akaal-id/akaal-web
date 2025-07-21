'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Kolom 1 */}
          <div className="footer-column">
            <Image
              src="/img/logo-fullcolor-negative-rgb.png"
              alt="Akaal Logo"
              width={130}
              height={40}
              className="footer-logo"
            />
            <p>PT. Asia Karya Lumina</p>
            <p>
              Jl. Gotong Royong | No.56 Rt.004/01, RT.3/RW.1,<br />
              Ragunan, Ps. Minggu, Kota Jakarta Selatan,<br />
              Daerah Khusus Ibukota Jakarta 12550
            </p>
            <p><i className="fas fa-phone-alt"></i>081213957471</p>
            <p><i className="fas fa-envelope"></i>asiakaryalumina@gmail.com</p>
          </div>
  
          {/* Kolom 2 */}
          <div className="footer-column">
            <h4>Asia Karya Lumina</h4>
            <ul>
              <li><Link href="/about">About AKAAL</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Frequently Asked Question</a></li>
            </ul>
          </div>
  
          {/* Kolom 3 */}
          <div className="footer-column">
            <h4>Tentang Event</h4>
            <ul>
              <li><a href="#">Buat Event</a></li>
              <li><a href="#">Biaya</a></li>
              <li><a href="#">Lihat Event</a></li>
              <li><a href="#">S&amp;K Event</a></li>
              <li><a href="#">FAQ Event</a></li>
            </ul>
          </div>
  
          {/* Kolom 4 */}
          <div className="footer-column">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }