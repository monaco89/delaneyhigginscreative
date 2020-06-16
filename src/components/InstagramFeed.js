// import React from 'react'
// import Image from '../components/Image'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// const nodeURL = 'https://www.instagram.com/p'

// const InstagramFeed = () => {
//   const {
//     allInstaNode: { edges }
//   } = useStaticQuery(graphql`
//     {
//       allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 4) {
//         edges {
//           node {
//             id
//             caption
//             localFile {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const renderImages = () => {
//     const images = edges.map(({ node }) => {
//       const {
//         id,
//         caption,
//         localFile: { childImageSharp }
//       } = node
//       return (
//         <div>
//           <a href={`${nodeURL}/${id}`}>
//             <Img
//               loading="lazy"
//               alt={caption || ''}
//               fluid={childImageSharp.fluid}
//               style={{
//                 objectFit: 'cover',
//                 objectPosition: '100% 0',
//                 width: '100%',
//                 height: '100%',
//                 maxHeight: '25rem'
//               }}
//             />
//           </a>
//         </div>
//       )
//     })

//     return images
//   }

//   return <div>{renderImages()}</div>
// }

// export default InstagramFeed
