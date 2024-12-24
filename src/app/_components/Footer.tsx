
export const Footer =() => {
    
    return <div className="w-[100% ]h-[308px] bg-[#4338CA] gap-[48px] p-[40px] text-[#FAFAFA]">
        <div className="w-[100% ] h-[228px] gap-7 text-sm">
         <div className=" w-[100% ] h-[52px] gap-10">
            <div className="flex">
            <img src="/film.png" alt="film png" />
            <div className="text-base">Movie Z </div>
            </div>
            <div>© 2024 Movie Z. All Rights Reserved.</div>
         </div>
           <div className="w-[100% ] h-[148px] flex gap-12">
            <div className="w-[100% ] h-[136px] gap-3">
                <div>Contact Information</div>
                <div className="w-[100% ] h-[104px] gap-6">
                <div className="flex">
                    <img className="size-[16px]" src="/email.png" alt="email png" />
                    <div>
                    <div>Email</div>
                    <div>support@movieZ.com</div>
                    </div>
                    
                </div>
                <div className="flex">
                    <img className="size-[16px]" src="/phone.png" alt="" />
                <div>
                <div>Phone:</div>
                <div>+976 (11) 123-4567</div>
                </div>
                
                </div>
                </div>
               
            </div>
            <div className="w-[100% ] h-[148px] gap-3">
                <div>Follow us </div>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Youtube</div>
            </div>
           </div>

        </div>
       
        
    </div>
}