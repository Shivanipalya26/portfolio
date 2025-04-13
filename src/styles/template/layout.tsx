import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[85%] md:max-w-2xl xl:max-w-3xl py-4">{children}</div>
  );
};

export default Layout;
