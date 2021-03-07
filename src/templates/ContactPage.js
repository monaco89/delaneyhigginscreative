import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import '../style/ContactPage.css'

const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  address,
  phone,
  email
}) => (
  <main className="Contact">
    <PageHeader title={title} subtitle={subtitle} />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <StaticImage
            src="../images/contact_me.jpg"
            style={{ width: '100%' }}
            alt="computer and notepad"
            placeholder="blurred"
          />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin color="black" />
                __________________________ {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone color="black" />
                _________________________________ {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail color="black" /> ____________________ {email}
              </a>
            )}
          </div>
        </div>

        <div className="Contact--Copy">
          <Content src={body} />
          <FormSimpleAjax />
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
      }
    }
  }
`
