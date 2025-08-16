import Menu from "./Menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
        <div className="text-white  px-5 mx-auto container flex justify-between items-center">
            <a href="#">
              <img className="w-30" src="/Logo.svg" alt="" />
            </a>

                <Menu/>
        </div>
    </header>
  )
}
