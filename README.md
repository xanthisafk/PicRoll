<img src="./public/logo.svg" width="100"> 

# PicRoll

PicRoll is a web app that allows users to search for and view images from Reddit. It was built using React and Next.js.

[This website is live!]("https://pichost.vercel.app)

---

#### Table of contents

- [Online app](#online-app)
- [Running locally](#running-locally)
    - [Creating Reddit App](#creating-reddit-app)
    - [First start](#first-start)
    - [Conclusion](#conclusion)
- [Using the app](#using-the-app)
- [Future features](#future-features)
- [Why](#why)

## Online app
You can go to [https://picroll.vercel.app](https://picroll.vercel.app) to use this app without any setup.

## Running locally

### Creating Reddit App

1. Go to the Reddit apps page [Reddit prefs page](https://www.reddit.com/prefs/apps) and log in to your Reddit account.
2. Click on the `create app` or `create another app` button, depending on whether you have created an app before.
3. Select the app type you want to create - `script`. This is the only type that works without OAuth.
4. Give your app a name that will help you identify it later. This name is not visible to Reddit users.
Enter a short description of your app. This is also not visible to Reddit users.
5. In the `about url` field, enter the URL of your website or a page that provides more information about your app.
6. In the `redirect uri` field, enter the URL where Reddit should redirect users after they authorize your app. For example, if your app is hosted at `https://www.example.com`, you would enter `https://www.example.com/`. If you do not have a public web app, you can enter `https://localhost:3000`.
8. Click on the `create app` button to create your app.
9. Copy the `client id` and `client secret` values from the app details page. You will need these values along with your username and pasword to authenticate your app and make API calls to Reddit.

### First Start

1. Clone the repository
    ```bash
    git clone https://github.com/xanthisafk/PicRoll.git
    ```

2. Update environment variables
    
    Create a `.env.local` file in the root of project
    ```bash
    cd PicRoll
    touch .env.local
    ```

    Edit `.env.local` and add this
    ```env
    # public
    # Reddit Related
    NEXT_PUBLIC_REDDIT_CLIENT_ID=Your Reddit Client ID
    NEXT_PUBLIC_REDDIT_REDIRECT_URI=Your redirect URI. MUST MATCH THE URI YOU DEFINED.
    NEXT_PUBLIC_REDDIT_SCOPE="identity mysubreddits" # this is default, however you can add any.

    # Google Analytics
    NEXT_PUBLIC_GOOGLE_GTAG_MEASUREMENT_ID="" # Leave blank and Google Analytics will be disabled.

    # Non public
    # Reddit Related
    REDDIT_USER_AGENT="web:PicRoll:v2.2 (by /u/xxanthis)" # or anything you want however you should try to follow this rule of creating user agent (advised by Reddit)
    REDDIT_CLIENT_SECRET=Your Reddit Client Secret
    ```

3. Install dependencies
    
    Using Yarn
    ```bash
    yarn install
    ```

    Using NPM
    ```bash
    npm install
    ```

4. Build (Optional)

    If you don't plan to change source code, it is highly recommended that you do this step.

    Using Yarn
    ```bash
    yarn build
    ```

    Using NPM
    ```bash
    npm run build
    ```

5. Run

    - If you skipped step 4

        Using Yarn
        ```bash
        yarn dev
        ```

        Using NPM
        ```bash
        npm run dev
        ```
    - If you did step 4
        Using Yarn
        ```bash
        yarn start
        ```

        Using NPM
        ```bash
        npm start
        ```

### Conclusion

If everything went right, your app would be running on [http://localhost:3000](http://localhost:3000)

## Using the app

- Enter subreddit name into the input box on top.
    - You can enter whole url e.g.; `https://www.reddit.com/r/xanthis/` just the short name e.g.; `r/xanthis` or just the name e.g.; `xanthis`.
- Select a sort option.
- Click `Let's Roll!`.



## Future features

- v2.1
    - [x] Masonry grid
    - [x] Infinte scroll
    - [x] NSFW detection
    - [x] More customizability
    - [x] Better layout

- v2.2
    - [ ] Reddit OAuth


## Why

Recently I bought a new phone and was looking through [r/wallpaper](https://www.reddit.com/r/wallpaper) for a new wallpaper. After opening only a few posts my PC started slowing down (I don't have a state of the art PC), so I reloaded the page. But after a few posts, it got slow again. So I decided to make a super simple image aggregator, which then I showed to my friends and they liked it too so I decided to turn it into this.
