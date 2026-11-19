import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BarreMobile } from "@/components/layout/barre-mobile";
import { BoutonRetourHaut } from "@/components/layout/bouton-retour-haut";
import { RetourHautNavigation } from "@/components/navigation/retour-haut-navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toiture-drome-gard-vaucluse.fr"),
  title: {
    default: "Couvreur à Rochegude – Toiture, façade, peinture | Philippe Rénovation",
    template: "%s | Philippe Rénovation",
  },
  description: "Philippe Rénovation intervient à Rochegude et aux alentours pour vos travaux de toiture, façade et peinture, ainsi que pour les urgences de fuite.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Philippe Rénovation",
    title: "Philippe Rénovation, couvreur à Rochegude",
    description: "Toiture, façade, peinture et urgence fuite à Rochegude et aux alentours.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${roboto.variable}`}>
      <body id="haut-de-page">
        <RetourHautNavigation />
        <a href="#contenu-principal" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-button bg-surface-dark px-4 py-3 font-bold text-ink-inverse focus:translate-y-0">Aller au contenu</a>
        <Header />
        <main id="contenu-principal" tabIndex={-1}>{children}</main>
        <Footer />
        <BarreMobile />
        <BoutonRetourHaut />
      </body>
    </html>
  );
}
