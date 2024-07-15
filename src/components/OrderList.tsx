import { CircleX, Coffee, Minus, Plus, SquareMenu } from 'lucide-react'

export default function OrderList() {
  return (
    <aside className='border border-slate-200 rounded-3xl mx-4 w-[200px] md:w-[300px] xl:w-[350px] bg-slate-200'>
      <h2 className='flex justify-center font-bold m-2 gap-x-2'>
        Order
        <SquareMenu />
      </h2>
      <hr className='border border-gray-300' />
      <div className='flex flex-col'>
        <ul
          className='flex flex-1
             justify-center mt-3'
        >
          <li className='flex justify-between gap-x-8 m-2'>
            <div className='flex justify-between gap-2'>
              <Coffee
                size={'40px'}
                strokeWidth={1}
              />
              <div>
                <h3 className='text-md font-bold'>Coffe</h3>
                <p className='text-xs text-neutral-500'>Price $1</p>
              </div>
              <div className='flex items-center gap-x-4 mx-4'>
                <button>
                  <Minus
                    size={'15px'}
                    className='hover:stroke-red-500 rounded-full hover:bg-slate-300 flex items-center'
                  />
                </button>
                <span>x1</span>
                <button>
                  <Plus
                    size={'15px'}
                    className='hover:stroke-green-500 rounded-full hover:bg-slate-300 flex items-center'
                  />
                </button>
              </div>
            </div>
            <button>
              <CircleX
                stroke='red'
                strokeWidth={1}
                className='hover:stroke-white hover:fill-red-500'
              />
            </button>
          </li>
        </ul>
        <div className='mt-auto mx-auto py-4'>
          <div className='flex justify-between py-2'>
            <h3>Sub total:</h3>
            <p>$1</p>
          </div>
          <button className='bg-blue-500 rounded-md px-10 py-1 text-white font-semibold text-lg'>
            Checkout
          </button>
        </div>
      </div>
    </aside>
  )
}
