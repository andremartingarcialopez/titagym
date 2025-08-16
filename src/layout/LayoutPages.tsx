import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function LayoutPages() {
  return (
     <div>
        <Header/>

        <main className="">
            <Outlet/>
        </main>

        <Footer/>
           
    </div>
  )
}
