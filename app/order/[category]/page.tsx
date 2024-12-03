import { prisma } from "@/src/lib/prisma"

type CategoryProps = {
  category: string
}

async function getProducts(category: string){
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}

export default async function OrderPage({params} : {params : CategoryProps} ){
  const products = await getProducts(params.category)
 
   return (
    <div>
      orderPage 
    </div>
  )
}

