import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Leaf,
  Star,
  Thermometer,
  Timer,
  Truck,
} from "lucide-react";

import {
  articles,
  brewGuides,
  homeStats,
  products,
  testimonials,
  siteConfig,
} from "../data";

import ArticleCard from "../components/ArticleCard";
import ProductCard from "../components/ProductCard";


const Home = () => {
  return (
    <>
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-24 lg:pt-20">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#e9d7a8]/30 blur-3xl" />
        <div className="relative z-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-[#b66c20]">
            <span className="h-px w-8 bg-[#b66c20]" /> A cup full of home
          </p>
          <h1 className="max-w-xl font-serif text-[54px] font-bold leading-[.96] tracking-[-.04em] sm:text-7xl lg:text-[88px]">
            Tea that carries{" "}
            <em className="font-normal text-[#b66c20]">a little India</em> in
            every sip.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#5c6c5e]">
            Thoughtfully sourced leaves, time-honoured recipes and the warmth of
            an Indian morning. Meet your new daily ritual.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-[#bd7628] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#bd7628]/20 transition hover:-translate-y-0.5"
            >
              Explore our teas <ArrowRight size={17} />
            </Link>
            <Link
              to="/about"
              className="text-sm font-bold underline decoration-[#d8b66a] underline-offset-8"
            >
              Our story
            </Link>
          </div>
          <div className="mt-12 flex gap-8 border-t border-[#e1d6b9] pt-6 text-xs text-[#607161]">
            {homeStats.map((stat) => (
              <div key={stat.label}>
                <strong className="block font-serif text-2xl">
                  {stat.value}
                </strong>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px] lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[48%] border border-[#d4b568]/40 lg:-inset-8" />
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[48%] bg-gradient-to-br from-[#1a4a30] via-[#234e49] to-[#102e20] shadow-2xl">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
              src="https://images.pexels.com/photos/38467899/pexels-photo-38467899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Tea gardens"
            />
            <div className="relative z-10 text-center">
              <Leaf
                className="mx-auto mb-4 h-16 w-16 text-[#d9b45b]"
                strokeWidth={1}
              />
              <p className="font-serif text-5xl font-bold leading-none text-[#f6e8bc]">
                Pushpa
              </p>
              <p className="mt-2 font-serif text-lg italic text-[#d9b45b]">
                Tea Co.
              </p>
              <div className="mx-auto mt-5 h-px w-16 bg-[#d9b45b]/50" />
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#b8c6a4]">
                Since {siteConfig.foundedYear} · India
              </p>
            </div>
          </div>
          <div className="absolute -bottom-3 -left-4 flex rotate-[-7deg] items-center gap-2 rounded-full border border-[#dfbd70] bg-[#f8f2dd] px-4 py-2.5 text-xs font-bold text-[#6f4c1f] shadow-md">
            <Leaf size={15} /> From garden to ghar
          </div>
        </div>
      </section>
      <section className="border-y border-[#e5d9bd] bg-[#f3eddb] px-5 py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 text-center text-xs font-semibold text-[#526657] sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2">
            <Leaf size={17} className="text-[#bb7929]" /> Handpicked leaves
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck size={17} className="text-[#bb7929]" /> Freshly packed
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check size={17} className="text-[#bb7929]" /> 100% natural
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star size={17} className="text-[#bb7929]" /> 4.9/5 rating
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mb-9 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#b66c20]">
              Find your perfect cup
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              The Pushpa collection
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-bold text-[#b66c20] sm:flex"
          >
            Shop all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#183d2c] px-5 py-20 text-[#f8efcf] lg:px-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/35491392/pexels-photo-35491392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative mx-auto max-w-sm">
            <div className="aspect-square rounded-full border border-[#cfa44d]/50 p-4">
              <div className="flex h-full items-center justify-center rounded-full bg-[#24543a]/90 p-8 text-center">
                <div>
                  <Leaf
                    className="mx-auto mb-4 h-12 w-12 text-[#d9b45b]"
                    strokeWidth={1}
                  />
                  <p className="font-serif text-4xl leading-none">
                    Every leaf
                    <br />
                    <em className="font-normal text-[#dfb55a]">has a story.</em>
                  </p>
                  <span className="mt-5 block text-[10px] font-bold uppercase tracking-[.25em] text-[#b8c6a4]">
                    Since {siteConfig.foundedYear} · India
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#d5ae57]">
              Our story
            </p>
            <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Rooted in tradition.
              <br />
              <span className="font-normal text-[#d9b45b]">
                Made for today.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#c8d3bc]">
              Pushpa began with a simple belief: that a good cup of tea can
              bring people closer. We work with tea-growing families across
              India to find expressive leaves, then blend them with care in
              small batches.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d5ae57] px-5 py-3 text-sm font-bold text-[#f4dc9c]"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#b66c20]">
            Brewing guides
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Brew it right, every time
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#70806e]">
            A few simple steps between you and a perfect cup.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brewGuides.slice(0, 3).map((guide) => (
            <Link
              key={guide.id}
              to="/brewing"
              className="rounded-2xl border border-[#e2d8c0] bg-[#f3eddb] p-6 transition hover:border-[#b6792a]"
            >
              <h3 className="font-serif text-2xl font-bold">{guide.name}</h3>
              <p className="mt-1 text-xs text-[#8a9a87]">{guide.tea}</p>
              <div className="mt-4 flex gap-4 text-xs text-[#607161]">
                <span className="flex items-center gap-1">
                  <Thermometer size={14} className="text-[#bb7929]" />
                  {guide.temp}
                </span>
                <span className="flex items-center gap-1">
                  <Timer size={14} className="text-[#bb7929]" />
                  {guide.time}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/brewing"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b66c20]"
        >
          See all brewing guides <ArrowRight size={16} />
        </Link>
      </section>
      <section className="bg-[#eee5cc] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#b66c20]">
              Loved by 12,000+ homes
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              What our family says
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-[#d9ceb3] bg-[#faf8f1] p-6"
              >
                <div className="flex gap-1 text-[#bc7925]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#5c6c5e]">
                  "{t.text}"
                </p>
                <p className="mt-4 font-serif text-lg font-bold">{t.name}</p>
                <p className="text-xs text-[#8a9a87]">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mb-9 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#b66c20]">
              Steeped in thought
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              From our journal
            </h2>
          </div>
          <Link
            to="/journal"
            className="hidden text-sm text-[#70806e] sm:block"
          >
            Stories, recipes & slow living
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;