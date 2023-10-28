import Image from 'next/image'
import { Header } from './Components/Header'
import { Sidebar } from './Components/SIdebar'
import { NoteArea } from './Components/NoteArea'

export default function Home() {
  return (
    <section className="flex min-h-[80vh]">
      <Sidebar />
      <NoteArea />
    </section>
  )
}
