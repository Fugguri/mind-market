import { HeaderRegister } from "../../components/header";
import Footer from "../../components/footer";

export const metadata = {
  title: "Регистрация",
  description: "Регистрация в системе",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>{children}</>
    );
}
