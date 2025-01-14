import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

// type UserTemplateProps = {
//   children: React.ReactElement
// }

type UserTemplateProps = PropsWithChildren & {};

export default function UserTemplate(props: UserTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col p-4 max-w-[1200px] m-auto">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}