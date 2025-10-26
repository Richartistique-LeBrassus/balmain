"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const footerSections = [
  {
    title: "Client Services",
    links: [
      "Contact Us",
      "Book an Appointment",
      "FAQs",
      "Orders and Shipping",
      "Returns and Refunds",
      "Track your order",
      "Return Form",
      "Login to your account",
    ],
  },
  {
    title: "Balmain Services",
    links: ["Corporate", "Store Locator", "Careers", "Sustainability", "Maison Balmain"],
  },
  {
    title: "Legal & Privacy",
    links: [
      "Privacy Policies",
      "Cookie Policy",
      "Cookies Settings",
      "Responsible disclosure policy",
      "Terms and conditions of sale",
      "Website terms of use",
    ],
  },
  {
    title: "Compliance",
    links: ["Company information", "Whistleblowing"],
  },
];

export default function FooterComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-rose-50 text-neutral-900 px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7">
        {footerSections.map((section, i) => (
          <div key={i} className="border-b border-rose-100 lg:border-none">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-3 text-left lg:cursor-default lg:py-0"
            >
              <span className="text-base font-semibold tracking-wide uppercase">
                {section.title}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 lg:hidden ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`overflow-hidden transition-all duration-300
                space-y-5 lg:block uppercase ${
                openIndex === i ? "max-h-96" : "max-h-0 lg:max-h-none"
              }`}
            >
              {section.links.map((link, j) => (
                <li key={j} className="py-1 lg:py-1.5 text-xs hover:text-rose-800 
                transition-colors font-bold my-5">
                  <a href="#" className="block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-xs text-neutral-600 uppercase">
        © {new Date().getFullYear()} Concept reimagined for portfolio purposes © Richartistique Le Brassus. Media & Original design © Balmain & respective owners
      </div>
    </footer>
  );
}