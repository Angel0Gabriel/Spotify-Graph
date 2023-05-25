import Image from 'next/image'

export default function BottomMenu() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/cover.jpg"
          width={120}
          height={120}
          alt=""
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">
          Drake, NBA Young Boy Never Broke Again, NLE CHOPPA
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/cover.jpg"
          width={120}
          height={120}
          alt=""
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">
          Drake, NBA Young Boy Never Broke Again, NLE CHOPPA
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/cover.jpg"
          width={120}
          height={120}
          alt=""
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">
          Drake, NBA Young Boy Never Broke Again, NLE CHOPPA
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/cover.jpg"
          width={120}
          height={120}
          alt=""
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">
          Drake, NBA Young Boy Never Broke Again, NLE CHOPPA
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/cover.jpg"
          width={120}
          height={120}
          alt=""
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">
          Drake, NBA Young Boy Never Broke Again, NLE CHOPPA
        </span>
      </a>
    </div>
  )
}
