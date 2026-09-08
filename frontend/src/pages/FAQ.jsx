import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data';
import Page from '../components/Page';
const FAQ=()=>{const[openIndex,setOpenIndex]=useState(0);return <Page title="Frequently asked questions" eyebrow="Good to know" intro="Everything you need to know about ordering, shipping, freshness and our practices."><div className="mx-auto max-w-3xl space-y-3">{faqs.map((faq,i)=><div key={faq.question} className="overflow-hidden rounded-2xl border border-[#e2d8c0] bg-[#faf8f1]"><button onClick={()=>setOpenIndex(openIndex===i?null:i)} className="flex w-full items-center justify-between p-5 text-left"><span className="font-serif text-lg font-bold">{faq.question}</span><ChevronDown size={20} className={`shrink-0 text-[#b66c20] transition ${openIndex===i?'rotate-180':''}`}/></button>{openIndex===i&&<div className="px-5 pb-5 text-sm leading-7 text-[#5c6c5e]">{faq.answer}</div>}</div>)}</div></Page>};
export default FAQ;
