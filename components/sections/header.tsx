import ArrowRight from "@/assets/svgs/arrow-right.svg";
import Logo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/svgs/menu.svg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="hidden lg:flex text-white/60">
          This page is included in a free SaaS Website Kit.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>View the complete Kit</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
