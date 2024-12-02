
type CategoryProps = {
  category: string
}

export default function OrderPage({params} : {params : CategoryProps} ){
  const { category } = params

   console.log(category)

   return (
    <div>
      orderPage : {category}
    </div>
  )
}

