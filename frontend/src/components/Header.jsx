import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { navLinks, products, siteConfig } from '../data';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { count } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = useMemo(() => query.trim()
    ? products.filter((product) => `${product.name} ${product.type}`.toLowerCase().includes(query.toLowerCase()))
    : [], [query]);

  return (
    <>
      <div className="bg-[#123d29] px-4 py-2 text-center text-[10px] font-bold tracking-[.14em] text-[#f9e7b0]">
        {siteConfig.announcement}<span className="mx-2 text-[#c98d2b]">•</span>{siteConfig.announcementExtra}
      </div>
      <header className="sticky top-0 z-40 border-b border-[#e8dfc8] bg-[#faf8f1]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="font-serif text-[23px] font-bold">Pushpa<span className="text-[#b66c20]">.</span></Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#41604b] lg:flex">
            {navLinks.map((link) => <Link key={link.to} to={link.to} className="hover:text-[#b66c20]">{link.label}</Link>)}
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search products" onClick={() => setSearchOpen((v) => !v)}><Search size={20} strokeWidth={1.8} /></button>
            <Link className="relative" to="/cart" aria-label={`Shopping bag, ${count} items`}>
              <ShoppingBag size={21} strokeWidth={1.8} />
              {count > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c07727] text-[9px] font-bold text-white">{count}</span>}
            </Link>
            <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-[#e8dfc8] bg-[#faf8f1] px-5 py-4">
            <div className="relative mx-auto max-w-2xl">
              <Search className="absolute left-4 top-3.5 text-[#9ba494]" size={18} />
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search our teas..." className="w-full rounded-full border border-[#d9ceb3] bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-[#b6792a]" />
              {query && (
                <div className="absolute left-0 right-0 top-14 z-50 rounded-2xl border border-[#e4dbc7] bg-[#faf8f1] p-2 shadow-xl">
                  {results.length ? results.map((product) => (
                    <button key={product.id} onClick={() => { navigate(`/product/${product.id}`); setSearchOpen(false); setQuery(''); }} className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-[#f1e8d3]">
                      <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg object-cover" />
                      <span><strong className="block font-serif text-lg">{product.name}</strong><small className="text-[#7a877b]">₹{product.price}</small></span>
                    </button>
                  )) : <p className="p-4 text-sm text-[#778277]">No teas found. Try Gold, Masala or Green.</p>}
                </div>
              )}
            </div>
          </div>
        )}

        {menuOpen && (
          <nav className="border-t border-[#e8dfc8] bg-[#faf8f1] px-5 py-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {[...navLinks,
                {label:'FAQ',to:'/faq'},{label:'Shipping',to:'/shipping'},{label:'Returns',to:'/returns'},
                {label:'Sustainability',to:'/sustainability'},{label:'Gifts',to:'/gifts'}
              ].map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#41604b] hover:bg-[#f1e8d3] hover:text-[#b66c20]">{link.label}</Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      {location.pathname !== '/' && (
        <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#8b662e]"><ArrowLeft size={14}/>Back to home</Link>
        </div>
      )}
    </>
  );
};
export default Header;
