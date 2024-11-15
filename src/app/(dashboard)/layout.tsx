import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT PANEL - link to Home and menu sidebar*/}
      <div className="left w-[12%] md:w[10%] lg:w[8%] xl:w-[15%] px-2 py-3 mt-4">
        <Link href="/" className="flex justify-center items-center gap-1">
          <Image src='/logo.png' alt='logo' width={32} height={32}/>
          <span className="hidden lg:block text-lg font-semibold">SchoolSync</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT PANEL - navbar and dashboard panels*/}
      <div className="right w-[88%] md:w[90%] lg:w[92%] xl:w-[85%] p-3 bg-[#f7f8fa] overflow-y-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
