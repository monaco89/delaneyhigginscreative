import React from 'react';
import { FiMapPin, FiSmartphone, FiMail } from 'react-icons/fi';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageHeader from '../components/PageHeader';
import Content from '../components/Content';
import Layout from '../components/Layout';
import '../style/ContactPage.css';

const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  address,
  phone,
  email,
}) => (
  <main className="Contact">
    <PageHeader title={title} subtitle={subtitle} />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <StaticImage
            src="../images/contact_me.jpg"
            layout="fullWidth"
            alt="computer and notepad"
            placeholder="blurred"
          />
        </div>
        <div className="Contact--Copy">
          <div className="Contact--Details">
            <Content src={body} />
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMapPin color="black" />
                {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <FiSmartphone color="black" />
                {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <FiMail color="black" /> {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  </main>
);

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
);

export default ContactPage;

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
`;
