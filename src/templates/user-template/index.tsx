import { PropsWithChildren, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useLocation } from 'react-router-dom';

// type UserTemplateProps = {
//   children: React.ReactElement
// }

type UserTemplateProps = PropsWithChildren & {};

export default function UserTemplate(props: UserTemplateProps) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

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