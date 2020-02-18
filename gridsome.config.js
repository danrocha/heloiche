module.exports = {
  siteName: "Heloiche",
  siteDescription:
    "Avó, ateira, e leitora voraz.",
  siteUrl: "https://heloiche.com",
  titleTemplate: `%s | Heloiche`,
  icon: "src/favicon.png",

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          {
            theme: "min-light"
          }
        ]
      ]
    }
  },

  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        baseDir: "./content/posts",
        typeName: "Post",
        template: "./src/templates/Post.vue",
        pathPrefix: "/posts",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          },
          author: {
            typeName: "Author",
            create: true
          }
        },
        plugins: [
          [
            "gridsome-plugin-remark-shiki",
            {
              theme: "min-light"
            }
          ]
        ]
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-135446199-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Bleda, a Gridsome blog starter",
          feed_url: "https://gridsome-starter-bleda.netlify.com/feed.xml",
          site_url: "https://gridsome-starter-bleda.netlify.com"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: "https://gridsome-starter-bleda.netlify.com" + node.path,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "feed.xml"
        }
      }
    }
  ],

  templates: {
    Tag: "/tag/:id",
    Author: "/author/:id"
  },

  chainWebpack: config => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap(options => {
        options.plugins.unshift(
          ...[
            require("postcss-import"),
            require("postcss-nested"),
            require("tailwindcss")
          ]
        );

        if (process.env.NODE_ENV === "production") {
          options.plugins.push(
            ...[
              require("@fullhuman/postcss-purgecss")({
                content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
                defaultExtractor: content =>
                  content.match(/[\w-/:%]+(?<!:)/g) || [],
                whitelistPatterns: [/shiki/]
              })
            ]
          );
        }

        return options;
      });
  }
};
