import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex gap-2 items-center mb-6">
              <div className="w-6 h-8">
                <img src="/Background.png" alt="FinAI logo" />
              </div>
              <span className="text-[#0F172A] font-bold text-xl tracking-tight">
                FinAI
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              A simple place to understand your money better – track what comes
              in, what goes out, and get friendly AI help to reach your goals.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-[#2563EB] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#0F172A] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#0F172A] mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#0F172A] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Developer API
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#0F172A] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} FinAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <span>Brought to you by Abdulhamid Eniola Adebimpe</span>
            <span>•</span>
            <span>Ibadan,Nigeria </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
