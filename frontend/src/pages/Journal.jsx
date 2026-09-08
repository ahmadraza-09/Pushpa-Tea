import { articles } from '../data';
import ArticleCard from '../components/ArticleCard';
import Page from '../components/Page';
const Journal=()=> <Page title="From our journal" eyebrow="Steeped in thought" intro="Brewing rituals, garden stories and the small pleasures that make a day feel warmer."><div className="grid gap-8 md:grid-cols-3">{articles.map((article)=><ArticleCard key={article.id} article={article}/>)}</div></Page>;
export default Journal;
