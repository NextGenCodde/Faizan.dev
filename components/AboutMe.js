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
  I’m <strong>Faizan Khalid</strong> — a <strong>Shopify Theme Developer & UI/UX-focused Frontend Engineer</strong> who builds production-ready, conversion-first storefronts and reliable API integrations.

  <br />
  <br />
  I help teams solve the problems that slow growth and frustrate customers:
  <br />• <strong>Faster load times</strong> and improved Core Web Vitals.
  <br />• <strong>Higher conversions</strong> through clearer UX and checkout flows.
  <br />• <strong>Stable, maintainable customizations</strong> that scale with the business.

  <br />
  <br />
  I deliver clean, maintainable <strong>Liquid themes</strong>, headless / Shopify Plus solutions, and full-stack integrations. My typical workflow: <strong>audit → plan → implement → optimize → handoff</strong> — always prioritizing performance, accessibility, and measurable business outcomes.

  <br />
  <br />
  I build with{' '}
  <MoreInfo
    content="Liquid, Shopify Admin & Storefront APIs, GraphQL, React, Next.js, Redux, Node.js, Tailwind, MongoDB, REST, Git."
    text="this tech stack"
  />
  and have experience working remotely with distributed teams — I value clear communication, documented work, and predictable delivery.

  <br />
  <br />
  Available for remote US / EU roles — ready to help your team ship high-performing storefronts that convert.
  <br />
  <br />
  When I’m not building, you’ll find me watching a series or gaming on Xbox 🎮.
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
