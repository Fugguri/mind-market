import { HeaderLogin } from "../../components/header";
import Footer from "../../components/footer";

export const metadata = {
  title: "Регистрация/Авторизация",
  description: "Выбор действий",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
      </head>
      <body>
        <HeaderLogin></HeaderLogin>
        <br></br>
        <div className="main">{children}</div>
        <br></br>
        <div className="divider transparent" id="big" />
        <Footer></Footer>
      </body>
    </html>
    );
}