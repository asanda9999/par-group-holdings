import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1e3d] to-[#0b1324] text-white">  
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-base font-semibold">ParEquity Group</h3>
            <p className="mt-2 text-sm text-white/80 max-w-sm">
              A focused investment group with three distinct mandates.
            </p>
            <p className="mt-2 text-sm text-white/80 max-w-sm">
              ParEquity | Anthuri Fund | Parvest
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold">Contact Us</h3>
            <p className="text-sm text-white/80">
              <a href="tel:+27123456789" className="hover:text-white transition-colors">
                +27 21 493 2767
              </a>
            </p>
            <p className="text-sm text-white/80">
              <a href="mailto:info@parring.co.za" className="hover:text-white transition-colors">
                info@parring.co.za
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-white/80 text-center">
            © {new Date().getFullYear()} ParEquity Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
