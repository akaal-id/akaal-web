'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import React from 'react';

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-container">
        <Link href="/" className="logo" legacyBehavior>
          <Image
            src="/img/logo-fullcolor-negative-rgb.png"
            alt="Logo Akaal"
            width={100}
            height={32}
            priority
          />
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <ul className="mobile-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Akaal</Link></li>
          <li><Link href="/service">Our Services</Link></li>
          <li><Link href="/porto-showcase">Showcase</Link></li>
          <li><Link href="https://wa.me/6281213957471">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
