import { handleClientRequest } from "@/lib/handleClientRequest";
import { toastErrorMessage } from "@/lib/toastErrorMessage";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useRedditData = (subreddit, sort, nsfw) => {
    const [data, setData] = useState([]);
    const [after, setAfter] = useState(null);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (!subreddit || !sort || !nsfw) return;
        resetData();
        fetchData();
    }, [subreddit, sort, nsfw]);

    const hasMore = after !== null;

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await handleClientRequest(subreddit, sort, after, nsfw);
            if (response.error) {
                throw new Error(response.data.message);
            }
            setData(prevData => [...prevData, ...response.data.posts]);
            setAfter(response.data.after);
        } catch (error) {
            toastErrorMessage({ message: error.message }, toast);
        }
        setLoading(false);
    };

    const fetchMore = () => {
        fetchData();
    };

    const resetData = () => {
        setData(() => []);
        setAfter(() => null);
        setLoading(() => false);
    }

    return {
        data,
        loading,
        hasMore,
        fetchMore,
        resetData,
    };
};

export { useRedditData };
