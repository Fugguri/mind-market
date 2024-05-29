import Header from "@/components/header";
import GlowBG from "@/components/glow";
import Footer from "@/components/footer";

export const metadata = {
  title: "MindMarket AI",
  description: "Главная страница",
};


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlowBG />
      <Header />
      <main className="main">
        <div className="div-main">
          <div className="divider transparent" id="medium"></div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
