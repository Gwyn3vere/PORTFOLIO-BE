// Layout component
import Header from "./Header/header";

function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default MainLayout;
