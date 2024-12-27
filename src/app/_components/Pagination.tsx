"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export const Pagination = ({}) => {
    const pathname = usePathname();
    const searchParams= useSearchParams();
    const router = useRouter();
     
    const onChangePage = (newPage: number) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', newPage.toString());
        const newURL = pathname + '?' + newSearchParams.toString();
        router.push(newURL);
    }

    return(
        <div className="w-[100px] flex justify-end p-3 gap-4 bg-slate-400 rounded-lg">
          
          <div onClick={() => onChangePage(1)}>1</div>
          <div onClick={() => onChangePage(10)}>2</div>
          <div onClick={() => onChangePage(100)}>5</div>
        </div>
    )
}