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
    tag: `/${baseMain}/blog/search/[...blog]`,
    details: `/${baseMain}/blog/post/[...post]`,
    category: `/${baseMain}/blog/search/[...blog]`
  },
  contact: `/${baseMain}/contact`
}
