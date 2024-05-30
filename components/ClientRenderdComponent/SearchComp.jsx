"use client"
import React,{useState} from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function SearchComp() {
    const [Value,setValue] = useState("");
  const router = useRouter();
  
 

  const  FINDDATA = ()=>{
    if(Value.length === 0){
     console.log("please enter some thing")
    }else{
      router.push(`/search/${Value}`);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        FINDDATA();
    }
};

    return (
        <React.Fragment>
            <input className='header-search-input' placeholder='What Rhymes Width...' Value={Value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
            <Button className="header-search-button" onClick={FINDDATA}>Search</Button>
        </React.Fragment>
    )
}

export default SearchComp;