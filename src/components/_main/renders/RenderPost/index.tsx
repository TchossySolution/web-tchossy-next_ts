import react, { useContext } from 'react'
import { ContainerPosts, SButton } from './styles'

import { BsCalendarDate } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'

function RenderPost({ post }: any) {
  const numComment = 3
  return (
    <ContainerPosts>
      <Link
        href={routsNameMain.blog.details}
        as={`${routsNameString.blog.details as string}${post._id}/${post.nome}`}
      >
        <div className="containerImg">
          <img src={post.imagePost} alt={post.marca} width="400" height="300" />
        </div>

        <div className="containerInfPosts">
          <div className="headerTotal">
            <strong>{post.nome}</strong>
          </div>
          <div className="descriptionPost">
            <p>{post.descricao}</p>
          </div>
        </div>

        <SButton>
          <div>Consulte Mais Informações</div>
        </SButton>
      </Link>

      <div className="containerOtherInfo">
        <strong>
          <BsCalendarDate size={'1rem'} /> {post.date}
        </strong>
        <strong> | </strong>
        <strong>
          <AiOutlineComment size={'1.3rem'} /> {numComment} Comentarios
        </strong>
        <strong> | </strong>
        <strong>
          <AiOutlineUser size={'1.3rem'} /> Por Rafael Pilartes
        </strong>
      </div>

      <br />
      <br />
    </ContainerPosts>
  )
}
export default RenderPost
