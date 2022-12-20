const baseMain = 'main'

export const routsNameMain = {
  home: `/${baseMain}`,
  otherPages: {
    projects: {
      index: `/${baseMain}/projects`,
      details: `/${baseMain}/projects/details/[...projects]`
    },
    team: {
      index: `/${baseMain}/team`,
      details: `/${baseMain}/team/details/[...team]`
    },
    testimonial: `/${baseMain}/testimonial`,
    pricing: `/${baseMain}/pricing`,
    faq: `/${baseMain}/faq`
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
