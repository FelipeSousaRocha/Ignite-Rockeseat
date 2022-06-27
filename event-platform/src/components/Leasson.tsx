import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

// Typescript para pegar os itens do gql
interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'video'
}

export function Leasson(props: LessonProps) {

  //Receber a slug
  const { slug } = useParams<{ slug: string }>()

  // Ver se a data esta no passado 
  const isLessonAvailable = isPast(props.availableAt);
  // Formatar a data
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  //Se ela estiver ativa
  const isActiveLesson = slug === props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-blue-100">
        {availableDateFormated}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2',{
        'bg-blue-900 group-hover:border-white ': isActiveLesson,
        'group-hover:border-blue-600': !isActiveLesson,
      })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm  font-medium flex items-center gap-2',{
              'text-white': isActiveLesson, 'text-green-300': !isActiveLesson,
            })}>
            <CheckCircle size={20}/>
            Conteúdo Liberado
            </span>
          ) : (<span className='text-sm text-red-600 font-medium flex items-center gap-2'>
          <Lock size={20}/>
          Em breve
          </span>)
          }
          <span className={classNames('text-xs rounded px-2 py-[0.12rem] text-white border font-bold',{
               'border-white': isActiveLesson,
               'border-blue-600': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'VÍDEO'}
            </span>
        </header>

        <strong className={classNames('mt-5 block',{
           'text-white': isActiveLesson,
           'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
          </strong>
      </div>
    </Link>
  )
}