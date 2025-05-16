import '@/app/ui/global.css'; // to add global styling
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

/* this is aka: the root layout and is required in every next.js app
Any UI added here will be shared across all pages in the */