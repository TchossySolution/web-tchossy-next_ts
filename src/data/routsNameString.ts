const baseMain = 'main'

export const routsNameString = {
  home: `/${baseMain}`,
  otherPages: {
    projects: `/${baseMain}/projects`,
    team: {
      index: `/${baseMain}/team`,
      details: `/${baseMain}/team/`
    }
  },
  about: `/${baseMain}/about`,
  service: `/${baseMain}/service`,
  blog: {
    index: `/${baseMain}/blog`,
    tag: `/${baseMain}/blog/tag/`,
    details: `/${baseMain}/blog/post/`,
    category: `/${baseMain}/blog/category/`
  },
  contact: `/${baseMain}/contact`
}
