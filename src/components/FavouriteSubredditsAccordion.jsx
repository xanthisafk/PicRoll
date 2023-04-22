import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    Flex,
    IconButton,
    HStack,
    VStack,
    AccordionIcon,
  } from "@chakra-ui/react";
  import { CloseIcon, StarIcon } from "@chakra-ui/icons";
  import useFavourites from "@/hooks/useFavourites";
  import { useRouter } from "next/router";
  
  const FavouriteSubredditsAccordion = () => {
    const {
      favouriteSubreddits,
      remove
    } = useFavourites("")
    const router = useRouter();
  
    return (
      <Accordion defaultIndex={[]} allowMultiple py={5} width={"100%"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="center" as="span">
                Favourite Subreddits
              </Box>
              <AccordionIcon aria-hidden="true" />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {favouriteSubreddits.length !== 0 && <Flex
              width={"100%"}
              wrap={"wrap"}
              justify={"center"}
              align={"center"}
              gap={1}
            >
            {favouriteSubreddits.map((sub, index) => (
              <HStack
                  key={index}
                  minWidth={"10%"}
                  direction={"row"}
                  justify={"space-between"}
                  align={"center"}
                  my={1}
                  p={2}
                  border={"2px solid"}
                  borderColor={"whiteAlpha.300"}
                  borderRadius={"lg"}
                  transition={".2s ease"}
                  cursor={"pointer"}
                  _hover={{
                      bg: "whiteAlpha.300"
                  }}
                  onClick={() => router.push(`/${sub}/hot`)}
                  onKeyDown={event => {
                      if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          router.push(`/${sub}/hot`)
                      }
                  }}
                  tabIndex={0}
                  aria-label={`Go to ${sub}`}
              >
                  <Text as={"span"} width={"100%"} height={"100%"}>{sub}</Text>
                  <IconButton
                      icon={<CloseIcon />}
                      colorScheme="red"
                      onClick={event => {
                          event.stopPropagation();
                          remove(sub)
                      }}
                      onKeyDown={event => {
                          if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              event.stopPropagation();
                              remove(sub)
                          }
                      }}
                      aria-label={`Remove ${sub} from favourites`}
                  />
              </HStack>
          ))}
            </Flex>}
            {favouriteSubreddits.length === 0 && (
              <>
                  <VStack>
                  <Text fontStyle={"italic"}>There are no subreddits here</Text>

                  <Text>You can add subreddits here by pressing <StarIcon mb={1.5} /> on the subreddit page.</Text>

                  </VStack>
              </>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default FavouriteSubredditsAccordion;
  