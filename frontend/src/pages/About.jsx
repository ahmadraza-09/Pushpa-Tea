import { Leaf } from 'lucide-react';
import { aboutStats, aboutValues } from '../data';
import Page from '../components/Page';

const About = () => (
  <Page title="Rooted in tradition. Made for today." eyebrow="Our story" intro="Pushpa began with a simple belief: that a good cup of tea can bring people closer.">
    <div className="grid gap-10 lg:grid-cols-2">
      <img src="https://images.pexels.com/photos/38467899/pexels-photo-38467899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Tea plantation in India" className="h-[420px] w-full rounded-[28px] object-cover"/>
      <div className="flex flex-col justify-center">
        <p className="text-base leading-8 text-[#5c6c5e]">We work with tea-growing families across India to find expressive leaves, then blend them with care in small batches. From the rain-washed hills of Assam to the high, cool gardens of Darjeeling, every Pushpa leaf is picked for character.</p>
        <p className="mt-5 text-base leading-8 text-[#5c6c5e]">The result is tea with a sense of place — honest, full of character and always best shared. A little India, in every sip.</p>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#e1d6b9] pt-6 text-xs text-[#607161]">{aboutStats.map((stat)=><div key={stat.label}><strong className="block font-serif text-2xl text-[#18372a]">{stat.value}</strong>{stat.label}</div>)}</div>
      </div>
    </div>
    <div className="mt-16 grid gap-6 sm:grid-cols-3">{aboutValues.map((item)=><div key={item.title} className="rounded-2xl border border-[#e2d8c0] p-6"><Leaf className="mb-4 text-[#b6792a]" size={24}/><h3 className="font-serif text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#718073]">{item.text}</p></div>)}</div>
  </Page>
);
export default About;
