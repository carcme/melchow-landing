const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTags {
      allContentfulEntry {
        nodes {
          ... on ContentfulBed {
            content {
              tags
            }
          }
          ... on ContentfulBakery {
            content {
              tags
            }
          }
          ... on ContentfulRecipe {
            content {
              tags
            }
          }
        }
      }
    }
  `)

  result.data.allContentfulEntry.nodes.forEach(item => {
    console.log(item?.content?.tags)

    item?.content?.tags?.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.jsx`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
// ----------------------

// const result = await graphql(`
//   query GetAllTags {
//   allContentfulEntry {
//     nodes {
//       ... on ContentfulRecipe {
//         content {
//           tags
//         }
//       }
//       ... on ContentfulBed {
//         content {
//           tags
//         }
//       }
//       ... on ContentfulBakery {
//         content {
//           tags
//         }
//       }
//     }
//   }
// }
// `)
