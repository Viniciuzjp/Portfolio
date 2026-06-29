import "./globals.css";
import "@av-digital/components/styles"
import { Onest, JetBrains_Mono } from 'next/font/google';

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
      lang="en"
      className={`${onest.variable} ${jetbrainsMono.variable}`}
    >
      <body className={onest.className}>{children}</body>
    </html>
  );
}
