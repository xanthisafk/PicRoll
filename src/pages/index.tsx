/* eslint-disable @next/next/no-img-element */
import { Masonry } from '@mui/lab';
import { Box, Button, ImageList, ImageListItem, TextField } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {

  const [currentSubreddit, changeSubreddit] = useState("")
  const [images, setImages] = useState([]);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const subreddit = e.target.value;
    
      changeSubreddit(() => subreddit);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick()
  }

  const handleClick = async () => {
    if ( !currentSubreddit ) { return }

    fetch(`/api/v1/get_images/${currentSubreddit}`).then(r => r.json()).then(data => {
      console.log(data)
      if (data.error) {
        alert(data.message);
      }

      setImages(() => data.data)

    })
  }

  return (
    <>
      <Head>
        <title>Redditor</title>
        <meta name="description" content="redditor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
      <Box
        sx={{
          paddingY: "1em",
          width: "100%",
          display: "flex",
          justifyContent: 'space-evenly'
        }}
      >
        <TextField
        id="subreddit"
        label="subreddit"
        variant="outlined"
        onChange={handleInputChange}
        sx={{
          width: "80%",
        }}
      />
      <Button
        onClick={handleClick}
        sx={{
          width: "15%"
        }}
        variant="contained"
      >Search</Button>
      </Box></form>

      <Masonry columns={3} spacing={2}>
        {images && images.map((item, index) => (
            <img
              key={index}
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
                cursor: 'pointer',
              }}
              onClick={() => window.open(item.permalink, '_blank')}
            />
        ))}
      </Masonry>

      {/* <ImageList
        variant='masonry'
        cols={2}
        rowHeight={700}
      >
        {images && images.map((path, index) => 
          <ImageListItem key={index}>
            <img
              src={path.imageUrl}
              alt={path.title}
              title={path.title}
              key={index}
              loading={"lazy"}
              style={{
                width: path.width,
                height: path.height
              }}
            />
          </ImageListItem>
        )}
      </ImageList> */}
      </main>
    </>
  )
}
