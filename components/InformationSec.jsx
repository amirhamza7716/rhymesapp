import React from 'react'
import './information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faLightbulb, faHeadphones } from '@fortawesome/free-solid-svg-icons';
function InformationSec() {
    const dataOfCard = [
        {
            tag: faBalanceScale,
            title: "RHYMES WITH ORANGE",
            dis: "Near rhyme (or slant rhyme) is a more inclusive form of rhyme that extends a writer’s use of rhyme beyond words with identical ending sounds (ex. lady, shady) to words with similar ending sounds (ex. lady, baby, crazy). This enables writers to find words that rhyme with orange; these words include Florence, foreign and Warren.",
            cls: "app_infor-card-first"
        },
        {
            tag: faLightbulb,
            title: "CREATIVE INSPIRATION",
            dis: "Let your chorus ring louder, your intro hit harder, or your poem flow smoother. Book of Rhymes expands your margins of creativity and keeps your ideas flowing",
            cls: "app_infor-card-2nd"
        },
        {
            tag: faHeadphones,
            title: "SLANG & POP-CULTURE PHRASES",
            dis: "We live in the now… and so should your rhymes. No where else can you find such an in-depth list of modern terminology with the extensive reach into today’s culture and slang as you can with Book of Rhymes. If you seek rhymes for foodie, Google, or Beyoncé, then you should look no further.",
            cls: "app_infor-card-3rd"
        }
    ]
    return (
        <div className='app_infor'>
            {
                dataOfCard.map((item, ind) => {
                    return (
                        <div className={`app_infor-card ${item.cls}`} key={ind}>
                            <div className='app_infor-card-wrapper'>
                                <div className='app_infor-card-tag'>
                                    <FontAwesomeIcon className='app_infor-card-tag-icon' icon={item.tag} />
                                </div>
                                <div className='app_infor-card-title'>
                                    {item.title}
                                </div>
                                <div className='app_infor-card-disc'>
                                    {item.dis}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InformationSec;