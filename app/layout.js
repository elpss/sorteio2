import './globals.css'

export const metadata = {
  title: 'Sorteio Instagram',
  description: 'Sistema de sorteio',
}

export default function RootLayout({ children }) {
  return (
    <html lang=\"pt-br\">
      <body>{children}</body>
    </html>
  )
}
