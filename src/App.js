import React from 'react';
import './App.css';

import _ from 'lodash'

import avatarUrl from './assets/me.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSquareGitlab } from '@fortawesome/free-brands-svg-icons'

import {
  Box,
  Stack,
  HStack,
  Flex,
  Avatar,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  useControllableState,
  Divider,
  AbsoluteCenter,
  Center,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  StackDivider,
  List,
  ListItem,
  ListIcon,
  Highlight,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon, MinusIcon, ArrowRightIcon } from '@chakra-ui/icons'

const colors = {
  darkBlue: '#000077',
  lightBlue: '#7777ff',
  smoke: '#cfcfcf',
  blue: '#3182CE',
  cyan: '#00B5D8',
  darkCyan: '#003f3f',
  gray: '#718096',
  green: '#00cd00',
  greenDark: '#026440',
  orange: '#DD6B20',
  orangeDark: '#4e2a00',
  darkOrange: '#ff8c00',
  pink: '#D53F8C',
  purple: '#805AD5',
  red: '#E53E3E',
  teal: '#319795',
  yellow: '#D69E2E',
  blackGH: '#171515',
  blackBar: 'blackAlpha.500',
  whiteBar: 'blackAlpha.500',
  bgBlack: '#0F1017',
  bgWhite: '#90949A',
  bgGrayDark: 'gray.900',
  bgGrayLight: 'gray.100',
  white: '#f5f5f5'
}

const skills = [
  { name: "C/C++", years: 7 },
  { name: 'Arduino', years: 3 },
  { name: 'Embedded Systems', years: 2 },
  { name: 'Python', years: 5 },
  { name: 'MATLAB' },
  { name: 'JavaScript' },
]
const mainPage = '/'
const linkedinLink = 'https://www.linkedin.com/in/abtin-ortgoli/'
const emailLink = 'mailto: abtin.ortgoli@yahoo.com'
const githubLink = 'https://github.com/Zed-4'
const gitlabLink = 'https://gitlab.com/antin.ortholi'

