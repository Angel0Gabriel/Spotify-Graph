import { ChevronLeft, ChevronRight } from 'lucide-react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'

export default function MainSection() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>

        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <TopMenu />

      <h2 className="font-semibold text-2xl mt-10">Made for Angelo Gabriel</h2>
      <BottomMenu />
    </main>
  )
}
