"use client"

import { signIn,signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";



const Profile = () => {
    const session = useSession()
    return ( 
    <div className='h-[48px] rounded-full w-[48px]'>
        <Link href='#' onClick={()=> signOut({callbackUrl:'/'})}>
        <Image
            alt="profile"
            width={48}
            height={48}
            src={session.data?.user?.image? 
                session.data?.user?.image : ""}
                // 'https://media.istockphoto.com/id/587805156/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F.jpg?s=2048x2048&w=is&k=20&c=LL46EbcvW1S5kdK2S6drvP1n1HIIY2x0mMH1Mykaw60='}
            />    
        </Link>

        </div>
     );
}
 
export default Profile;