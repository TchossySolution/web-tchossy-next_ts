export type socialLinksType = {
  type: string
  link: string
}
export type memberTimePropsType = {
  _id: string
  imgUrl: string
  name: string
  role: string
  socialLinks: socialLinksType[]
}

export type memberTimeType = {
  memberTime: memberTimePropsType
}
