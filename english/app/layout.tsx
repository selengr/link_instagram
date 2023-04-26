import Banner from "@/components/banner";
import Header from "@/components/header";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
           <Header />
           <Banner />
           {children}
      </body>
    </html>
  );
}
