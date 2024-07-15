import Card from '@/components/Card'
import OrderList from '@/components/OrderList'

export default function Home() {
  return (
    <main className='pb-8'>
      <h1 className='my-5 text-4xl font-bold text-center'>Choose your food.</h1>
      <div className='flex gap-x-2'>
        <Card />
        <OrderList />
      </div>
    </main>
  )
}
