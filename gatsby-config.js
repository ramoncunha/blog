module.exports = {
  siteMetadata: {
    siteTitle: 'Ramon Cunha - Blog',
    siteDescription: 'Blog criado para compartilhar conhecimento sobre tecnologias diversas.',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://ramoncunha.netlify.app',
    pathPrefix: '/',
    siteLanguage: 'pt',
    ogLanguage: `pt_BR`,
    author: 'Ramon Cunha',
    authorDescription: 'Back-end Developer - Aprendendo e compartilhando!', // short text about the author
    avatar: '/perfil-blog.jpeg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `github`,
        url: `https://github.com/ramoncunha`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/ramoncunha`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'ver mais',
          feedSearchPlaceholder: 'buscar',
          cardReadMoreButton: 'ler mais →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
