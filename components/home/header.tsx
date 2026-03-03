import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-4 py-4 my-4 ">
      <div className="flex gap-2 bg-[#ffffff]">
        <div className="flex gap-2">
          <div className="w-5.4 h-7">
            <img src="/Background.png" alt="FinAI logo" decoding="async" />
          </div>
          <p className="self-end text-[#0F172A] font-bold text-[20px]">
            FinAI
          </p>
        </div>

        <div className="ml-auto flex gap-4 self-end">
          <Link href="/signin">
            <Button
              className="text-[#0F172A] hover:bg-slate-100 bg-[#f1f5f9] font-bold"
            >
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-[#2563EB] hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
