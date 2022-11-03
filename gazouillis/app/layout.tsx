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
      <body className="flex bg-gray-800">
        <Sidebar/>
        <div>{children}</div>
        </body>
    </html>
  )
}