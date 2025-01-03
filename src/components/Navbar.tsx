import Link from "next/link";
import { AlignRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Define the prop type
interface NavbarProps {
  cart: Product[];  // Define the prop for cart, assuming Product is your type
}

const Navbar = ({ cart }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center gap-[40px] h-[65px] px-10">
      <h1 className="font-extrabold text-4xl">
        F<span className="text-red-500">OO</span>D
      </h1>

      <ul className="hidden lg:flex gap-5">
        <li>
          <Link href="/" className="hover:text-red-500">Home</Link>
        </li>
        <li>
          <Link href="/menu" className="hover:text-red-500">Menu</Link>
        </li>
        <li>
          <Link href="/servicess" className="hover:text-red-500">Services</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
        </li>
      </ul>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>

          <SheetContent>
            <div className="h-full flex flex-col items-center justify-center gap-5 p-6">
              <Link href="/">
                <li className="hover:text-red-500 list-none">Home</li>
              </Link>
              <Link href="/menu">
                <li className="hover:text-red-500 list-none">Menu</li>
              </Link>
              <Link href="/servicess">
                <li className="hover:text-red-500 list-none">Services</li>
              </Link>
              <Link href="/contact">
                <li className="hover:text-red-500 list-none">Contact</li>
              </Link>

              <div className="mt-2 flex flex-col items-center">
                <Link href="/sign">
                  <button className="px-7 py-2 bg-red-500 rounded-[55px]">Sign up</button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex items-center justify-center px-4 py-3">
        <Link href="/sign">
          <button className="ml-4 px-7 py-2 bg-red-500 rounded-[55px] text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
