import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Injilio Chatbot - Build Powerful Chatbots",
  description:
    "Create intelligent chatbots with our drag-and-drop builder. Build, deploy, and scale your conversational AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
