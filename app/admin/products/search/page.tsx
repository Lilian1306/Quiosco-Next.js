import Heading from "@/components/ui/Heading";


export default async function searchPage({searchParams}: {searchParams: {search: string}}) {

    console.log(searchParams.search)
    return (
        <>
         <Heading>Resultado de busqueda</Heading>
        </>
    )
}