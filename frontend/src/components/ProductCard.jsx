import { Link } from 'react-router-dom';
import { Leaf, Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { add } = useCart();
  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden rounded-[22px]" style={{ background: product.color }}>
        <div className="flex aspect-[.9] flex-col justify-between p-5">
          <span className="self-start rounded-full bg-[#f9edc8] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#78511f]">{product.badge}</span>
          <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay transition duration-500 group-hover:scale-105" />
          <div className="relative z-10 mx-auto text-center">
            <div className="mb-2 font-serif text-[26px] font-bold text-[#f6e8bc]">Pushpa</div>
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e4bb63]/70">
              <Leaf className="h-12 w-12 text-[#e4bb63]" strokeWidth={1.2} />
            </div>
            <div className="mt-3 font-serif text-lg font-bold tracking-[.1em] text-white">{product.name.replace('Pushpa ', '').toUpperCase()}</div>
          </div>
          <div className="relative z-10 flex items-center justify-between text-xs font-semibold text-[#f9e4ad]">
            <span>Single estate</span><span className="rounded-full border border-white/30 px-2 py-1">{product.size.split(' ')[0]}</span>
          </div>
        </div>
      </Link>
      <div className="px-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-xl font-bold hover:text-[#b66c20]">{product.name}</h3>
            <p className="mt-1 text-xs text-[#718073]">{product.type}</p>
          </Link>
          <button onClick={() => add(product)} className="rounded-full bg-[#f0e5c8] p-2.5 text-[#9a601f]" aria-label={`Add ${product.name} to bag`}><Plus size={18} /></button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-bold">₹{product.price}</span>
          {product.compareAt && <del className="text-xs text-[#9ba294]">₹{product.compareAt}</del>}
          <span className="ml-auto flex items-center gap-1 text-[11px] text-[#bc7925]"><Star size={12} fill="currentColor" />4.9</span>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
