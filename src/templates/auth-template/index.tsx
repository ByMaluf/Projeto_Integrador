import { PropsWithChildren } from "react";
import Footer from "../../components/footer";

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps) {
  return (
    <header className="min-h-screen flex flex-col">
      <div className="bg-primary flex justify-between p-2">
        <h1 className="text-[30px] text-white font-bold">UnyBay</h1>
        <div></div>
      </div>
      <div className="flex flex-1 flex-col p-4 max-w-[1200px] m-auto justify-center">
        {props.children}
      </div>
      <Footer />
    </header>
  );
}