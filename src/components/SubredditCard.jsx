import { Card, CardBody, CardHeader, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function SubredditCard({ data, searchSomething }) {
    const { title, subs } = data;
  return (
    <Card>
        <CardHeader>
            <Text textAlign={"center"} fontWeight={"bold"} color={"#ff4500"} fontSize={"lg"}>{title}</Text>
            <Divider />
        </CardHeader>
        <CardBody>
            <VStack>
                {subs.map((sub, index) => {
                    return (<Link
                        key={index}
                        href={"#"}
                        onClick={() => searchSomething(sub.value)}
                        >{sub.text}</Link>
                    )
                })}
            </VStack>
        </CardBody>
    </Card>
  )
}

export default SubredditCard