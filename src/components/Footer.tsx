import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-bold text-cta">
            SYED<span className="text-white"> MURTAZA.</span>
          </Link>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
            © {new Date().getFullYear()} Syed Murtaza Ali. All rights reserved.
          </p>
        </div>

        <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> by Syed Murtaza Ali
        </div>
      </div>
    </footer>
  );
};

export default Footer;
