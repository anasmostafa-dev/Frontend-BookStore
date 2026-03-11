import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <footer id="footer" className="px-6 pt-12 md:px-16 lg:px-36 w-full bg-white text-slate-800 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-12">
        <div className="md:max-w-96">
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
            BOOK<span className="text-logo-gold">STORE</span>
          </h2>

          <p className="mt-6 text-sm text-gray-500 leading-relaxed">
            Your premier destination for curated literature and technical
            guides. We empower readers by providing a seamless shopping
            experience and access to a global collection of titles.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            <Facebook
              size={20}
              className="text-gray-400 hover:text-logo-gold cursor-pointer transition-colors"
            />
            <Instagram
              size={20}
              className="text-gray-400 hover:text-logo-gold cursor-pointer transition-colors"
            />
            <Twitter
              size={20}
              className="text-gray-400 hover:text-logo-gold cursor-pointer transition-colors"
            />
          </div>
        </div>

        
        <div className="flex-1 flex items-start md:justify-end gap-16 md:gap-32">
          <div>
            <h2 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">
              Company
            </h2>
            <ul className="text-sm space-y-3 text-gray-500">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-logo-gold! text-sm! transition-colors! text-gray-500! bg-transparent!"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#books"
                  className="hover:text-logo-gold transition-colors"
                >
                  Browse Books
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  className="hover:text-logo-gold transition-colors"
                >
                  Exclusive Offers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-logo-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">
              Get in touch
            </h2>
            <div className="text-sm space-y-3 text-gray-500">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-logo-gold" /> +201032504598
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-logo-gold" />{" "}
                support@bookstore.com
              </p>
              <div className="mt-4">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                  alt="google play"
                  className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity mb-2 cursor-pointer"
                />
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                  alt="app store"
                  className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 text-xs text-gray-400 font-medium uppercase tracking-tight">
        <p className="text-center">
          Copyright {new Date().getFullYear()} © All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
