import { PlusCircle } from 'lucide-react'
import Image from 'next/image'

export default function TopMenu() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full text-zinc-400 ml-auto mr-2 invisible group-hover:visible">
          <PlusCircle />
        </button>
      </a>
    </div>
  )
}
