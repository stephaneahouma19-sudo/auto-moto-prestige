export function PhoneButton({ phone, label = 'Appeler' }: { phone: string; label?: string }) {
  if (!phone.trim()) return null;
  return <a href={`tel:${phone.replace(/[\s()-]/g, '')}`}>{label}</a>;
}
