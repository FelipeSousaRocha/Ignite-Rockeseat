// Importar o apollo pro gql
import { gql, useQuery } from '@apollo/client'
import { Leasson } from "./Leasson";

// Criar o get para pegar no gql os itens que quiser
const GET_LESSONS_QUERY = gql `
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

// Retorno do gql atraves de typescript para o React
// Criado como array
interface GetLessonsQueryResponse {
  lessons:{
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'video'
  }[]
}

export function SideBar() {
  // Armazenar os dados do gql
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson =>{
          return(
            <Leasson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
          )
        })}
      </div>
    </aside>
  )
}