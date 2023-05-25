import MainSection from '../MainSection/Main'
import Sidebar from './Sidebar'

export default function TopScreen() {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <MainSection />
    </div>
  )
}
