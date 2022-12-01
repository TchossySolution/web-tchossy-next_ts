import Link from 'next/link'
import react, { useContext } from 'react'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import { ContainerPosts, SLink } from './styles'

function RenderPostWithDate({ post }: any) {
  return (
    <Link
      href={`${routsNameMain.blog.details as string}${post._id}`}
      as={`${routsNameString.blog.details as string}${post._id}`}
    >
      <SLink color="#fff">
        <ContainerPosts>
          <div className="containerImg">
            <img src={post.imagePost} alt={post.marca} />
          </div>

          <div className="containerInfProduct">
            <p className="name">{post.nome}</p>
            <p className="date">{post.date}</p>
          </div>
        </ContainerPosts>
      </SLink>
    </Link>
  )
}
export default RenderPostWithDate
