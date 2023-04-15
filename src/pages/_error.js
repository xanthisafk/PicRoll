import PicRollHead from "@/components/Head";
import Logo from "@/components/Logo";
import {
    Flex,
    Spinner,
    Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = ({statusCode}) => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => router.push("/"), 3000)
    })

    return (
        <>
            <PicRollHead title={`${statusCode} - PicRoll`} colorScheme={colorScheme} />
            <Flex
                width={"100vw"}
                height={"100vh"}
                direction={"column"}
                justify={"center"}
                align={"center"}
            >
                <Logo width={"100px"} />
                <Text as={"h1"} fontSize={"6xl"}>An error occured</Text>
                <Text>Rolling you back to main page...</Text>
                <Spinner size={"lg"} my={5} />
            </Flex>
        </>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
