import type { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export default function Categoryicon({category}: CategoryIconProps ) {
  return (
    <div>
      {category.name}
    </div>
  )
}
