const Page = ({ title, eyebrow, intro, children }) => (
  <main className="mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-10 lg:pt-20">
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#b66c20]">{eyebrow}</p>
      <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">{title}</h1>
      <p className="mt-5 text-base leading-7 text-[#607161]">{intro}</p>
    </div>
    {children}
  </main>
);
export default Page;
