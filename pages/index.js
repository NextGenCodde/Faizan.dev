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
          <title>Faizan Khalid - Frontend Engineer</title>
          <meta content="Faizan Khalid - Frontend Engineer" name="title" />
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
            description: "Based in Pakistan — I design & code production Websites."
          }
        },
        {
          fields: {
            emoji: "💼",
            description: "Freelance Developer — Open to remote & full-time",
            company: "developer roles.",
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
            title: "API Integration — Altura Diamonds",
            slug: "api-integration",
            description: "Implemented a certificate search feature for Altura Diamonds that lets users enter a gem’s certificate number, queries the Nivoda GraphQL API, and immediately redirects to the matching product page. I built a secure Express backend (token auth, environment variables, CORS), integrated it with the Shopify frontend",
            imageUrl: "/api-integration.png",
            tags: ["REST API", "GraphQL", "Liquid"],
            order: 1,
            deployLink: "https://alturadiamonds.com/pages/lab-grown-diamond-ring-design-studio?stage=Select+Setting"
          }
        },
        {
          fields: {
            title: "Tumie",
            slug: "tumie",
            description: "Stylish eCommerce front showcasing pet food items with elegant UI and smooth layout.",
            imageUrl: "/tumie.png",
            tags: ["HTML", "Bootstrap", "Javascript"],
            order: 2,
            deployLink: "https://nextgencodde.github.io/Tumie-Website/"
          }
        } , 
        {
             fields: {
               title: "PSX Arena — AI-Powered Stock Analysis Platform ",
               slug: "psx-arena",
               description: "Developed PSX Arena, a stock and crypto analysis platform where users can upload their trading charts and receive AI-generated technical analysis reports powered by the ChatGPT API. Built using WordPress and JavaScript, featuring real-time chart uploads, multiple market modes (stocks & crypto), and an intelligent bot system that delivers instant insights for traders.",
               imageUrl: "/stock-market.png",
               tags: ["Javascript", "CHATGPT API", "Wordpress"],
               order: 3,
               deployLink: "https://psxarena.site/technical-analysis/"
             }
        },
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
