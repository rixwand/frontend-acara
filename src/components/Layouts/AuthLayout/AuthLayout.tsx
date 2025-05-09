import { PageHead } from "@/components/commons/pageHead";
import { ReactNode } from "react";

interface PropsType {
  title?: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: PropsType) => {
  return (
    <>
      <PageHead {...{ title }} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
