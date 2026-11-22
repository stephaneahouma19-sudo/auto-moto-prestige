import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { makeWhatsAppLink } from '../../utils/contactLinks';

// À renseigner avec le numéro officiel au format international, sans + ni espaces.
export const BUSINESS_WHATSAPP_NUMBER = '';

export function WhatsAppButton({ vehicleName, floating = false }: { vehicleName?: string; floating?: boolean }) {
  const message = vehicleName ? `Bonjour, je souhaite obtenir des informations sur ${vehicleName}.` : 'Bonjour, je souhaite obtenir des informations sur vos véhicules.';
  const href = makeWhatsAppLink(BUSINESS_WHATSAPP_NUMBER, message);
  const className = floating ? 'whatsapp-button whatsapp-floating' : 'whatsapp-button';
  return href
    ? <a className={className} href={href} target="_blank" rel="noreferrer" aria-label="Nous contacter sur WhatsApp"><MessageCircle aria-hidden="true" />{floating ? 'WhatsApp' : 'Contacter'}</a>
    : <Link className={`${className} contact-fallback`} to={vehicleName ? `/contact?objet=${encodeURIComponent(`Demande au sujet de ${vehicleName}`)}` : '/contact'} aria-label={vehicleName ? `Contacter au sujet de ${vehicleName}` : 'Accéder à la page contact'}><MessageCircle aria-hidden="true" />{floating ? 'Nous contacter' : 'Demander des informations'}</Link>;
}
