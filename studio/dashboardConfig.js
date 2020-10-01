export default {
  widgets: [
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
                  buildHookId: '5f75bad52f6779575f6babbe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e4ydwnno',
                  apiId: 'd5456642-849e-41a9-9c90-b4f591462039'
                },
                {
                  buildHookId: '5f75bad51986135c526dc622',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-169cyoa1',
                  apiId: '7e4c83c3-9f07-4228-be33-cfc5a3d8f473'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thainguyenbrodev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-169cyoa1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
