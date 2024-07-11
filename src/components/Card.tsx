import {
  Apple,
  Banana,
  Bean,
  Beef,
  Cake,
  Candy,
  CoffeeIcon,
  Cookie,
  Croissant,
  CupSoda,
  Donut,
  EggFried,
  Fish,
  GlassWater,
  Milk,
  Pizza,
  Plus,
  Popcorn,
  Salad,
  Sandwich
} from 'lucide-react'

const foods = [
  {
    title: 'Coffee',
    icon: (
      <CoffeeIcon
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Croissaint',
    icon: (
      <Croissant
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Banana',
    icon: (
      <Banana
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Cake',
    icon: (
      <Cake
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Beef',
    icon: (
      <Beef
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Sweet',
    icon: (
      <Candy
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Cookie',
    icon: (
      <Cookie
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Apple',
    icon: (
      <Apple
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Egg fried',
    icon: (
      <EggFried
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Soda',
    icon: (
      <CupSoda
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Water',
    icon: (
      <GlassWater
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Popcorn',
    icon: (
      <Popcorn
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Milk',
    icon: (
      <Milk
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Fish',
    icon: (
      <Fish
        size={'35'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Donut',
    icon: (
      <Donut
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Beans',
    icon: (
      <Bean
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Salad',
    icon: (
      <Salad
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  },
  {
    title: 'Sandwich',
    icon: (
      <Sandwich
        size={'35px'}
        strokeWidth={0.5}
      />
    ),
    price: 1
  }
]
export default function Card() {
  return (
    <article className='mt-4 mx-6'>
      <ul className='grid grid-cols-2 xl:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 mx-auto'>
        {foods.map(({ title, icon, price }) => (
          <li
            key={title}
            className='flex flex-col justify-center mt-4 gap-y-4 p-2 border-2 border-slate-200 size-[180px] hover:bg-gray-300 rounded-xl'
          >
            <h2 className='text-lg font-semibold'>{title}</h2>
            <div className='mt-auto mx-auto'>{icon} </div>
            <div className='flex flex-col mt-auto items-center'>
              <p>
                Price: <span className='font-medium'>${price}</span>
              </p>
              <button className='rounded-full bg-blue-500 my-1 p-[3px] hover:bg-blue-300'>
                <Plus className='stroke-slate-200' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
