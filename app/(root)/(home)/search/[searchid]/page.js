"use client"


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import '../search.css';

async function getSearched(id) {
    try {
        const response = await axios.get(`https://bor-service.herokuapp.com/GetResults.json?word=${id}&slant=1`);
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Or handle the error in another way
    }
}

async function RegisterWord(word) {
    try {
        const response = await axios.get(`https://bor-service.herokuapp.com/AddWords?word=${word}&slant=1`);
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Or handle the error in another way
    }
}
async function FINDER(searchdata) {
    const DOC = searchdata.data.words.slantRhymes;

    const uniqueSlabusNos = [];
    DOC.forEach(item => {
        if (!uniqueSlabusNos.includes(item.wordSyllables)) {
            uniqueSlabusNos.push(item.wordSyllables);
        }
    });
    return uniqueSlabusNos;
}

function Page({ params }) {
    const [searchData, setSearchData] = useState(null);
    const [TitleData, setTitleData] = useState(null);
    const [DsFind, setDsFind] = useState(false);
    const [DsSubmited, setDsSubmited] = useState(false);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const searchdata = await getSearched(id);
                if (searchdata?.data == '') {
                    setSearchData(null);
                    setTitleData(null);
                    setDsFind(true);
                    setDsSubmited(false);
                } else {
                    const DS = await FINDER(searchdata);
                    setSearchData(searchdata?.data?.words);
                    setTitleData(DS);
                    setDsFind(false);
                    setDsSubmited(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (params.searchid) {
            fetchData(params.searchid);
        }
    }, [params.searchid]);


    const RegistWORD = async () => {
        let word = params?.searchid;
        const wordReg = await RegisterWord(word);
        if (wordReg.status === 200) {
            setDsSubmited(true)
        }
    }

    return (
        <React.Fragment>
            <Navbar Searchid={params.searchid} />
            <div className='SearchPage'>
                <div className='SearchPage-wrapper'>
                    <div className='SearchPage-wrapper-word'>
                        {params.searchid}
                    </div>
                    {DsFind === true && (
                        <React.Fragment>
                            {DsSubmited === true && (
                                <div className='submited_word_sucess'>
                                    Thanks ! Your request for adding this word has been submitted
                                </div>
                            )}
                            <div className='FindData_notDisplay'>
                                <div className='FindData_notDisplay-text'>No words found. Refine your search and try again.</div>
                                <div className='FindData_notDisplay-btndiv'>
                                    <Button className='FindData_notDisplay-btn' onClick={RegistWORD}>Add Word</Button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}


                    {(searchData !== null && TitleData !== null) && (
                        <>
                            <div className='SearchPage-wrapper-count'><span className='SearchPage-wrapper-count-num'>{searchData.slantRhymes.length}</span> <span className='SearchPage-wrapper-count-text'>Total </span><span className='SearchPage-wrapper-count-param'>{params.searchid} </span><span className='SearchPage-wrapper-count-text'>Found</span></div>
                            <div className="row bor-result-content">
                                <div className="row animate__animated animate__fadeInUp search-cards">
                                    {/* <div > */}
                                    {TitleData.map(No => (
                                        <div className="lg:w-1/3 md:w-1/2 sm:w-full bor-syllable-content" key={No} >
                                            <p className='serchcard-title'>{No} SYLLABLE</p>
                                            <p className='serchcard-title-p'>
                                                {searchData.slantRhymes.filter(item => item.wordSyllables === No).map((item, index) => (
                                                    <span className='serchcard-title-span' key={index}>
                                                        {item.word},&nbsp;
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                    {/* </div> */}
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </React.Fragment>
    );
}

export default Page;
