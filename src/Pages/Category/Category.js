import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const Data=[{
        "id":"01",
        "name":"Math",
        "img":"https://cdn-icons-png.flaticon.com/512/1839/1839551.png",
        "quiz":"15"
    },
    {
        "id":"02",
        "name":"Sports",
        "img":"https://www.clipartmax.com/png/middle/2-27305_purple-and-white-soccer-ball.png",
        "quiz":"15"
    },
    {
        "id":"01",
        "name":"Music",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtC70E0En1MmqhLf3kYmzDBEvKTjnd_pnBsA&usqp=CAU",
        "quiz":"15"
    },
    {
        "id":"01",
        "name":"Science",
        "img":"https://w7.pngwing.com/pngs/960/245/png-transparent-science-practitioner-research-computer-icons-organization-science-purple-company-innovation.png",
        "quiz":"15"
    },
    {
        "id":"01",
        "name":"Arts",
        "img":"https://e7.pngegg.com/pngimages/163/518/png-clipart-computer-icons-drawing-paint-brushes-scalable-graphics-portrait-color-picker-icon-purple-violet-thumbnail.png",
        "quiz":"15"
    },
    {
        "id":"01",
        "name":"Travel",
        "img":"https://w7.pngwing.com/pngs/580/13/png-transparent-package-tour-parva-tejarat-shargh-co-travel-tourism-tour-operator-travel-purple-violet-logo.png",
        "quiz":"15"
    }
    
    ]
    return (
        <div className='rounded-2xl ml-12 mr-12 text-black bg-white'>
            <p className='text-4xl text-center pt-3'>Categories</p>
            <div className='grid grid-cols-3 pt-3 justify-items-center gap-3 pb-3'>
            {
                Data.map(data=> 
                <Link className='h-44 w-52 shadow-xl rounded-xl flex flex-col place-content-center ml-4 items-center gap-3 bg-purple-100 hover:bg-red-200'to={`questions/${data.name}`}>
                    <img className='h-12 w-12' src={data.img} alt=''></img>
                    <p className='font-bold text-lg'>{data.name}</p>
                    <p>{data.quiz}</p>
                </Link>
                

           )
            }
            </div>
           
            
        </div>
    );
};

export default Category;