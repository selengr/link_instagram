export const metadata = {
  title: 'Next.js',
  description: 'reza ',
}
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body>
      <div style={{height:"75px"}}  />
      <Header />
        <div className={"bg-primary h[100px]"} />
           {children}
      </body>
    </html>
  )
}
