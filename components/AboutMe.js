import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover isLazy placement="right" trigger="hover">
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
                onMouseOver={() => handleHover(`about_${text}`)}
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent color="white" bg="secondary" borderColor="button1">
              <PopoverArrow bg="button1" />
              <PopoverBody color="textPrimary" fontSize="sm">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
  color="textSecondary"
  fontSize={{ base: '14px', md: '16px' }}
  whiteSpace="pre-line"
>
  Hey! I'm Faizan Khalid — a passionate developer who loves both design and code. I started with computers early and evolved into a hands-on programmer focused on building modern, fast, and responsive websites.

  <br />
  <br />
  I like to build things using{' '}
  <MoreInfo
    content="Liquid, Shopify Admin & Storefront APIs, GraphQL, React, Next.js, Redux, Node.js, Tailwind, MongoDB, REST, Git."
    text="tech stack"
  />
  — shipping polished, production-ready storefronts and integrations.

  Currently, I work as a MERN Stack & Shopify Theme Developer, delivering <MoreInfo content="conversion-focused themes" text="high-impact themes" /> and reliable <MoreInfo content="Shopify Admin & Storefront API work, GraphQL, and REST integrations." text="API integrations" />. I started debugging code at 16, so I love solving hard problems and improving stores end-to-end.

  <br />
  <br />
  I’m driven to build useful tools and contribute back as an{' '}
  <MoreInfo
    content="I contribute features and fixes to open-source projects that help other developers and stores."
    text="Open Source Contributor"
  />
  . Right now my focus is on{' '}
  <MoreInfo
    content="Building web applications and storefronts using React, Next.js, and modern frontend tooling."
    text="Web Development"
  />
  , and I keep sharpening my problem solving with{' '}
  <MoreInfo
    content="Competitive programming for algorithms and faster debugging."
    text="Competitive Programming"
  />
  .
  Available for remote roles — open to full-time & contract.
  <br />
  <br />
  <br />
</Text>

          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex align="center" justify="center">
            <Box
              pos="relative"
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                pos="absolute"
                zIndex={3}
                top="0px"
                right={{ base: '-32px', lg: '-64px' }}
                w={{ base: '100px', lg: '150px' }}
                alt=""
                filter="invert(0.1)"
                src="https://svgsilh.com/svg/26432.svg"
              />
              <Image
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                objectFit="cover"
                objectPosition="top"
                borderRadius="50%"
                alt="Faizan Khalid"
                src="/personal.jpg"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}

