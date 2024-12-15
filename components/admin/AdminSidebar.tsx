import Logo from "../ui/Logo"
import AdminRouter from "./AdminRouter"

const adminNagivation = [ 
    {url: '/admin/orders', text: 'Ordenes', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/order/cafe', text: 'Ver Quisoco', blank: true}, 
] 


export default function AdminSidebar() {
  return (
    <>
     <Logo/>
      <div className="space-y-3">
        <p className="mt-10  uppercase font-bold text-sm text-gray-600 text-center">Navegacion</p>
         <nav className="flex flex-col">
            {adminNagivation.map(link => ( 
              <AdminRouter
                 key={link.url}
                 link={link}
              />
            ))}
         </nav>

      </div>
      
    </>
  )
}
