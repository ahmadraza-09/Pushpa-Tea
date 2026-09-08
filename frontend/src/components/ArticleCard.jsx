import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ArticleCard = ({ article }) => (
  <Link to={`/journal/${article.id}`} className="group">
    <div className="relative mb-5 flex aspect-[1.25] items-end overflow-hidden rounded-[20px] bg-[#d9bd77] p-5">
      <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#183d2c]/70 to-transparent" />
      <span className="relative z-10 rounded-full bg-[#f8efcf] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#31543d]">{article.category}</span>
    </div>
    <p className="mb-2 text-xs font-medium text-[#899287]">{article.date}<span className="mx-1">·</span>{article.read}</p>
    <h3 className="font-serif text-2xl font-bold leading-tight transition group-hover:text-[#b66c20]">{article.title}</h3>
    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#b66c20]">Read story <ArrowRight size={15} /></span>
  </Link>
);
export default ArticleCard;
