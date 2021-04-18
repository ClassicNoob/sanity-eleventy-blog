export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '607c128996b0b00310cabb16',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-gzptphon',
                  apiId: '33579551-a6bd-477c-9816-939661b6364c'
                },
                {
                  buildHookId: '607c1289266fa8cbb540f4c1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-d4fgum2y',
                  apiId: '0bf8b6c8-214d-4108-8497-6aaa317ecc55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ClassicNoob/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-d4fgum2y.netlify.app', category: 'apps'}
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
