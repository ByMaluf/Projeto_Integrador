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
      <div className="flex-1">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}