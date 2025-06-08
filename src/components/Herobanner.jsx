function HeroBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-primary to-secondary text-textLight px-4 py-16 md:py-24 mb-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Avatar Placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-sm text-white font-mono text-center">
          Patrick
          <br />
          avatar
          <br />
          placeholder
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patrick Røthe</h1>
          <p className="text-lg md:text-xl font-light mb-3">
            Front-End Developer focused on usability, clean code and structure.
          </p>
          <p className="max-w-xl text-sm md:text-base font-light text-textLight/90">
            I’m currently studying at Noroff and using this portfolio to
            document my learning journey and showcase my progress. I plan to
            keep improving over the summer and polish both the design and
            technical details of all projects. And build new ones to increase my
            technical capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
