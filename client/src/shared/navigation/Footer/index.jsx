import { AiOutlineApple } from 'react-icons/ai'

function Footer() {
  const handleEmailClick = () => {
    window.open('mailto:jhourlad01@gmail.com', '_blank')
  }

  return (
    <footer className="bg-iosCard backdrop-blur-ios border-t border-iosBorder shadow-ios rounded-t-ios py-4 mt-auto">
      <div className="px-6 flex items-center gap-2">
        <AiOutlineApple className="text-xl text-iosAccent" />
        <p className="m-0 text-iosAccent text-sm">
          &copy; 2025 <button onClick={handleEmailClick} className="bg-none border-none text-iosAccent hover:underline cursor-pointer p-0 m-0 font-inherit text-inherit transition-colors">Joe Estrella</button>.
        </p>
      </div>
    </footer>
  )
}

export default Footer 