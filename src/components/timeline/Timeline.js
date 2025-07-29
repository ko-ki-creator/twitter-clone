import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';

function Timeline() {
    return (
        <div className='timeline'>
            {/* Header */}
            <div className="timeline__header">
                <h2>ホーム</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post
                displayName="プログラミングチュートリアル"
                username="Shin_Engineer"
                verified={true}
                text="初めてのツイート"
                avatar="https://picsum.photos/400/300"
                image="https://picsum.photos/400/300"
            />

        </div>
    )
}

export default Timeline