
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import NewsTicker from '../components/NewsTicker'
import { Outlet } from 'react-router-dom'


export default function WithOutnavbar() {
  return (
    <>
      <Header />
      <NewsTicker />
      <Outlet />
      <Footer />
    </>
  )
}
