import Footer from '@/components/Footer'
import TopScreen from '@/components/TopScreen/TopScreen'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <TopScreen />
      <Footer />
    </div>
  )
}
