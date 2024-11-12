
export const Contact = () => {
  return (
    <>

    <div className="text-white leading-10 my-16 xl:text-[20px]">    
        <div className="flex items-center gap-2 hv-c">
            <img src="/public/Images/Vector.png" alt="" className="w-6 h-[18px]"/>
            <span>
                <a href="mailto" className="no-underline text-white">ezaldinalzaher@gmail.com</a>
            </span>
        </div>

        <div className="flex items-center gap-2 my-3 hv-c">
            <img src="/public/Images/tel.png" alt="" className="w-6 h-6"/>
            <span>
                <a href="tel" className="no-underline text-white">+1 723 456 789</a>
            </span>
        </div>

        <div className="flex items-center gap-2 hv-c">
            <img src="/public/Images/loc.png" alt="" className="w-6 h-7"/>
            <span>123 Street 456 House</span>
        </div>
        </div>

    </>
  )
}
