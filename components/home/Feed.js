import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { BsStars } from 'react-icons/bs'

import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const Feed = () => {
  const { tweets } = useContext(TwitterContext)
  console.log(tweets)

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets?.map((tweet, index) => (
        <Post post={tweet} key={index} />
      ))}
    </div>
  )
}

export default Feed