function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  const [isMoreOpen, setMoreOpen] = useControllableState({ defaultValue: false });
  const grayOrBlack = useColorModeValue(colors['bgGrayLight'], colors['bgBlack']);
  const greenOrDarkGreen = useColorModeValue(colors['greenDark'], colors['green']);

  return (
    <Box bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}>
      {/* ----------------------------HamburgerIcon setup---------------------------- */}
      <Box bg={useColorModeValue(colors['whiteBar'], colors['blackBar'])} color={useColorModeValue(colors['red'], colors['orange'])} fontWeight='bold' boxShadow='dark-lg'>
        <Flex h={24} alignItems={'center'} justifyContent={'flex-start'}>
          <HStack spacing={1} alignItems={'center'}>
            {/* ----------------------------Dark/Light Mode---------------------------- */}
            <Button
              boxShadow='inner'
              fontSize='xl'
              ml='1'
              bg={useColorModeValue(colors['bgGrayLight'], colors['bgGrayDark'])}
              onClick={toggleColorMode}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.500', 'gray.700')
              }}>
              {colorMode === 'light' ? <MoonIcon color={colors["blue"]} /> : <SunIcon color={"yellow"} />}
            </Button>
            {/* ----------------------------Links---------------------------- */}
            <Center px="1" height='50px'>
              <Divider
                borderColor={useColorModeValue('gray.500', 'gray.500')}
                display={{ base: 'none', md: 'flex' }}
                height="50%"
                orientation='vertical'
              />
              <Divider
                borderColor={useColorModeValue('gray.500', 'gray.500')}
                display={{ base: 'none', md: 'flex' }}
                height="50%" orientation='vertical' />
            </Center>
          </HStack>
          {/* ----------------------------Name---------------------------- */}
          <Flex
            position="absolute"
            right='0'
            mt='85px'
            mr='150px'
            rounded='sm'
            px='2'
            fontSize={{ base: "sm", md: "lg", lg: '2xl' }}
            fontWeight='bold'
            color={useColorModeValue(colors['red'], colors['orange'])}
            _hover={{
              cursor: 'context-menu',
              textDecoration: 'none',
            }}>
            Abtin Ortgoli
          </Flex>
          <Flex p='1' right='0' top='0' position='absolute' align='center'>
            {/* ----------------------------Avatar---------------------------- */}
            <Link
              href={mainPage}>
              <Button
                bg={useColorModeValue(colors['bgWhite'], colors['bgBlack'])}
                as={Button}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.700')
                }}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                {/* <Avatar name='Abtin Ortgoli' m='2' size='2xl' src={avatarUrl} /> */}
                <Avatar
                  bg={useColorModeValue(colors['bgWhite'], colors['bgBlack'])}
                  color={colors['orange']}
                  name='Abtin Ortgoli'
                  m='2'
                  size={{ base: 'xl', md: 'xl', lg: '2xl' }}
                  src={avatarUrl} />
              </Button>
            </Link>
          </Flex>
        </Flex>
        {/* ----------------------------Nav Shrunk---------------------------- */}
        {/* {isOpen ? (
          <Box pb={2} display={{ md: 'none' }}>
            <Box
              border='1px'
              // color='blackAlpha.200'
              color={navShrunkColor}
            />
          </Box>
        ) : null} */}
      </Box >
      {/* ----------------------------Main page---------------------------- */}
      <Box minH='100vh' pb='20'>
        <Box position='relative' pt='20' >
          <Divider borderColor={useColorModeValue('gray.500', 'gray.500')} />
          <AbsoluteCenter px='0' mt='10'>
            <Link
              as='b'
              bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}
              p='1'
              rounded={'full'}
              color={useColorModeValue(colors['red'], colors['orange'])}
              _hover={{
                cursor: 'context-menu',
                textDecoration: 'none'
              }}
            >
              About
            </Link>
          </AbsoluteCenter>
        </Box>
        <Flex display="flex" justify="center">
          <Box
            noOfLines={isMoreOpen ? undefined : '1'}
            textShadow='none'
            align="center"
            m='1'
            mb='0'
            py='3'
            w='50%'
            // px='25%'
            color={useColorModeValue('gray.700', 'gray.300')}
          >
            As a Computer Engineering student graduated in the spring of 2023 from
            University of North Texas, I am a highly motivated and analytical
            individual with a strong foundation in both hardware and software
            systems. Throughout my studies, I have gained a comprehensive
            understanding of computer systems and their applications, including
            computer architecture, operating systems, computer networks, and
            programming languages. In addition to my technical skills, I am also a
            strong problem-solver and have the ability to think critically and
            creatively to find solutions to complex challenges. I am eager to apply
            my knowledge and skills to real-world problems and am excited to begin
            my career as a computer engineer.
          </Box>
        </Flex>
        {/* ----------------------------More Button---------------------------- */}
        <Box
          position='relative'
          mt={!isMoreOpen ? undefined : '2'}>
          <Divider borderColor={useColorModeValue('gray.500', 'gray.500')} />
          <AbsoluteCenter
            px='0'
            mt='0'>
            <Button
              rounded={!isMoreOpen ? 'full' : 'base'}
              onClick={() => setMoreOpen(!isMoreOpen)}
              bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}
              height='35px'
              variant='outline'
              mt='0'
              px='2'
              color={useColorModeValue(colors['red'], colors['orange'])}
              borderColor={useColorModeValue('gray.500', 'gray.500')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.300', 'gray.700'),
                color: useColorModeValue(colors['red'], colors['orange']),
                border: '2px',
                borderColor: useColorModeValue('gray.500', 'gray.500')
              }}>
              {isMoreOpen ? 'Less' : 'More'}
            </Button>
          </AbsoluteCenter>
        </Box >
        {/* ----------------------------Cards---------------------------- */}
        <Flex
          p='2'
          pt='10'
          pb='5'
          justify='space-evenly'
          direction={{ base: 'column', md: 'column', lg: 'row' }}>
          <Box>
            {/* ----------------------------Education CARD---------------------------- */}
            <Card
              minW='397px'
              p='2'
              bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}
              variant='unstyled'
              _hover={{
                boxShadow: 'dark-lg',
                textDecoration: 'none',
                bg: useColorModeValue(colors['whiteBar'], colors['blackBar']),
                opacity: '100%'
              }}>
              <CardHeader >
                <Heading
                  pb='5'
                  size='lg'
                  color={useColorModeValue(colors['red'], colors['orange'])}>
                  Education
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      rounded: 'md',
                      // bg: useColorModeValue(colors['bgWhite'], colors['orangeDark']),
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading size='sm' textTransform='uppercase'>
                      University of North Texas
                    </Heading>
                    <Text pt='2' fontSize='xs'>
                      Denton, TX
                    </Text>
                  </Box>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading size='sm' textTransform='uppercase'>
                      Degree
                    </Heading>
                    <Text pt='2' fontSize='md'>
                      Bachelor of Science in Computer Engineering
                    </Text>
                    <Text pt='2' fontSize='sm'>
                      <Highlight
                        query={['Graduated: Spring 2023', 'emphasize', 'Accentuate']}
                        styles={{
                          px: '2',
                          py: '1',
                          rounded: 'full',
                          bg: colors['orange'],
                          color: useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])
                        }}
                      >
                        Graduated: Spring 2023
                      </Highlight>
                    </Text>
                    <Text pt='2' fontSize='sm'>
                      <Highlight
                        query={['GPA: 3.23', 'emphasize', 'Accentuate']}
                        styles={{
                          px: '2',
                          py: '1',
                          rounded: 'full',
                          bg: colors['orange'],
                          color: useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])
                        }}
                      >
                        GPA: 3.23
                      </Highlight>
                    </Text>
                  </Box>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading pb='2' size='sm' textTransform='uppercase'>
                      Accomplishments
                    </Heading>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={ArrowRightIcon} color={colors['orange']} />
                        <Highlight
                          query={['Fall 2022', 'emphasize', 'Accentuate']}
                          styles={{
                            px: '2',
                            py: '1',
                            rounded: 'full',
                            bg: colors['orange'],
                            color: useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])
                          }}
                        >
                          NASA TSGC Design Challenge of Fall 2022
                        </Highlight>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ArrowRightIcon} color={colors['orange']} />
                        <Highlight
                          query={['Spring 2023', 'emphasize', 'Accentuate']}
                          styles={{
                            px: '2',
                            py: '1',
                            rounded: 'full',
                            bg: colors['orange'],
                            color: useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])
                          }}
                        >
                          NASA TSGC Design Challenge of Spring 2023
                        </Highlight>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Software/Hardware development
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Working with embedded systems
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Understanding of discrete and continuous-time signals
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Analog-to-digital conversion
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Transmission of information via communication channels
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Understanding of object-oriented programming
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            {/* ----------------------------Experiance CARD---------------------------- */}
          </Box>
          <Box>
            <Card
              p='2'
              bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}
              variant='unstyled'
              _hover={{
                boxShadow: 'dark-lg',
                textDecoration: 'none',
                bg: useColorModeValue(colors['whiteBar'], colors['blackBar']),
                opacity: '100%'
              }}>
              <CardHeader >
                <Heading
                  pb='5'
                  size='lg'
                  color={useColorModeValue(colors['red'], colors['orange'])}>
                  Experiance
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      rounded: 'md',
                      // bg: useColorModeValue(colors['bgWhite'], colors['orangeDark']),
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading size='sm' textTransform='uppercase'>
                      Good Samaritan Society
                    </Heading>
                    <Text pt='2' fontSize='xs'>
                      Denton, TX
                    </Text>
                  </Box>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading size='sm' textTransform='uppercase'>
                      Title
                    </Heading>
                    <Text pt='2' fontSize='md'>
                      Business Office Receptionist
                    </Text>
                    <Text pt='2' fontSize='sm'>
                      <Highlight
                        query={['PRESENT', 'emphasize', 'Accentuate']}
                        styles={{
                          px: '2',
                          py: '1',
                          rounded: 'full',
                          bg: colors['orange'],
                          color: useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])
                        }}
                      >
                        10-2021 TO PRESENT
                      </Highlight>
                    </Text>
                  </Box>
                  <Box
                    p='1'
                    opacity='50%'
                    _hover={{
                      boxShadow: 'inner',
                      textDecoration: 'none',
                      opacity: '100%'
                    }}>
                    <Heading pb='2' size='sm' textTransform='uppercase'>
                      Tasks
                    </Heading>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        <Highlight
                          query={['Fall 2022', 'emphasize', 'Accentuate']}
                          styles={{ px: '2', py: '1', rounded: 'full', bg: colors['orange'] }}
                        >
                          Drafted correspondence and proofed outgoing memos for accuracy
                        </Highlight>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        <Highlight
                          query={['Fall 2023', 'emphasize', 'Accentuate']}
                          styles={{ px: '2', py: '1', rounded: 'full', bg: colors['orange'] }}
                        >
                          Welcomed on-site visitors and directed to appropriate personnel
                        </Highlight>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Assisted with completion of forms or sign-in procedures
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Managed digital and analog filing systems to protect confidential data
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Established and maintained good communications with personnel.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MinusIcon} color={colors['orange']} />
                        Coordinated service providers for office equipment maintenance and repair
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            {/* ----------------------------Skill CARD---------------------------- */}
            <Box pt='2'>
              <Card
                p='2'
                bg={useColorModeValue(colors['bgGrayLight'], colors['bgBlack'])}
                variant='unstyled'
                _hover={{
                  boxShadow: 'dark-lg',
                  textDecoration: 'none',
                  bg: useColorModeValue(colors['whiteBar'], colors['blackBar']),
                  opacity: '100%'
                }}>
                <CardHeader >
                  <Heading
                    pb='5'
                    size='lg'
                    color={useColorModeValue(colors['red'], colors['orange'])}>
                    Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Stack
                      direction={{
                        base: 'column',
                        sm: 'row',
                        md: 'row'
                      }}
                      wrap='wrap'
                      rowGap='2'
                      spacing='2'
                    >
                      {_.map(skills, (skill, index) => (
                        <Box
                          opacity='50%'
                          display='flex'
                          _hover={{
                            boxShadow: 'inner',
                            rounded: 'md',
                            textDecoration: 'none',
                            opacity: '100%'
                          }}
                        >
                          <Box
                            backgroundColor={colors['orange']}
                            color={grayOrBlack}
                            rounded='md'
                            p='1'
                          >
                            {skill['name']}
                          </Box>
                          {skill['years'] && (
                            <Box
                              backgroundColor={greenOrDarkGreen}
                              color={grayOrBlack}
                              rounded='full'
                              px='2'
                              py='1'
                              ml='1'
                            >
                              +{skill['years']}
                            </Box>
                          )}
                        </Box>
                      ))}
                      {/* map goes here */}
                    </Stack>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Flex>
      </Box >
      {/* ----------------------------Footer---------------------------- */}
      < Flex
        bg={useColorModeValue(colors['whiteBar'], colors['blackBar'])}
        boxShadow='dark-lg' borderColor={useColorModeValue('gray.500', 'gray.500')}
        width={{ lg: '100vw' }}
        p='2'
        justify={{ base: "center", md: "flex-end", lg: "flex-end" }
        }
        position={{ lg: "fixed" }}
        right={0}
        bottom={0} >
        <Stack direction='row' spacing={2}>
          <ButtonGroup rounded='sm' boxShadow='dark-lg' colorScheme='gray' variant='ghost'>
            <Link href={emailLink}>
              <Button
                color={useColorModeValue(colors['purple'], colors['purple'])}
                fontSize={{ base: '15px', md: '20px', lg: '30px' }}
                height='48px'
                width={{ base: '80px', md: '100px', lg: '140px' }}
                leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
                _hover={{
                  rounded: 'sm',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.700'),
                }}
              >
                Email
              </Button>
            </Link>
            <Link href={linkedinLink} target='_blank'>
              <Button
                color={useColorModeValue(colors['blue'], colors['blue'])}
                fontSize={{ base: '15px', md: '20px', lg: '30px' }}
                height='48px'
                width={{ base: '90px', md: '120px', lg: '180px' }}
                leftIcon={<FontAwesomeIcon icon={faLinkedin} />}
                _hover={{
                  rounded: 'sm',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.700'),
                }}
              >
                Linkedin
              </Button>
            </Link>
            <Link href={githubLink} target='_blank'>
              <Button
                color={useColorModeValue(colors['blackGH'], colors['white'])}
                fontSize={{ base: '15px', md: '20px', lg: '30px' }}
                height='48px'
                width={{ base: '80px', md: '100px', lg: '140px' }}
                leftIcon={< FontAwesomeIcon icon={faGithub} />}
                _hover={{
                  rounded: 'sm',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.700'),
                }}
              >
                Github
              </Button>
            </Link>
            <Link href={gitlabLink} target='_blank'>
              <Button
                color={useColorModeValue(colors['orange'], colors['orange'])}
                fontSize={{ base: '15px', md: '20px', lg: '30px' }}
                height='48px'
                width={{ base: '80px', md: '100px', lg: '140px' }}
                leftIcon={< FontAwesomeIcon icon={faSquareGitlab} />}
                _hover={{
                  rounded: 'sm',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.700'),
                }}
              >
                Gitlab
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Flex >
    </Box >
  );
}

export default App;
