import { useState, useContext } from 'react'
import { VscTwitter } from 'react-icons/vsc'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import {
  BsBookmarkFill,
  BsBookmark,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

import SidebarOption from './SidebarOption'
import { TwitterContext } from '../context/TwitterContext'
import ProfileImageMinter from './mintingModal/ProfileImageMinter'
import { customStyles } from '../lib/constants'

Modal.setAppElement('#__next')

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-3xl p-2`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `rounded-full h-12 w-12`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: 'text-lg',
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center m3-2`,
}

const Sidebar = ({ initialSelectedIcon = 'Home' }) => {
  const [selected, setSelected] = useState(initialSelectedIcon)
  const { currentUser, currentAccount } = useContext(TwitterContext)
  const router = useRouter()

  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          text="Home"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Home')}
          icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          redirect={`/`}
        />
        <SidebarOption
          text="Explore"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Explore')}
          icon={selected === 'Explore' ? FaHashtag : BiHash}
          redirect={`/`}
        />
        <SidebarOption
          text="Notifications"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Notifications')}
          icon={selected === 'Notifications' ? FaBell : FiBell}
          redirect={`/`}
        />
        <SidebarOption
          text="Messages"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Messages')}
          icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          redirect={`/`}
        />
        <SidebarOption
          text="Bookmarks"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Bookmarks')}
          icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          redirect={`/`}
        />
        <SidebarOption
          text="Lists"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Lists')}
          icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          redirect={`/`}
        />
        <SidebarOption
          text="Profile"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Profile')}
          icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          redirect={`/profile`}
        />
        <SidebarOption icon={CgMoreO} text="More" setSelected={setSelected} />
        <div
          className={style.tweetButton}
          onClick={() =>
            router.push(`${router.pathname}/?mint=${currentAccount}`)
          }
        >
          Mint
        </div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          <img
            src={currentUser.profileImage}
            className={
              currentUser.isProfileImageNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
            alt="profile image"
          />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>{currentUser.name}</div>
            <div className={style.handle}>
              @{currentAccount.slice(0, 4)}...{currentAccount.slice(-4)}
            </div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  )
}

export default Sidebar
