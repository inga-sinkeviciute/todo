import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./LayoutComponents/Header";
import Footer from "./LayoutComponents/Footer";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
