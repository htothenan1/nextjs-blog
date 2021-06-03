import Image from 'next/image'

const MyProfile = () => {
    return (
    <Image 
    src="/images/profile.jpg"
    height={250}
    width={250}
    alt="Hernan's profile picture"
    />
    )
}

export default MyProfile;