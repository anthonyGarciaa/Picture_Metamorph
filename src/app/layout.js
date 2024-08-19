import { LanguageProvider } from "@/Context";
import "./globals.css";


export const metadata = {
  title: "Picture metamorph",
  description: "Converter of images to any standarized format of images",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
