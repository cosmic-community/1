export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-night-600 mt-20">
      <div className="container-page py-8 text-center text-sm text-moon">
        <p className="font-serif text-base text-snow-100 mb-2">华山论剑 · 武侠分镜</p>
        <p>剑光雪影，刹那芳华。 &copy; {year}</p>
      </div>
    </footer>
  )
}