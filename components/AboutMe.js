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
              Hey! I'm Faizan Khalid, a passionate developer with a strong love
              for design and code. My journey with computers started early, and
              over the years, I've grown into a self-taught programmer with a
              focus on creating modern, fast, and responsive websites <br />
              <br /> I really liked to build stuff using{' '}
              <MoreInfo
                content=" hands-on experience with HTML, CSS, JavaScript, Bootstrap, TailwindCSS, React, and animation libraries like GSAP. I also work with advanced UI libraries such as Material UI, ShadCN, Magic UI, Universo, and more—crafting sleek and interactive frontend experiences is what I do best."
                text="coding tools"
              />
              Currently, I'm mastering the MERN Stack, with my frontend skills
              polished and production-ready. I'm also collaborating with{' '}
              <MoreInfo
                content={
                  'a growing startup, where we build stunning and performance-driven websites together'
                }
                text="3xIndica"
              />
              I'm interested in building something awesome with code and
              automate tasks with code, currently focused on
              <MoreInfo
                content="Building Web and Mobile Applications using Javascript Frameworks (React and Next.js)"
                text="Web Development,"
              />
              and
              <MoreInfo
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
                text="Competitive Programming"
              />
              <br />
              <br />
              When I’m not coding, you’ll probably find me watching a series on
              Netflix, gaming on my Xbox, or contributing to{' '}
              <MoreInfo
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
                text="Open Source"
              />{' '}
              projects to give back to the dev community and learn from it.
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
                alt="Abdul Rahman"
                src="https://i.imgur.com/jk8NmSx.jpeg"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
