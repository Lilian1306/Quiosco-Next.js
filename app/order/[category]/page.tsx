import ProductCard from "@/components/products/ProductCard"
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

export default async function OrderPage({params} : {params: Promise<CategoryProps>} ){
  const products = await getProducts((await params).category)
 
   return (
    <>
       <div className="grid grid-cols-1 lg:grid-colst-2 2xl:grid-cols-3 gap-4 items-center">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
       </div>
    </>
  )
}

