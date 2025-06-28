import Link from "next/link"

export const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="shadow-md py-4 fixed top-0 w-full z-10 bg-[#2e213b]">
  <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <h1 className="text-3xl font-semibold text-white mb-4 sm:mb-0">
       Isha&apos;s Portfolio
    </h1>

    <div className="flex flex-row text-white font-bold space-x-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/project">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
</nav>


      {/* Spacer for Navbar */}
      <div className="h-16"></div>


    </div>
  )
}
