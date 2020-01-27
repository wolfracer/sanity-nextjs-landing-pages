export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2ee49ebd2243d5a0e0d148',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z3rfukxu',
                  apiId: '63d2a526-c365-4ed2-9fc4-691507111716'
                },
                {
                  buildHookId: '5e2ee49e9448ed07c5f332ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-afzbhww6',
                  apiId: 'a2bdcb22-ed88-452c-8f17-8c9b0c9bc36a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wolfracer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-afzbhww6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
