import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data';
import Page from '../components/Page';
import NotFound from './NotFound';
const ArticleDetail=()=>{const {id}=useParams(); const article=articles.find((item)=>item.id===id); if(!article)return <NotFound/>; return <Page title={article.title} eyebrow={`${article.category} · ${article.date}`} intro={article.read}><div className="mx-auto max-w-3xl"><img src={article.image} alt={article.title} className="mb-8 h-72 w-full rounded-[28px] object-cover sm:h-96"/>{article.body.split('\n\n').map((para,i)=><p key={i} className="mb-6 text-lg leading-9 text-[#536657]">{para}</p>)}<Link to="/journal" className="mt-8 inline-flex items-center gap-2 font-bold text-[#b66c20]">More from the journal <ArrowRight size={16}/></Link></div></Page>};
export default ArticleDetail;
