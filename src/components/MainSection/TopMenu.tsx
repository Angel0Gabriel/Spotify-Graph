import { Play } from 'lucide-react'
import Image from 'next/image'

export default function TopMenu() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src="/cover.jpg" width={104} height={104} alt="" />
        <strong>Certified Lover Boy</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    </div>
  )
}
