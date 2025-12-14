import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function ContactMe({ contactMe }) {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <Stack alignItems="center" justifyContent="center" w="100%" spacing={10}>
      <SlideUpWhenVisible>
        <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
          Keep In Touch.
        </Heading>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text color="textSecondary" fontSize="md" textAlign="center">
          {contactMe && contactMe[0] && (
            <>
              {contactMe[0].fields.title}{' '}
              <chakra.span
                color="button1"
                display={{ base: 'block', md: 'inline' }}
              >
                {' '}
                {contactMe[0].fields.highlightText}
              </chakra.span>
              .
              <br />
              {contactMe[0].fields.description}
            </>
          )}
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Stack isInline spacing={4}>
          <Link
            href="http://linkedin.com/in/faizan-khalid-dev/"
            isExternal
            onClick={() => handleClick('contact_linkedin')}
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin fill="#3CCF91" />}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:faizankhalid8610@gmail.com"
            isExternal
            onClick={() => handleClick('contact_email')}
          >
            <Button
              pos="static"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#3CCF91" />}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              Email
            </Button>
          </Link>
             <Link href="https://github.com/NextGenCodde/" isExternal>
            <Button
              pos="static"
              color="white"
              leftIcon={<FaGithub color="#3CCF91" />}
              onClick={() => handleClick('introduction_github')}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              Github
            </Button>
          </Link>
        </Stack>
      </SlideUpWhenVisible>
    </Stack>
  )
}
