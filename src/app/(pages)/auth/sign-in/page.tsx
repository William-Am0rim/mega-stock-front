import { SignInForm } from "./form";
import Image from "next/image";

const SignInPage = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="hidden lg:flex h-full w-full relative">
          <Image src="/assets/stock.jpg" alt="Login Background" fill />
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <div className="flex flex-col items-center gap-4 w-105 px-8">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={200}
              height={60}
      
            />
            <h2 className="text-2xl font-bold">Estoque Mega Thorra</h2>
            <h2 className="text-xl font-medium">Entrar</h2>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
