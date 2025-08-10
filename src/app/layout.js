import './globals.css';

export const metadata = { title: 'Cards Showcase' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
