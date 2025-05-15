import { JSX } from "react";

interface ContactCardProps {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ContactCard({ 
  icon, 
  title, 
  children, 
  href,
  className = ""
}: ContactCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <a
          href={href}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-xl"
          aria-label={`${title} - ${typeof children === 'string' ? children : 'Contact information'}`}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return <div className="block rounded-xl">{children}</div>;
  };

  return (
    <Wrapper>
      <div className={`bg-gray-800 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-800/90 hover:border-emerald-800/50 border border-gray-700/50 duration-300 w-full ${className}`}>
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-900/60 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-lg shadow-emerald-900/20">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
            <div className="text-gray-300 text-sm sm:text-base break-words">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
