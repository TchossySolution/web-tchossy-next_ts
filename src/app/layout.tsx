import { GlobalStyle } from '../styles/global'
import RootStyleRegistry from './RootStyleRegistry'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
