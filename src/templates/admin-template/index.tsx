import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <header className="min-h-screen flex flex-col">
      <HeaderAdmin />
      <div className="flex flex-1 flex-col p-4 max-w-[1200px] m-auto justify-center">
        {props.children}
      </div>
      <Footer />
    </header>
  );
}