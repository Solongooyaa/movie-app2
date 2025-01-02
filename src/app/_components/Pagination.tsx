"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PageInfo } from "../constants/types";

const getVisiblePages = (currentPage: number) => {
    if (currentPage < 2){
        return [1, 2, 3];

    }
    return [
        currentPage - 1,
        currentPage,
        currentPage + 1,
    ];
};

export const Pagination = ({ pageInfo} : {pageInfo: PageInfo}) => {
    const pathname = usePathname();
    const searchParams= useSearchParams();
    const page = searchParams.get('page') || 1;
    const router = useRouter();

    let newArr = [];
    for (let i = Number(page) + 1; i < Number(page) + 10; i++) {
        newArr.push(i)
    }
     
    const onChangePage = (newPage: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', String(newPage));
        router.push(pathname + '?' + newParams.toString());
    };

    const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages - 1;

    const visiblePages = getVisiblePages(pageInfo.currentPage)

    return(
        <div className="w-[100px] flex justify-end items-end p-3 gap-4 bg-slate-400 rounded-lg">
          {pageInfo.currentPage > 1 && (
         <div onClick={() => onChangePage(pageInfo.currentPage - 1)}>Prev</div>
          )}
          {visiblePages.map((page) => (
             <div onClick={() => onChangePage(page)} 
                 className={pageInfo.currentPage === page ? 'font-bold' : ''}
                key={page}
                   > 
                  {page}
                </div>
          ))}
          
          <div onClick={() => onChangePage(lastPage)}>{lastPage}</div>
          {pageInfo.currentPage < lastPage && (
            <div onClick={() => onChangePage(pageInfo.currentPage + 1)}>Next</div>
          )}
        </div>
    )
}