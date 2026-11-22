import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [{ to: '/', label: 'Accueil' }, { to: '/catalogue', label: 'Le catalogue' }, { to: '/a-propos', label: 'Notre maison' }, { to: '/contact', label: 'Contact' }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="AUTO MOTO PRESTIGE — accueil"><span className="brand-mark">A<span>·</span>P</span><span className="brand-name">AUTO MOTO <b>PRESTIGE</b></span></Link>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">{links.map(({ to, label }) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Parlons de votre projet <ArrowUpRight size={15} /></Link></nav>
  </div></header>;
}
