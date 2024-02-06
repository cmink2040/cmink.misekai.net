import {useEffect, useState} from 'react';

import {BackgroundImage, LazyRender, SelectDropdownBar} from '../Reuseable_Components/reuseComps.tsx'
import '../CSS/Fonts.css';
const aiDir = '/assets/aifavicon.png';
import {H1} from '../Reuseable_Components/DefaultCSSTemplates.tsx';
import WindowManager from "../Windows/Windows.tsx";

import FormatSquare from "../Formats/FormatSquare.tsx";
import FormatLink from "../Formats/FormatLink.tsx";
const Homepage = () => {
    const icons = [
        '/layer-group-solid.svg',
        '/receipt-solid.svg',
        '/comments-regular.svg',
        '/globe-solid.svg',
        'business-time-solid.svg',
        '/blog-solid.svg',
        '/face-smile-regular.svg',
        aiDir,
        '/record-vinyl-solid.svg',
    ];
    const command = [
        () => {setCurrentPage('RESUME'); setIsOpened(true)},
        () => {setCurrentPage('SITE_POLICIES'); setIsOpened(true)},
        () => {setCurrentPage('CONTACT');setIsOpened(true)},
        () => {setCurrentPage('SITE_INFO');setIsOpened(true)},
        () => {setCurrentPage('UPDATES');setIsOpened(true)},
        () => {setCurrentPage('BLOG');setIsOpened(true)},
        () => {setCurrentPage('FUN_STUFF');setIsOpened(true)},
        () => {setCurrentPage('ANIME');setIsOpened(true)},
        () => {setCurrentPage('MY_DREAM');setIsOpened(true)},
    ];
    const name = [
        "Resume",
        "Site Policies",
        "Contact",
        "Site Information",
        "Updates",
        "Blog",

        "Fun Stuff",
        "Anime",
        "My Dream",
    ];
    const supportedLanguages = [
        "EN",
        "日本語(JP)",
        "中文(ZH)",
    ];

    const [lang, setLang] = useState('EN');
    useEffect(() => {
        if (lang === 'EN') {
            document.title = "SZeng Website";
            document.documentElement.lang = "en";
        } else if (lang === '日本語(JP)') {
            document.title = "SZeng Website";
            document.documentElement.lang = "ja";
        } else if (lang === '中文(ZH)') {
            document.title = "SZeng Website";
            document.documentElement.lang = "zh";
        }
    }, [lang]);
    const setTemp = (option: any) => {
        console.log("Parent was called! ", option)
        setLang(option);
    }

    const [current_page, setCurrentPage] = useState('home');
    const [is_opened, setIsOpened] = useState(false);

    return (
        <div className='w-full text-center h-screen snap-mandatory snap-y '>


            <WindowManager window={current_page} on={is_opened} setShow={setIsOpened} />
            <div
                className='w-full grid grid-cols-2 slideT-in z-50 bg-transparent absolute px-16 py-8 font-bold SpecialFont'>
                <div className='text-white col-span-1 justify-start text-start'> Copyright &copy; 2023 SZeng</div>
                <div className='col-span-1 justify-end text-end'>
                    {
                        supportedLanguages.includes(lang) ?
                            <SelectDropdownBar className="text-white hover:cursor-pointer" defaultValue={lang}
                                               selectOpt={supportedLanguages} setParent={setTemp}/> :
                            <SelectDropdownBar className="text-white " defaultValue='EN'
                                               selectOpt={supportedLanguages} setParent={setTemp}/>
                    }
                </div>
            </div>

            <BackgroundImage src='/assets/pex.png'
                             className='w-full h-screen  text-center flex-col flex snap-center justify-center'
                             ImageClassName='absolute -z-50 top-0 left-0 object-cover'
                             alt='background'>
                <h1 className='flex-row text-7xl text-white '>Mathemate</h1>
            </BackgroundImage>


            <div className='w-full snap-center fadein'>
                <div className='flex flex-col align-content-center justify-items-center w-full'>
                    <div className='bg-black border border-gray-600 border-l-0 border-r-0 border-t-0 w-full p-16'>
                        <div className='text-2xl text-center text-white'>
                            Introduction
                        </div>
                        <br/>

                        <div className='text-start text-sm text-white fonts px-40'>
                            <H1 className={'fonts'}> Who am I? </H1>
                            Mathemate(Steve Zeng) is a programmer and a chemist. He is currently working on various of
                            projects, including NN Models, websites and applications, and more. 
                            <br/>

                            Mathemate dreams of creating a world where everything is connected and move the world forward fully
                            to the cloud by 2050 through a combination of software, hardware, and AI technologies. <br/>

                            <br/>

                            <br/>
                            <H1 className={'fonts'}> What do I do? </H1>
                            While not working, Mathemate enjoys playing video games, watching anime, and reading manga. He
                            also enjoys catching up on the latest tech news and learning new things. <br/>

                            <br/>
                        </div>
                    </div>


                    <div className='bg-black text-center w-full fadein pt-8'>
                        <div className='grid grid-cols-2'>
                            <LazyRender className='col-span-1 text-white' direction='slideR-in'>
                                szeng2525@gmail.com <br/>
                                +1(707)-774-9127 <br/>
                            </LazyRender>
                            <LazyRender className='col-span-1 text-white' direction='slideL-in'>
                                szeng5@uiowa.edu <br/>
                                +1(416)-123-1234<br/>
                            </LazyRender>
                        </div>

                        Social Media <br/>
                        <div className='flex flex-row align-center justify-center space-x-2 px-16 py-8'>
                            <FormatLink link='https://www.github.com/mathemate' text='Github'
                                        img='/assets/github-mark/github-mark-white.png'/> <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-auto px-4 text-center bg-black
        grid grid-cols-5 snap-center items-center'>
                <H1 className='grid text-white align-center text-center justify-items-center'> Projects </H1>
                <div className='col-span-4 grid grid-cols-1 align-content-center justify-items-center gap-2 '>
                    <div className='border border-gray-800 hover:bg-gray-800 transition duration-300 text-white text-center w-full mx-2 '>
                       <H1> Work </H1>
                        My full list of my projects can be found here:
                    </div>
                    
                </div>
            </div>

            <div className='w-auto bg-black text-center gap-2 place-content-center
        grid grid-cols-9 snap-center items-center'>
                <h1 className='grid col-span-9 text-3xl align-center text-center justify-items-center content-center'>MENU</h1>
                {
                    Array.from({length: 9}).map((_, i) => (
                        <FormatSquare key={i} name={name[i]} icon={icons[i]} command={command[i]}/>
                    ))
                }


            </div>
        </div>);
}

export default Homepage