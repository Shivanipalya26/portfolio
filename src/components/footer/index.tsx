import { ArrowUpRight } from "lucide-react";
import footerOptions from "@/config/footer";

const Footer = () => {
  return (
    <div className="relative  overflow-x-clip">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white">&copy; 2025. All rights reserved.</div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {footerOptions.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="inline-flex items-center gap-1.5 transition-transform duration-300 ease-in-out transform  hover:scale-105 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
