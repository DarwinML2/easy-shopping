import { ShoppingCart, UtensilsCrossed } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className=' flex justify-between bg-slate-200 px-2 py-4 sticky top-0'>
      <p className='flex gap-x-1 font-bold'>
        Easy Shopping
        <UtensilsCrossed />
      </p>
      <button className='flex bg-blue-500 px-12 py-1 gap-x-2 font-bold text-white rounded-md hover:bg-blue-400'>
        Car
        <ShoppingCart />
      </button>
    </nav>
  )
}
