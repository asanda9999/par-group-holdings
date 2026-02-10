interface AboutSectionProps {
  paragraphs: string[];
}

const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
          About Us
        </h2>
        <div className="max-w-3xl space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
