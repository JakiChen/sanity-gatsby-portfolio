export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f633e93e55d1fb39c10d28c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m8pogs7h',
                  apiId: '056ded21-e1f0-4147-a2c1-d620acb6d58d'
                },
                {
                  buildHookId: '5f633e93924ff0a01c89f945',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4675ue4t',
                  apiId: '42230e07-3d13-43cf-a25a-30f87f60901f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JakiChen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4675ue4t.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
