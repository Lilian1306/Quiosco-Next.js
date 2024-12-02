import Image from 'next/image'
import Link from 'next/link'
import type { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export default function Categoryicon({category}: CategoryIconProps ) {
  return (
    <div  className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>

     <div className='w-16 h-16 relative'>
      <Image 
        width={64}
        height={64}
        src={`/icon_${category.slug}.svg`} alt='Imagen categoria'/>
       </div>

       <Link
         className='text-xl font-bold'
         href={`/order/${category.slug}`}
         >
         {category.name}
       </Link>

    </div>
  )
}
