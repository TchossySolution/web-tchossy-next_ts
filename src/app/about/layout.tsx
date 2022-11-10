export default function RootLayoutAbout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1>Sub-About</h1>
      {children}
    </section>
  )
}
