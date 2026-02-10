interface ContactSectionProps {
  divisionName: string;
}

const ContactSection = ({ divisionName }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
          Contact
        </h2>
        <div className="max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-8">
            To learn more about {divisionName} or discuss a potential partnership, please reach out to our team.
          </p>
          <a
            href="mailto:info@paragongroup.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-sm"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
