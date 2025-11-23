// 'use client'

// import { useSearchParams,  useRouter, usePathname } from "next/navigation"

// import { useState } from "react"

// export default function Filter (){
// const [isOpen, setIsOpen] = useState(false)
// const searhParams = useSearchParams()
// const router = useRouter()
// const pathname = usePathname()

// const updateFilter = (value: string)=>{
// const param = new URLSearchParams(searhParams)
// if(value){
// param.set('category', value)
// }else{
// param.delete('category')
// }

// router.replace(`${pathname}?${param.toString()}`)

// }
//     return(
//         <div className="catalog-button">
// 					  <button onClick={()=>setIsOpen(!isOpen)}>
// 						<span className="catalog-button_burger"></span><span className="catalog-button_text">Каталог</span>
// 					  </button>
// 					  <div className="catalog" style={{display: isOpen ? 'block' : 'none'}}>
// 						<ul className="catalog-list">
// 							<li onClick={()=> updateFilter('Игровая приставка')}>Игровая приставка</li>
// 							<li onClick={()=> updateFilter('Периферия для ПК')}>Периферия для ПК</li>
// 							<li onClick={()=> updateFilter('Игры и софт')}>Игры и софт</li>
// 						</ul>
// 					  </div>
// 					</div>
//     )
// }

'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useState, useEffect, useRef, Suspense } from "react"

function FilterContent() {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const updateFilter = (value: string) => {
    const param = new URLSearchParams(searchParams)
    if (value) {
      param.set('category', value)
    } else {
      param.delete('category')
    }
    router.replace(`${pathname}?${param.toString()}`)
    setIsOpen(false)
  }

  const toggleCatalog = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="catalog-button" ref={filterRef}>
      <button onClick={toggleCatalog}>
        <span className="catalog-button_burger"></span>
        <span className="catalog-button_text">Каталог</span>
      </button>
      <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
        <ul className="catalog-list">
          <li onClick={() => updateFilter('Игровая приставка')}>Игровая приставка</li>
          <li onClick={() => updateFilter('Периферия для ПК')}>Периферия для ПК</li>
          <li onClick={() => updateFilter('Игры и софт')}>Игры и софт</li>
          <li onClick={() => updateFilter('')}>Сбросить фильтр</li>
        </ul>
      </div>
    </div>
  )
}

export default function Filter() {
  return (
    <Suspense fallback={
      <div className="catalog-button">
        <button disabled>
          <span className="catalog-button_burger"></span>
          <span className="catalog-button_text">Загрузка...</span>
        </button>
      </div>
    }>
      <FilterContent />
    </Suspense>
  )
}