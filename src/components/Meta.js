import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        noindex
        canonicalLink
      }
    }
  }
`

class Meta extends Component {
  render() {
    const {
      title,
      url,
      description,
      absoluteImageUrl,
      twitterSiteAccount,
      twitterCreatorAccount,
      noindex,
      canonicalLink,
      siteTitle,
      siteDescription
      // overwrite { title, description } if in fields or fields.meta
    } = this.props

    return (
      <Helmet htmlAttributes={{ lang: 'en' }}>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {url && <meta property="og:type" content="website" />}
        {url && <meta property="og:url" content={url} />}
        {twitterSiteAccount && (
          <meta name="twitter:site" content={twitterSiteAccount} />
        )}
        {twitterCreatorAccount && (
          <meta name="twitter:creator" content={twitterCreatorAccount} />
        )}
        {noindex && <meta name="robots" content="noindex" />}
        {canonicalLink && <link rel="canonical" href={canonicalLink} />}

        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta
          property="og:url"
          content={url || 'https://www.delaneyhiggins.com'}
        />

        <meta name="twitter:title" content={siteTitle} />
        <meta
          name="twitter:image"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/BE241D3A-5C5D-45D0-8420-477E939B4D66_a8qxyt.jpg'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image:secure_url"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/BE241D3A-5C5D-45D0-8420-477E939B4D66_a8qxyt.jpg'
          }
        />
        <meta
          property="og:image"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/BE241D3A-5C5D-45D0-8420-477E939B4D66_a8qxyt.jpg'
          }
        />
        <meta
          name="twitter:card"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/BE241D3A-5C5D-45D0-8420-477E939B4D66_a8qxyt.jpg'
          }
        />
      </Helmet>
    )
  }
}

export default Meta
