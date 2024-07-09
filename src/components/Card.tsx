import { CoffeeIcon, Plus } from 'lucide-react'

export default function Card() {
  return (
    <article className='mt-4 mx-6'>
      <ul className='grid grid-cols-4 gap-x-4'>
        <li className='flex flex-col justify-center gap-y-4 p-2 border-2 border-slate-200 size-[180px]'>
          <h2 className='text-lg font-semibold'>Coffee</h2>
          <div className='mt-auto mx-auto'>
            <CoffeeIcon size={'35px'} />
          </div>
          <div className='flex flex-col mt-auto items-center'>
            <p>
              Price: <span className='font-medium'>$1</span>
            </p>
            <button className='border rounded-full bg-blue-500 my-1 p-1'>
              <Plus className='stroke-slate-200' />
            </button>
          </div>
        </li>
      </ul>
    </article>
  )
}
