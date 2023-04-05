import { handleClientRequest } from "@/lib/handleClientRequest";
import { toastErrorMessage } from "@/lib/toastErrorMessage";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useRedditData = (subreddit, sort, nsfw) => {
    const [data, setData] = useState([]);
    const [after, setAfter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [trigger, setTrigger] = useState(false)
    const toast = useToast();

    useEffect(() => {
        setData(() => []);
        setAfter(() => null)
        setLoading(() => false);
    }, [subreddit, sort, nsfw, trigger])


    const hasMore = after !== null;

    const reset = () => {
        setTrigger(old => !old)
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await handleClientRequest(subreddit, sort, after, nsfw);
            if (response.error) {
                throw new Error(response.message);
            }
            setData(prevData => [...prevData, ...response.data.posts]);
            setAfter(response.data.after);
        } catch (error) {
            toastErrorMessage({ message: error.message }, toast);
        }
        setLoading(false);
    };

    const next = () => {
        fetchData();
    };

    return {
        data,
        loading,
        hasMore,
        next,
        reset,
    };
};

export { useRedditData };
