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

export default class Meta extends Component {
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

    console.log(absoluteImageUrl)
    return (
      <Helmet>
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
            'https://res.cloudinary.com/nickmonaco/image/upload/v1590099560/delaney_home_cxtben.jpg'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image:secure_url"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/v1590099560/delaney_home_cxtben.jpg'
          }
        />
        <meta
          property="og:image"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/v1590099560/delaney_home_cxtben.jpg'
          }
        />
        <meta
          name="twitter:card"
          content={
            absoluteImageUrl ||
            'https://res.cloudinary.com/nickmonaco/image/upload/v1590099560/delaney_home_cxtben.jpg'
          }
        />

        {/* {googleTrackingId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
        )} */}
      </Helmet>
    )
  }
}
