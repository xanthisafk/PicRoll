import Logo from '@/components/Logo';
import { getAuthState } from '@/lib/authState';
import { Flex, Heading, Image, Spinner, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ERROR from '../data/error.json'

const Authorize = () => {

    const [waitingForCode, setWaitingForCode] = useState(false);
    const [error, setError] = useState("")

    const router = useRouter();
    const params = router.query;

    useEffect(() => {

        const isError = params.error;
        if (isError === "access_denied") {
            router.push("/")
        }

        const newState = params.state;
        const oldState = getAuthState();


        console.log({ oldState, newState })
        if (newState && newState !== oldState) {
            setError(() => ERROR["498"]);
            const fun = async () => {
                await new Promise(r => setTimeout(r, 3000));
                //router.push("/")
            }
            fun();
        }

        const code = params.code;
        setWaitingForCode(() => true)
        
    }, [])


    return (
        <Flex
            width={"100vw"}
            height={"100vh"}
            justify={"center"}
            align={"center"}
            direction={"column"}
        >
            <Logo height={100} width={100} />
            {waitingForCode
                ?
                <>
                    <Heading py={10}>Logging you in</Heading>
                    <Spinner />
                </>
                : error && (
                    <Text fontSize={"xl"}>
                        {error}
                    </Text>
                )
            }

        </Flex>
    )
}

export default Authorize