import "./pages/globals.css";
import { Inter } from 'next/font/google'
import Header from './components/header'
import Navigation from './components/navigation'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'LocalMedia',
  description: 'A multi-platform blog-style SPA catalog media web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title={""} />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
