"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PageInfo } from "../constants/types";

const getVisiblePages = (currentPage: number) => {
  if (currentPage < 2) {
    return [1, 2, 3];
  }
  return [currentPage - 1, currentPage, currentPage + 1];
};

export const Pagination = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const router = useRouter();

  let newArr = [];
  for (let i = Number(page) + 1; i < Number(page) + 10; i++) {
    newArr.push(i);
  }

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(newPage));
    router.push(pathname + "?" + newParams.toString());
  };

  const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages - 1;

  const visiblePages = getVisiblePages(pageInfo.currentPage);

  return (
    <div className="w-[100px] flex justify-end items-end p-3 gap-4 bg-slate-400 rounded-lg">
      {pageInfo.currentPage > 1 && (
        <div onClick={() => onChangePage(pageInfo.currentPage - 1)}>Prev</div>
      )}
      {visiblePages.map((page) => (
        <div
          onClick={() => onChangePage(page)}
          className={pageInfo.currentPage === page ? "font-bold" : ""}
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
  );
};
// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { PageInfo } from "../constants/types";

// // ✅ Харагдах хуудсуудыг тодорхойлох функц
// const getVisiblePages = (currentPage: number, totalPages: number) => {
//   const pages = [];
//   const start = Math.max(1, currentPage - 1);
//   const end = Math.min(totalPages, currentPage + 1);

//   for (let i = start; i <= end; i++) {
//     pages.push(i);
//   }

//   return pages;
// };

// export const Pagination = ({ pageInfo }: { pageInfo: PageInfo }) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const currentPage = Number(searchParams.get("page")) || 1;
//   const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages;

//   // ✅ Хуудсыг солих функц
//   const onChangePage = (newPage: number) => {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set("page", String(newPage));
//     router.push(`${pathname}?${newParams.toString()}`);
//   };

//   // ✅ Харагдах хуудсууд
//   const visiblePages = getVisiblePages(currentPage, lastPage);

//   return (
//     <div className="flex justify-center items-center gap-2 p-3 bg-slate-100 rounded-lg shadow-md">
//       {/* 🡰 Өмнөх хуудас */}
//       {currentPage > 1 && (
//         <button
//           onClick={() => onChangePage(currentPage - 1)}
//           className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Prev
//         </button>
//       )}

//       {/* 🔢 Харагдах хуудсууд */}
//       {visiblePages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onChangePage(page)}
//           className={`px-3 py-1 rounded-md ${
//             currentPage === page
//               ? "bg-blue-600 text-white font-bold"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       {/* ➡️ Сүүлийн хуудас */}
//       {currentPage < lastPage && (
//         <button
//           onClick={() => onChangePage(lastPage)}
//           className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           {lastPage}
//         </button>
//       )}

//       {/* 🡲 Дараах хуудас */}
//       {currentPage < lastPage && (
//         <button
//           onClick={() => onChangePage(currentPage + 1)}
//           className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       )}
//     </div>
//   );
// };
