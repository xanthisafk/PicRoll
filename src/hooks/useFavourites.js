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
            localStorage.setItem(KEY, JSON.stringify([])); // set as empty list.
            setFavouriteSubreddits([]);
        } else {
            const list = JSON.parse(localStorage.getItem(KEY));
            setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
            setFavouriteSubreddits(list);
        }
        
        // create the event handler
        const eventHandler = event => {
            if (event.key === KEY) {
                const list = JSON.parse(localStorage.getItem(KEY));
                setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
                setFavouriteSubreddits(list);
            }
        }
        // finally set the event listener
        window.addEventListener("storage", eventHandler)

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
        const index = list.indexOf(value);
        if (index === -1) {
            list.push(value);
            localStorage.setItem(KEY, JSON.stringify(list));
        }
        setIsCurrentSubredditFavourite(list.includes(currentSubreddit));
        setFavouriteSubreddits(list);
        triggerToast("Added to favourites", `${value} has been added to favourites!`, "success")
    }

    const remove = (value) => {
        const list = JSON.parse(localStorage.getItem(KEY)); // list of subreddits
        const index = list.indexOf(value);
        if (index > -1) {
            list.splice(index, 1);
        }
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