export function makeWhatsAppLink(number: string, message: string): string | null {
  const normalized = number.replace(/\D/g, '');
  return normalized ? `https://wa.me/${normalized}?text=${encodeURIComponent(message)}` : null;
}

export function makePhoneLink(number: string): string | null {
  const normalized = number.trim().replace(/[\s()-]/g, '');
  return normalized ? `tel:${normalized}` : null;
}
