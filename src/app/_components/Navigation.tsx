import { MoonIcon, SearchIcon } from "lucide-react";

export const Navigation = () => {
  return (
    <>
      <div className="w-full h-[59px] bg-[#ffffff] font-bold flex justify-between items-center p-4">
        <div className="flex items-center gap-[8px]">
          <img className="color-[#4338CA]" src="/film1.png" alt="Logo" />
          <div className="text-[#4338CA] text-[16px]">Movie Z</div>
        </div>

        <div className="flex items-center gap-[12px]">
          <button />
          <div className="border rounded-md w-[36px] h-[36px] flex items-center justify-center">
          <SearchIcon className="w-[16px] h-[16px] "/>
          </div>
          <div className="border rounded-md w-[36px] h-[36px] flex items-center justify-center">
          <MoonIcon className="w-[16px] h-[16px] "/>
          </div>
         
        </div>
      </div>
    </>
  );
};
