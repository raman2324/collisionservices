import logo from "@/assets/logo.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`flex items-center ${className}`} aria-label="Collision Services home">
    <img src={logo} alt="Collision Services by US Auto Supply" className="h-10 w-auto md:h-11" />
  </a>
);
