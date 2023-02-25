import './globals.css'

export const metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
