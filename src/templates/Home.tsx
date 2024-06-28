import { ReactElement } from "react";
import Header from "../components/Header";

const HomeTemplate = (): ReactElement => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Header />
    </div>
  );
};

export default HomeTemplate;
