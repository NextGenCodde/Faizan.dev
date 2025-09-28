import {
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
  FaShopify,
  FaServer,
  FaTint,
  FaWordpress 
} from 'react-icons/fa'
import {
  SiChakraui,
  SiChartdotjs,
  SiGreensock,
  SiGraphql,
  SiNextdotjs,
  SiShopify,
  SiRedux ,
  SiOpenai ,
  SiTailwindcss,
  SiThreedotjs,
  SiSpline,
} from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import Image from 'next/image'

export default function Cards({ imageURL, title, slug, desc, tag, deployLink }) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values = ['blue', FaReact]
    } else if (tag == 'Python') {
      values = ['orange', FaPython]
    } else if (tag == 'Javascript' || tag == 'JS') {
      values = ['yellow', FaJs]
    } else if (tag == 'Sass') {
      values = ['pink', FaSass]
    } else if (tag == 'Flask') {
      values = ['green', FaPepperHot]
    } else if (tag == 'Laravel') {
      values = ['red', FaLaravel]
    } else if (tag == 'Bootstrap') {
      values = ['purple', FaBootstrap]
    } else if (tag == 'SQL') {
      values = ['blue', FaDatabase]
    } else if (tag == 'Next.js') {
      values = ['gray', SiNextdotjs]
    } else if (tag == 'Chakra UI') {
      values = ['teal', SiChakraui]
    } else if (tag == 'Chart.js') {
      values = ['red', SiChartdotjs]
    } else if (tag == 'HTML') {
      values = ['orange', FaHtml5]
    } else if (tag == 'CSS') {
      values = ['blue', FaCss3Alt]
    } else if (tag == 'Tailwind CSS') {
      values = ['cyan', SiTailwindcss]
    } else if (tag == 'GSAP') {
      values = ['green', SiGreensock]
    } else if (tag == 'Three.js') {
      values = ['gray', SiThreedotjs]
    } else if (tag == 'Spline') {
      values = ['purple', SiSpline]
    } 
    // ✅ Newly Added
    else if (tag == 'REST API' || tag == 'API') {
      values = ['orange', FaServer]
    } else if (tag == 'GraphQL') {
      values = ['pink', SiGraphql]
    } else if (tag == 'Liquid') {
      values = ['teal', FaTint]
    } else if (tag == 'Shopify') {
      values = ['green', FaShopify]
    } else if (tag == 'Wordpress') {
      values = ['blue', FaWordpress]
    } else if (tag == 'CHATGPT API') {
      values = ['cyan', SiOpenai ]
    }  else if (tag == 'Redux') {
      values = ['teal', SiRedux ]
    } 
    else {
      values = ['gray', FaCode]
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]} />
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      minH="320px"
      maxH="auto"
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
      borderRadius="10px"
    >
      <Link
        href={deployLink}
        isExternal
        onClick={() => handleClick(`project_${title.replace('@', '-at')}`)}
      >
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
            <Image
              width={800}
              height={400}
              minH="270px"
              borderRadius="10px 10px 0px 0px"
              transition="0.3s"
              objectFit="cover"
              style={{
                borderRadius: '10px 10px 0px 0px',
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
              }}
              alt={title}
              src={imageURL}
            />
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl">
                {title}
              </Text>
              <FaExternalLinkAlt color="white" aria-label="project link" size={20} />
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
