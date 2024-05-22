import Link from "next/link";
import NavbarLogo from "../../../components/uiComponents/NavbarLogo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function page() {
  return (
    <div className="w-full bg-slate-100 p-6 rounded-md shadow-md  max-h-[800px] flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2">
        <div className="max-w-xs mx-auto">
          <NavbarLogo />
          <h2 className="text-lg font-bold mb-4">Forgot password</h2>
          <p className="mb-1">Reset your password here.</p>
          <form>
            <label htmlFor="email" className="block mt-2 text-sm font-bold">
              E-mail
            </label>
            <input
              type="email"
              required
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter your e-mail"
            />
            <Button className="w-full text-white p-2 rounded-md">
              Send code
            </Button>
          </form>
          <Link href="/login" className="block mt-4 text-primary">
            Go back to login
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center max-h-[600px]">
        <Image
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Phone Mockup"
          className="max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default page;