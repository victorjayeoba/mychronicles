import localFont from "next/font/local";
import Head from "next/head"; // Import Head from next/head to handle metadata
import "./globals.css";

// Setting up local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// RootLayout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Only include the global meta tags that don't overlap with page-level metadata */}
        <meta name="keywords" content="notes, note-taking, organization" />
        {/* You can skip <title> here to allow individual pages to define it */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
