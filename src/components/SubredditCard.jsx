import { Card, CardBody, CardHeader, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function SubredditCard({ data, searchSomething }) {
    const { title, subs } = data;
  return (
    <Card>
        <CardHeader>
            <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={"#ff4500"}
                fontSize={"lg"}
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
                            transition={".2s ease-in"}
                            _hover={{
                                textDecoration: 'underline'
                            }}
                            onClick={() => searchSomething(sub.value)}
                        >{sub.text}</Text>
                    )
                })}
            </VStack>
        </CardBody>
    </Card>
  )
}

export default SubredditCard