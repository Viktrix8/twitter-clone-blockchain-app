import { useContext } from 'react'

import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const ProfileTweets = () => {
  const { tweets } = useContext(TwitterContext)

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post post={tweet} key={index} />
      ))}
    </div>
  )
}

export default ProfileTweets
