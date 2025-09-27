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
  I’m Faizan Khalid — a Shopify Theme Developer and Full-Stack Engineer who builds production-ready, conversion-focused storefronts and custom integrations.

  I solve the problems that matter to store owners and teams: slow load times, fragile customizations, limited checkout flows, and poor cross-device UX. I deliver clean, maintainable Liquid themes and API integrations that are easy to extend and ship reliably to production.

  My work spans theme development, headless/shopify-plus approaches, and full-stack integrations — so I can take a task from design or wireframe all the way to a tested, documented release. I follow a pragmatic process: audit → plan → implement → optimize → handoff, and I prioritize performance, accessibility, and conversion best practices.

  <br />
  <br />
  I like to build with{' '}
  <MoreInfo
    content="Liquid, Shopify Admin & Storefront APIs, GraphQL, React, Next.js, Redux, Node.js, Tailwind, MongoDB, REST, Git."
    text="this tech stack"
  />
  and contribute to open-source projects when possible. I’ve worked remotely with cross-border teams and understand the importance of timely communication, clear tickets, and versioned code.

  <br />
  <br />
  I’m currently open to remote and full-time Shopify Theme Developer roles — ready to help your team ship stable, high-performing storefronts that convert.
  <br />
  <br />
  When I’m not coding, I’m likely watching a series or gaming on Xbox 🎮.
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
