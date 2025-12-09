import React from "react";

const SiteFooter = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10 text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-10">
        {/* Top columns */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 text-sm">
          {/* Brands */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Brands</h3>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer">Soundscapes</li>
              <li className="hover:text-white cursor-pointer">Sync Licensing</li>
            </ul>
          </div>

          {/* Artists */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Artists</h3>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer">e-Press Kit</li>
              <li className="hover:text-white cursor-pointer">Distribute</li>
              <li className="hover:text-white cursor-pointer">Promote</li>
              <li className="hover:text-white cursor-pointer">Broadcast on TV</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">
                Community Guidelines
              </li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Discover</h3>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer">Artists</li>
              <li className="hover:text-white cursor-pointer">Playlists</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Contact Us
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📧</span>
                  <a
                    href="mailto:contact@songdew.com"
                    className="hover:text-white break-all"
                  >
                    contact@songdew.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <p className="text-white/80 text-xs leading-relaxed">
                    Plot No 448A, Enkay Square<br />
                    Songdew Media Pvt Ltd.,<br />
                    Udyog Vihar Phase V,<br />
                    Gurgaon (Haryana) – 122022
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">
                Visit Us
              </h3>
              <div className="flex items-center gap-3 text-xl">
                <button className="hover:text-white">📸</button>
                <button className="hover:text-white">📘</button>
                <button className="hover:text-white">❌</button>
                <button className="hover:text-white">▶️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-700 text-white font-bold text-[11px] rounded">
              SONGDEW
            </span>
          </div>
          <p>© 2025 Copyright Songdew Media Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
