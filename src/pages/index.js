import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {

  comparePostsByLecture = (a, b) => {
    return a.node.frontmatter.lecture - b.node.frontmatter.lecture;
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMarkdownRemark.edges

    const posts = _.groupBy(data.allMarkdownRemark.edges, function(o) {
      return o.node.frontmatter.day;
    })

    const sections = [
      {
        day: 1,
        title: '1. nap - Webfejlesztés alapok'
      },
      {
        day: 2,
        title: '2. nap - Webfejlesztés haladó'
      },
      {
        day: 3,
        title: '3. nap - React fejlesztés'
      },
      {
        day: 4,
        title: '4. nap - Bónusz ismeretek'
      },        
    ];

    const day1post = posts[1].sort(this.comparePostsByLecture);
    const day2post = posts[2].sort(this.comparePostsByLecture);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Főoldal"
          keywords={[`javascript`, `frontend`, `bootcamp`, `react`]}
        />
        <Bio />
        <h2 style={{ marginBottom: 5, marginTop: 20 }}>1. nap - Webfejlesztés alapok</h2>
        {day1post.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const lecture = node.frontmatter.lecture || '-'
          return (
            <div className="row">
              <div className="column">
                <div className="content">
                  <div className="card">
                    <div className="firstinfo"><i className={node.frontmatter.icon} />
                      <div className="profileinfo">
                        <h1 style={{ margin: 5, color: '#d23669' }}>
                          {title}
                        </h1>
                        <h3 style={{ margin: 5 }}>{lecture + '. lecke' + '  |  ' + node.frontmatter.date}</h3>
                        <p className="bio" style={{ margin: 5 }} dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }} />
                        <a>
                          <Link style={{ boxShadow: `none`, color: '#d23669' }} to={node.fields.slug}>
                              {'Elmélet'}
                          </Link>
                        </a>
                        {'  |  '}            
                        <a href={`https://www.index.hu`}>
                          Gyakorlat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <h2 style={{ marginBottom: 5, marginTop: 20 }}>2. nap - Webfejlesztés haladó</h2>
        {day2post.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const lecture = node.frontmatter.lecture || '-'
          return (
            <div className="row">
              <div className="column">
                <div className="content">
                  <div className="card">
                    <div className="firstinfo"><i className={node.frontmatter.icon} />
                      <div className="profileinfo">
                        <h1 style={{ margin: 5, color: '#d23669' }}>
                          {title}
                        </h1>
                        <h3 style={{ margin: 5 }}>{lecture + '. lecke' + '  |  ' + node.frontmatter.date}</h3>
                        <p className="bio" style={{ margin: 5 }} dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }} />
                        <a>
                          <Link style={{ boxShadow: `none`, color: '#d23669' }} to={node.fields.slug}>
                              {'Elmélet'}
                          </Link>
                        </a>
                        {'  |  '}            
                        <a href={`https://www.index.hu`}>
                          Gyakorlat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <h2 style={{ marginBottom: 5, marginTop: 20 }}>3. nap - Bónusz ismeretek</h2>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___day], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            icon
            description
            day
            lecture
          }
        }
      }
    }
  }
`
