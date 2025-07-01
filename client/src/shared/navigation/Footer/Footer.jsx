function Footer() {
  const handleEmailClick = () => {
    window.open('mailto:jhourlad01@gmail.com', '_blank')
  }

  return (
    <footer className="bg-iosgray-light border-t border-iosgray py-4 mt-auto">
      <div className="px-6">
        <p className="m-0 text-iosblue text-sm">
          &copy; 2025 <button onClick={handleEmailClick} className="bg-none border-none text-iosblue hover:text-iosblue-dark hover:underline cursor-pointer p-0 m-0 font-inherit text-inherit transition-colors">Joe Estrella</button>.
        </p>
      </div>
    </footer>
  )
}

export default Footer 