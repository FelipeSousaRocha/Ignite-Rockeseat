import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { Link } from 'react-router-dom';

// Typescript para pegar os itens do gql
interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'video'
}

export function Leasson(props: LessonProps) {
  // Ver se a data esta no passado 
  const isLessonAvailable = isPast(props.availableAt);
  // Formatar a data
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-blue-100">
        {availableDateFormated}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-blue-600">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-green-300 font-medium flex items-center gap-2">
            <CheckCircle size={20}/>
            Conteúdo Liberado
            </span>
          ) : (<span className="text-sm text-red-600 font-medium flex items-center gap-2">
          <Lock size={20}/>
          Em breve
          </span>)
          }
          <span className="text-xs rounded px-2 py-[0.12rem] text-white border border-blue-600 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'VÍDEO'}
            </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
          </strong>
      </div>
    </Link>
  )
}