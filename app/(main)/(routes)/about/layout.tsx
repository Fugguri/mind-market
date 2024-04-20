export const metadata = {
  title: "О нас",
  description: "Информация о компании",
};

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>{children}</>
  }