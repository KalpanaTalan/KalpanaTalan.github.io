import './globals.css';
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Kalpana Talan | Program & Transformation Leader | IAF Veteran',
  description: 'Portfolio of Kalpana Talan - 10-Year Indian Air Force Veteran, Program & Transformation Leader, PMP, CSM. Delivering high-stakes programs through digital transformation and risk governance.',
  keywords: ['Kalpana Talan', 'Program Manager', 'Digital Transformation', 'Indian Air Force Veteran', 'PMP', 'CSM', 'Risk Governance', 'Delhi'],
  authors: [{ name: 'Kalpana Talan' }],
  openGraph: {
    title: 'Kalpana Talan | Program & Transformation Leader',
    description: 'Delivering high-stakes programs through digital transformation, risk governance & cross-functional leadership.',
    url: 'https://www.linkedin.com/in/kalpanatalan/',
    images: ['/kalpana-profile.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
