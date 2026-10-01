import "./globals.css";
import "@av-digital/components/styles"
import { Onest, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinicius Juarez · Desenvolvedor Front-End',
  description:
    'Desenvolvedor Front-End com React, Next.js e TypeScript. Biblioteca de componentes no NPM, e-commerce em produção e gerador de currículos.',
};

const onest = Onest({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-onest',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${onest.variable} ${jetbrainsMono.variable}`}
    >
      <body className={onest.className}>{children}</body>
    </html>
  );
}
