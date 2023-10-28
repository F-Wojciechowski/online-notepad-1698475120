import Link from "next/link"


export const Sidebar = () => {
  return (
    <section className=" text-center w-1/6 m-3 p-3 border-gray-600 justify-between border">
      <div className="cursor-pointer hover:bg-blue-600 duration-700">Element1</div>
      <div className="cursor-pointer hover:bg-blue-600 duration-700">Element2</div>
      <div className="cursor-pointer hover:bg-blue-600 duration-700">Element3</div>
    </section>
  )
}
