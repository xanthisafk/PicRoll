import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

const useFavourites = (currentSubreddit) => {
    const KEY = "picroll-favourite-subreddit-list";

    const [favouriteSubreddits, setFavouriteSubreddits] = useState([]);
    const [isCurrentSubredditFavourite, setIsCurrentSubredditFavourite] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (!currentSubreddit) return;
        if (localStorage.getItem(KEY) === null) {
            console.log("it null")
            localStorage.setItem(KEY, JSON.stringify([])); // set as empty list.
            setFavouriteSubreddits([]);
        } else {
            const list = JSON.parse(localStorage.getItem(KEY));
            console.log(list.includes(currentSubreddit), list)
            setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
            setFavouriteSubreddits(list);
            console.log("not null: ", list.includes(currentSubreddit))
        }
        window.addEventListener("storage", event => {
            console.log({ event })
            if (event.key === KEY) {
                const list = JSON.parse(localStorage.getItem(KEY));
                console.log("event", { list })
                setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
                setFavouriteSubreddits(list);
            }
        })

    }, [currentSubreddit]);

    const triggerToast = (title, message, status) => {
        toast({
            status: status,
            title: title,
            description: message,
            duration: 5000,
            isClosable: true
        })
    }

    const add = (value) => {
        const list = JSON.parse(localStorage.getItem(KEY)); // list of subreddits
        console.log("add", { "before": list, value, isCurrentSubredditFavourite })
        const index = list.indexOf(value);
        console.log(index)
        if (index === -1) {
            list.push(value);
            localStorage.setItem(KEY, JSON.stringify(list));
        }
        setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
        setFavouriteSubreddits(list);
        console.log("add", { "after": list, value })
        triggerToast("Added to favourites", `${value} has been added to favourites!`, "success")
    }

    const remove = (value) => {
        const list = JSON.parse(localStorage.getItem(KEY)); // list of subreddits
        console.log("remove", { "before": list, value })
        const index = list.indexOf(value);
        if (index > -1) {
            list.splice(index, 1);
        }
        console.log("remove", { "after": list, value })
        localStorage.setItem(KEY, JSON.stringify(list));
        setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
        setFavouriteSubreddits(list);
        triggerToast("Removed from favourites", `${value} has been removed from favourites.`, "info")
    }

    return {
        favouriteSubreddits,
        isCurrentSubredditFavourite,
        add,
        remove
    }
}

export default useFavourites