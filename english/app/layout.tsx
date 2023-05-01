import Banner from "@/components/banner";
import Header from "@/components/header";
import "../styles/globals.css";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body style={{background:"red"}}>
           <Header />
           <Banner />
           {children}
      </body>
    </html>
  );
}
