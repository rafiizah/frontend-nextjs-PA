import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page | SI UMKM",
  description: "This is login page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
