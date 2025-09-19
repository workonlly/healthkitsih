import { Button } from "@/components/ui/button";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Background/>
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-1/2 text-white px-2 ">
        <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-medium leading-[115%] -tracking-[2%] text-balance scroll-m-20 mb-5">Simple Steps To Better Health</h1>
        <p className="text-center text-sm sm:text-lg tracking-wide mb-5">
          We bring you simple, reliable tools to take control of your well-being. Stay informed, stay healthy—every step of the way
        </p>
        <div className="flex gap-2 w-full justify-center">
          <Button><Link href="/dashboard">Explore</Link></Button>
          <Button variant="secondary"><Link href="/signup">Get Started</Link></Button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
