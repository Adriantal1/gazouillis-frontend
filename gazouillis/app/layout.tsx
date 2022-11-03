import "../styles/globals.css"
import Sidebar from "../components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>

      </head>
      <body>
        <Sidebar/>
        {children}
        </body>
    </html>
  )
}