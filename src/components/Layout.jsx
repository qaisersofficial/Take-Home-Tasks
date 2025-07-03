import Logo from './Logo'

const Layout = ({ children, showHeader = true }) => {
  return (
    <div className="min-h-screen relative">
      {/* Two-tone background */}
      <div className="absolute inset-0">
        <div className="h-32 bg-[#0D0D0D]"></div>
        <div className="flex-1 bg-[#1A1A1A]" style={{ height: 'calc(100vh - 8rem)' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {showHeader && (
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Logo />
              </div>
            </div>
          )}
          
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout