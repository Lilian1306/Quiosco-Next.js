import { prisma } from '@/src/lib/prisma'


async function getCategories(){
     return await prisma.category.findMany()

}

export default async function OrderSummary() {

    const categories = await getCategories()

    return (
        <aside className="md:w-72 md:h-screen bg-white">

        </aside>
    )
}