import { SectionProvider } from "@/Context";
import Footer from "@/components/Footer";

export default function PagesLayout({ children }) {
  return (
    <>
      <SectionProvider>{children}</SectionProvider>
      <Footer />
   </>
  );
}
