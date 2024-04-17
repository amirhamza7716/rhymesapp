import React from 'react'
import Image from 'next/image';
import NavbarLogo from '../../public/images/Asset-2-p-1080.png'
import { useRouter } from 'next/navigation';
function NavbarImg() {
    const router = useRouter();
    const MoveHomePage = ()=>{
        router.push("/");
    }
    return (
        <Image
            className='app__nav-p1-img'
            src={NavbarLogo}
            alt="amazon"
            width={158}
            height={75}
            onClick={MoveHomePage}
        />
    )
}

export default NavbarImg