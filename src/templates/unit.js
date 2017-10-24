import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

export default function Unit({data})  {
    const post = data.markdownRemark;
    return(
        <div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />            
            <Link to={post.frontmatter.next}>
                <button>Next Chapter</button>
            </Link>
        </div>
    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                next
            }
        }
    }
`