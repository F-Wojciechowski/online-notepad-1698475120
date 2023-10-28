import Link from "next/link"


export const Header = () => {
  return (
    <header className="m-3 flex border p-3 border-gray-600 justify-between">
      <Link href={""} className="text-center m-3 w-14 justify-start  bg-orange-400 rounded-2xl">
        Logo
      </Link>
      <nav className="w-1/6 flex justify-end">
        <Link className="m-3 text-center w-1/2 bg-orange-400 rounded-2xl  hover:bg-blue-400 duration-700" href={""}>Login</Link>
        <Link className="m-3 text-center w-1/2 bg-orange-400 rounded-2xl  hover:bg-blue-400 duration-700" href={""}>Create note</Link>
      </nav>
    </header>
  )
}
