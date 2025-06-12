// Layout component
import Header from "./Header/header";
import Glassmorphic from "../ui/background/glassmorphic/glassmorphic";

function MainLayout({ children }) {
  return (
    <main className="relative">
      <Header />
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <Glassmorphic />
      </div>
      {children}
    </main>
  );
}

export default MainLayout;
