const baseMain = 'main'

export const routsNameString = {
  home: `/${baseMain}`,
  otherPages: {
    projects: {
      index: `/${baseMain}/projects`,
      details: `/${baseMain}/projects/details/`
    },
    team: {
      index: `/${baseMain}/team`,
      details: `/${baseMain}/team/details/`
    },
    testimonial: `/${baseMain}/testimonial`,
    pricing: `/${baseMain}/pricing`,
    faq: `/${baseMain}/faq`
  },
  about: `/${baseMain}/about`,
  service: `/${baseMain}/service`,
  blog: {
    index: `/${baseMain}/blog`,
    tag: `/${baseMain}/blog/search/tag/`,
    details: `/${baseMain}/blog/post/`,
    category: `/${baseMain}/blog/search/category/`
  },
  contact: `/${baseMain}/contact`
}
