import '@/app/ui/global.css'; // global.css can be imported at any point, but is generally imported in the root
// Adding this line somehow changed the styling of everything on the page, but why. This happened because the 
// global.css has tailwind css directives in it
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
