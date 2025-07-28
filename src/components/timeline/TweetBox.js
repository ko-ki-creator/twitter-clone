import { Avatar, Button } from '@mui/material'
import React from 'react'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <Avatar />
                <input placeholder='いまどうしてる？' type="text"></input>
                <input
                    className='tweetBox__imageInput'
                    placeholder='画像のURLを入力してください'
                    type="text"
                ></input>
                <Button className='tweetBox__tweetButton' type='submit'>
                    ツイートする
                </Button>
            </form>
        </div>
    )
}

export default TweetBox