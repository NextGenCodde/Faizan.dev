import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
// import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ introduction, projects, contactMe }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Faizan Khalid - Frontend Developer</title>
          <meta content="Faizan Khalid - Frontend Developer" name="title" />
          <meta content="Fazi, Fazi website" name="keywords" />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies"
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="faizankhalid.vercel.app" property="og:url" />
          <meta
            content="Faizan Khalid - Frontend Developer"
            property="og:title"
          />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies"
            property="og:description"
          />
        
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          {/* <LatestArticle articles={articles} /> */}
          <ContactMe contactMe={contactMe} />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  let data = { items: [] }
  let data3 = { items: [] }
  let data4 = { items: [] }
  let data2 = { edges: [] }

  // Only try Contentful if environment variables are available
  if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
    try {
      const client = require('contentful').createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })

      try {
        data = await client.getEntries({
          content_type: 'featuredProjects',
          order: 'fields.order',
        })
      } catch (error) {
        console.warn('Failed to fetch featured projects:', error.message)
      }

      try {
        data3 = await client.getEntries({
          content_type: 'introduction',
          limit: 2,
          order: 'sys.createdAt',
        })
      } catch (error) {
        console.warn('Failed to fetch introduction:', error.message)
      }

      try {
        data4 = await client.getEntries({
          content_type: 'contactMe',
          limit: 1,
          order: 'sys.createdAt',
        })
      } catch (error) {
        console.warn('Failed to fetch contact info:', error.message)
      }
    } catch (error) {
      console.warn('Failed to create Contentful client:', error.message)
    }
  } else {
    console.warn('Contentful environment variables not found, using sample data')
    // Sample introduction data when Contentful is not available
    data3 = {
      items: [
        {
          fields: {
            emoji: "👋",
            description: "I'm a passionate Frontend developer in Pakistan"
          }
        },
        {
          fields: {
            emoji: "💼",
            description: "Currently working at",
            company: "Freelance Developer",
            companyUrl: null
          }
        }
      ]
    }
    data4 = {
      items: [
        {
          fields: {
            title: "Let's work together!",
            highlightText: "I'm always open to discussing new opportunities",
            description: "Whether you have a question or just want to say hi, feel free to reach out."
          }
        }
      ]
    }
    
    // Sample featured projects data for homepage
    data = {
      items: [
        {
          fields: {
            title: "Aero",
            slug: "aero",
            description: "Aero Theme is a sleek, modern, and performance-optimized eCommerce theme built to elevate any online shopping experience. Designed with speed, flexibility, and user engagement in mind, Aero offers a clean layout, bold typography, and seamless mobile responsiveness to help brands showcase their products beautifully",
            imageUrl: "/aero.png",
            tags: ["React", "Bootstrap", "Material UI"],
            order: 1,
            deployLink: "https://aero-template.netlify.app/"
          }
        },
     
        {
          fields: {
            title: "Helion",
            slug: "helion",
            description: "A beautiful portfolio-style website with responsive layout and smooth scrolling effects.",
            imageUrl: "/helion.png",
            tags: ["Javascript", "Tailwind", "HTML"],
            order: 2,
            deployLink: "https://nextgencodde.github.io/helion/"
          }
        },
        {
          fields: {
            title: "Tumie",
            slug: "tumie",
            description: "Stylish eCommerce front showcasing pet food items with elegant UI and smooth layout.",
            imageUrl: "/tumie.png",
            tags: ["HTML", "Bootstrap", "Javascript"],
            order: 3,
            deployLink: "https://nextgencodde.github.io/Tumie-Website/"
          }
        } , 
        {
          fields: {
            title: "Music Player",
            slug: "music-player",
            description: "Collecting of many songs you can listen,stop,resume, and many other functionalities",
            imageUrl: "/music-player.png",
            tags: ["Bootstrap", "Javascript"],
            order: 4,
            deployLink: "https://nextgencodde.github.io/music_player/music.html"
          }
        }
      ]
    }
    
  }

  return {
    props: {
      projects: data.items || [],
      introduction: data3.items || [],
      contactMe: data4.items || [],
    },
  }
}
