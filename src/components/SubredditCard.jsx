import { getColorScheme } from '@/lib/colorSchemeHandler';
import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Text,
    VStack
} from '@chakra-ui/react'

function SubredditCard({ data, exampleSearch }) {
    const { title, subs } = data;
    const colorScheme = getColorScheme();
  return (
    <Card>
        <CardHeader>
            <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={`${colorScheme}.300`}
                fontSize={"lg"}
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