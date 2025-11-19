import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Click Fast PRO – Automação para representantes comerciais",
  description:
    "Automatize o preenchimento de pedidos no portal da empresa. Click Fast PRO: mais vendas, menos tempo digitando.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Click Fast PRO",
    description:
      "Automação segura e rápida para representantes comerciais. Preencha pedidos em poucos cliques.",
    url: "https://clickfast-sit.vercel.app",
    siteName: "Click Fast PRO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
