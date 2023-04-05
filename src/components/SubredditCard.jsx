import { getColorScheme } from '@/lib/colorSchemeHandler';
import { gradientHelper } from '@/lib/gradientHelper';
import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Text,
    VStack
} from '@chakra-ui/react'

function SubredditCard({ data, exampleSearch, colorScheme }) {
    const { title, subs } = data;
  return (
    <Card m={3}>
        <CardHeader>
            <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={`${colorScheme}.300`}
                bg={gradientHelper(colorScheme)}
                backgroundClip={"text"}
                sx={{
                    WebkitTextFillColor: "transparent"
                }}
                fontSize={"2xl"}
                className={"title-font"}
            >{title}</Text>
            <Divider />
        </CardHeader>
        <CardBody>
            <VStack>
                {subs.map((sub, index) => {
                    return (
                        <Text
                            key={index}
                            href={""}
                            cursor={"pointer"}
                            _hover={{
                                textDecoration: 'underline',
                                color: `${colorScheme}.500`
                            }}
                            aria-label={`load ${sub.text} example`}
                            onClick={() => exampleSearch(sub.value)}
                        >{sub.text}</Text>
                    )
                })}
            </VStack>
        </CardBody>
    </Card>
  )
}

export default SubredditCard