import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaFacebook
} from 'react-icons/fa';

import {
  footerColumns,
  legalLinks,
  siteConfig,
  socialLinks,
} from '../data';

import Logo from '../assets/logo.png'

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

const Footer = () => (
  <footer className="bg-[#102c20] px-5 pb-8 pt-16 text-[#d4ddca] lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 text-[#f3d98f]">
          {/* <Leaf size={28} />

          <span className="font-serif text-2xl font-bold">
            Pushpa
            <span className="text-[#c47a2b]">.</span>
          </span> */}

          <img src={Logo} alt="" className='w-20 h-auto'/>
        </div>

        <p className="mt-4 max-w-xs text-sm leading-6 text-[#9aab97]">
          {siteConfig.tagline}
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex gap-2.5">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon] ?? ArrowRight;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#486450] transition hover:border-[#d4ae57] hover:text-[#d4ae57]"
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Columns */}
      {footerColumns.map((col) => (
        <div key={col.title}>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#e0bd68]">
            {col.title}
          </h3>

          <div className="flex flex-col gap-3 text-sm text-[#afbdab]">
            {col.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition hover:text-[#d4ae57]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Newsletter */}
      <div className="rounded-2xl border border-[#345440] bg-[#183d2c] p-5">
        <h3 className="font-serif text-xl text-[#f4dc9c]">
          {siteConfig.newsletterTitle}
        </h3>

        <p className="mt-3 text-xs leading-5 text-[#9aab97]">
          {siteConfig.newsletterText}
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 flex rounded-full bg-[#faf8f1] p-1"
        >
          <input
            type="email"
            required
            aria-label="Email address"
            placeholder="Your email"
            className="min-w-0 flex-1 bg-transparent px-3 text-xs text-[#18372a] outline-none"
          />

          <button
            type="submit"
            className="flex items-center gap-1 rounded-full bg-[#bd7628] px-3 py-2 text-[10px] font-bold text-white"
          >
            Join
            <ArrowRight size={12} />
          </button>
        </form>
      </div>
    </div>

    {/* Copyright */}
    <div className="mx-auto mt-14 max-w-7xl border-t border-[#294837] pt-5">
      <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#708a75] sm:flex-row">
        <span>{siteConfig.copyright}</span>

        <div className="flex gap-5">
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-[#d4ae57]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;