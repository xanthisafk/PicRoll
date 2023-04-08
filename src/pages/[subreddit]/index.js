import { useRouter } from "next/router";

import sort from '../../data/sort.json';
import { useEffect } from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import Logo from "@/components/Logo";
import PicRollHead from "@/components/Head";
import Backdrop from "@/components/Backdrop";
import useColorScheme from "@/hooks/useColorScheme";

export default function Subreddit() {
    const router = useRouter();
    const { subreddit } = router.query;
    const defaultSort = "hot";
    const { gradient } = useColorScheme();
    useEffect(() => {
        if (!subreddit) return;
        router.push(`/${subreddit}/${defaultSort}`);
    }, [subreddit])

    return (
        <>
        <PicRollHead />
        <Backdrop gradient={gradient} />
        <main>
        <Flex
            width={"100vw"}
            height={"100vh"}
            justify={"center"}
            align={"center"}
            direction={"column"}
        >
            <Logo style={{width: "100px"}} />
            <Heading my={10}>Snap, click, redirect!</Heading>
            <Spinner size={"xl"} />
        </Flex>
        </main>
        </>
    )

}