"use client"
import React ,{useState,useEffect} from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function NavSearch({Searchid}) {
    const [Value,setValue] = useState("")
    const router = useRouter();
    const Path = usePathname();
    console.log(Path)
    console.log(Searchid);
    useEffect(()=>{
        if(Searchid){
            setValue(Searchid)
        }
    },[Searchid])

    const  FINDDATA = async ()=>{
        try {
            router.push(`/search/${Value}`);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            FINDDATA();
        }
    };
    
    return (
        <React.Fragment>
            <input className='nav-p2-search-input' placeholder='What Rhymes Width...' Value={Value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <Button className="nav-p2-search-button" onClick={FINDDATA}>Search</Button>
        </React.Fragment>
    )
}

export default NavSearch