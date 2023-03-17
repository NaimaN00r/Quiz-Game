import React from 'react';
import p1 from '../Assets/avatars_gif_lighblue.gif'
import p2 from '../Assets/giphy2.gif'

const Featured = () => {
    return (
        <div className='bg-purple-100 rounded-2xl text-center mt-8 mx-96  text-black'>
            <div className="avatar flex">
  <div className="rounded-full">
  <img style={{height:80,width:80}} src={p1} alt=''></img>
  </div>
  </div>
            
            <p className='text-2xl text-black'>Featured</p>
            <p>Take part in challenges with friends <br></br> or other players</p>
            <btn className='btn btn-accent'>Find Friends</btn>
            <div className="avatar flex justify-end">
  <div className="rounded-full">
  <img style={{height:80,width:80}} src={p2} alt=''></img>
  </div>
  </div>
        </div>
    );
};

export default Featured;