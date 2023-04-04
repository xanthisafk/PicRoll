import Logo from '../components/Logo';
import { clearAuthState, getAuthState } from '@/lib/authState';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ERROR from '../data/error.json'
import { resetToken, setToken } from '@/lib/accessTokenStore';

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


        if (newState !== oldState) {
            setError(() => ERROR["498"]);
            const fun = async () => {
                await new Promise(r => setTimeout(r, 3000));
                router.push("/")
            }
            fun();
        }

        const func2 = async () => {
            setWaitingForCode(() => true);
            const code = params.code;
            const data = await fetch("/api/v1/auth/retrieve_token",{
                method: "post",
                body: JSON.stringify({
                    access_token: code
                }),
            })
            .then(res => res.json())

            if (!data.error) {
                
                let date = new Date();
                date = date.setDate(date.getDate() + data.expires_in / 86400);

                resetToken();
                setToken("reddit_access_token", data.access_token);
                setToken("reddit_token_expiry_date", date);
                setToken("reddit_refresh_token", data.refresh_token);
                clearAuthState();
                router.push("/")
            }

        }

        func2();
    }, [params, router])


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