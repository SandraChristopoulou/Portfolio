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
  <footer className="relative  overflow-x-clip w-full">
    <div className=" bg-[#000000] -z-10" ></div>
    <div className='container mx-auto'>
      <div className=" border-white/15 py-6 md text-sm flex flex-col items-center gap-8 ">
       <div className="text-white/80">&copy; 2025 Sandra Christopoulou. All rights reserved.</div>
        <nav className="flex flex-col  md:flex-row items-center gap-8">
        {footerlink.map(link => ( 
        
            <a href={link.href} key={link.title}className="inline-flex items-center gap-1.5">
            <span className="font-semibold">{link.title}</span>
           <ArrowUpRightIcon className="size-4" />
           </a>
          
          ))}
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer


