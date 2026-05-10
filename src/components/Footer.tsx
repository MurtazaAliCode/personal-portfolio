import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-cta">
            SYED<span className="text-white"> MURTAZA.</span>
          </Link>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {/* Social links placeholder */}
        </div>

        <div className="text-sm text-slate-500 flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by You
        </div>
      </div>
    </footer>
  );
};

export default Footer;
