import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <main className="flex min-h-svh flex-col">
      <Navbar />
      <section className="flex-grow container p-2">
        <Toaster position="top-center" richColors expand={true}  />
        {/* c'est ici que les pages enfant comme HomePage seront rendues */}
        <Outlet/>
      </section>
      <Footer />
    </main>
  );
}
