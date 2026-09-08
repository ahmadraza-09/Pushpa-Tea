import { ArrowRight } from 'lucide-react';
import { giftHampers } from '../data';
import { whatsappLink } from '../utils/whatsapp';
import Page from '../components/Page';
const Gifts=()=> <Page title="Gift hampers" eyebrow="Share a little warmth" intro="Curated tea hampers for the people you love. Beautifully packaged, thoughtfully chosen."><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{giftHampers.map((hamper)=><div key={hamper.id} className="overflow-hidden rounded-[24px] border border-[#e2d8c0] bg-[#faf8f1]"><img src={hamper.image} alt={hamper.name} className="h-56 w-full object-cover"/><div className="p-6"><h3 className="font-serif text-2xl font-bold">{hamper.name}</h3><p className="mt-2 text-sm text-[#718073]">{hamper.contents}</p><p className="mt-4 text-lg font-bold">₹{hamper.price}</p><a href={whatsappLink(`Hello Pushpa Tea, I would like to order the ${hamper.name} gift hamper (₹${hamper.price}).`)} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#bd7628] py-3 text-sm font-bold text-white">Order on WhatsApp <ArrowRight size={16}/></a></div></div>)}</div></Page>;
export default Gifts;
