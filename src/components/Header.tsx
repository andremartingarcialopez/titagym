import Menu from "./Menu";

export default function Header() {
  return (
    <header className="fixed top-0 p-5 left-0 w-full z-50 glass">
      <div className="text-white  px-5 mx-auto container flex justify-between items-center">
          <a href="#">
            <img className="w-15" src="/Logo.svg" alt="logo" />
          </a>


        <Menu />
      </div>
    </header>
  )
}
