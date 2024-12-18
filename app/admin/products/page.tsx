
import ProductsPagination from '@/components/products/ProductsPagination'
import ProductTable from '@/components/products/ProductsTable'
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'

async function productCount(){
  return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number){

  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
     take: pageSize,
     skip,
     include: {
      category: true
     }
  })

  return products
}

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams} : {searchParams: {page?: string}}) {

  const params = await searchParams;

  const page = +(params.page || 1)
  const pageSize = 10

  const productsData =  getProducts(page, pageSize)
  const totalProductsData =  productCount()
  const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData])
  console.log(totalProducts)
 
  return (
    <>
     <Heading>Administrar Productos</Heading>

      <ProductTable
         products={products}
      />

      <ProductsPagination
         page={page}
      />
         
    </>
  )
}
