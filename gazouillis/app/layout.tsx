import "../styles/globals.css"
import Sidebar from "../components/Sidebar"
import { AuthProvider } from "../contexts/AuthContext"

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
        <AuthProvider>
        <Sidebar/>
        <div>{children}</div>
        </AuthProvider>
        </body>
    </html>
  )
}