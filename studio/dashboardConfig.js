export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events1-studio-xp58redf',
                  apiId: '477da4d6-b073-4297-83e9-facf084c1cfc'
                },
                {
                  buildHookId: '5eb395894bdf81f8a893c3db',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events1-web-664udked',
                  apiId: 'dde8e957-6c8a-4496-a7cc-cdc198da1e91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-nuxt-events1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events1-web-664udked.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
