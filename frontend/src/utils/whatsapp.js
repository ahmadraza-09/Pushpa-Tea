import { siteConfig } from '../data';

export const whatsappLink = (message = '') =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
