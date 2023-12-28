import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ["400"], style: ['normal'], subsets: ["latin"] })

export const metadata = {
  title: 'Nice Desing',
  description: 'A simple website to show desing skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
