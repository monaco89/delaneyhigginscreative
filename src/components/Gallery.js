import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './Layout'
import PageHeader from './PageHeader'
import ImagesSection from './ImagesSection'

const queryClient = new QueryClient()

const Gallery = ({ tag, url, title }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        meta={{
          canonicalLink: url,
          title,
          description: `${title} images by delaney higgins`
        }}
      >
        <section
          className="section"
          style={{
            backgroundColor: title === 'graphic design' ? 'lightgray' : 'white'
          }}
        >
          <div className="container">
            <div className="content">
              <PageHeader title={title} />
              <ImagesSection tag={tag} />
              {tag === 'graphicdesign' && (
                <>
                  <PageHeader title="Typography" section />
                  <ImagesSection tag="typography" />
                  <PageHeader title="Social Media Graphics" section />
                  <ImagesSection tag="socialmediagraphics" />
                  <PageHeader title="Web and Branding Graphics" section />
                  <ImagesSection tag="webandbranding" />
                </>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </QueryClientProvider>
  )
}

export default Gallery
