// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Search() {
//   const searhParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [search, updateSearch] = useState("");

//   const updateFilter = (value: string) => {
//     const param = new URLSearchParams(searhParams);

//     if (value) {
//       param.set("search", value);
//     } else {
//       param.delete("search");
//     }

//     router.replace(`${pathname}?${param.toString()}`);
//   };

//   useEffect(() => {
//     const param = new URLSearchParams(searhParams);
//     const searchParam = param.get("search");

//     if (searchParam) {
//       updateSearch(searchParam);
//     } else {
//       updateSearch("");
//     }
//   }, []);

//   return (
//     <div className="search">
//       <div className="search-wrapper">
//         <input
//           className="search-wrapper_input"
//           type="text"
//           value={search}
//           onChange={(event) => updateSearch(event.target.value)}
//         />
//       </div>
//       <div className="search-btn">
//         <button onClick={() => updateFilter(search)}></button>
//       </div>
//     </div>
//   );
// }
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Инициализируем состояние из URL параметров
  const [search, updateSearch] = useState(searchParams.get("search") || "");

  const updateFilter = (value: string) => {
    const param = new URLSearchParams(searchParams);

    if (value) {
      param.set("search", value);
    } else {
      param.delete("search");
    }

    router.replace(`${pathname}?${param.toString()}`);
  };

  const handleSubmit = () => {
    updateFilter(search);
    
  };

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          className="search-wrapper_input"
          type="text"
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && handleSubmit()}
        />
      </div>
      <div className="search-btn">
        <button onClick={handleSubmit}></button>
      </div>
    </div>
  );
}