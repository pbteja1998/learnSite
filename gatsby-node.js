const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators;

    const unitTemplate = path.resolve('src/templates/unit.js');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        next
                    }
                }
            }
        }
    }`)
    .then(result => {
        if(result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: unitTemplate
            })
        })
    })
}