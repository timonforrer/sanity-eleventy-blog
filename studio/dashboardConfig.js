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
                  buildHookId: '618fd1d079018c55128c002c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-hqmh5ic7',
                  apiId: 'e8897e92-243f-439b-bf17-0cdfa9662e58'
                },
                {
                  buildHookId: '618fd1d0edf7c811a84f1017',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nyfeh62o',
                  apiId: 'a9c8a27e-996d-48fa-bf30-df118cb8fc10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timonforrer/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nyfeh62o.netlify.app', category: 'apps'}
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
