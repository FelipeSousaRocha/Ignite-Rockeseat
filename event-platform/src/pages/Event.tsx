import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Video } from '../components/Video'

export function Event() {

  const { slug } = useParams<{slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'> <h1 className='font-bold text-center text-4xl mt-[30%] border rounded p-5 mx-52 hover:text-blue-100 hover:border-blue-700'>Clique em uma das aulas</h1> </div>}
        <SideBar />
      </main>
    </div>
  )
}
