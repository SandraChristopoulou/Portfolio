import { ArrowUpRightIcon } from "lucide-react"

const footerlink = [
  {
  title:"LinkedIn",
  href:"https://www.linkedin.com/in/sandra-christopoulou/"
  },
  {
  title:"GitHub",
  href:"https://github.com/sandra-christopoulou" 
  }
]
export const Footer = () => {
  return (
  <footer className="bg-black  relative overflow-x-clip w-full">
    {/* Gradient separator line */}
    <div className="h-[2px] bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1]"></div>
    <div className="bg-[#000000] -z-10" ></div>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="border-white/15 py-4 sm:py-6 text-xs sm:text-sm flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
       <div className="text-white/80 text-center">&copy; 2025 Sandra Christopoulou. All rights reserved.</div>
        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
        {footerlink.map(link => ( 
        
            <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 text-white/90 transition-all duration-300 group">
              <span className="font-semibold hover-gradient-text">{link.title}</span>
              <ArrowUpRightIcon className="size-3 sm:size-4 text-white" />
            </a>
          
          ))}
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer


