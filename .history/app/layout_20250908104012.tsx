import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsletterWrapper from "@/components/ui/newsletterwrapper";

export const metadata: Metadata = {
  title: 'Richartistry x Balmain | Designer Clothing & Bags',
  description: 'Balmain Blackout Rendition by MJ Ríchards',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body
        className={`bg-black antialiased`}
      >
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode/>
          <VisualEditing />
        </>
      )}

        <main>
          {/*<Header />*/}
          <Nav />
          {children}
          <NewsletterWrapper />
          <Footer />
        </main>

        <SanityLive />
      </body>
    </html>
    </ClerkProvider>
  );
}
