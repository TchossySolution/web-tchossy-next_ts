const baseMain = 'main'

export const routsNameMain = {
  home: `/${baseMain}`,
  otherPages: {
    projects: `/${baseMain}/projects`,
    team: {
      index: `/${baseMain}/team`,
      details: `/${baseMain}/team/[id]`
    }
  },
  about: `/${baseMain}/about`,
  service: `/${baseMain}/service`,
  blog: {
    index: `/${baseMain}/blog`,
    tag: `/${baseMain}/blog/[...blog]`,
    details: `/${baseMain}/blog/post/[...slug]`,
    category: `/${baseMain}/blog/[...blog]`
  },
  contact: `/${baseMain}/contact`
}
