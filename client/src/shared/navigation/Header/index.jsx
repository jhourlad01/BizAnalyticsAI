import { AiOutlineApple } from 'react-icons/ai'

function Header() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'BizAnalytics AI'
  
  return (
    <header className="bg-iosCard backdrop-blur-ios shadow-ios rounded-b-ios border-b border-iosBorder py-4">
      <div className="px-6">
        <div className="flex items-center gap-3">
          <AiOutlineApple className="text-3xl text-iosAccent drop-shadow" />
          <h1 className="text-xl font-bold m-0 text-iosText">{appTitle}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header 