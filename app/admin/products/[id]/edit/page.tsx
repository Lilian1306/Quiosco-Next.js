import { prisma } from "@/src/lib/prisma"
import { redirect, notFound } from  "next/navigation"

async function getProductById(id: number){
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if(!product){
        notFound()
    }
    
    return product
}

export default async function EditProduct({params} : {params: {id: string}}){

    const product = await getProductById(+params.id)

    console.log(product)
    return (
        <div>
            Page
        </div>
    )

}