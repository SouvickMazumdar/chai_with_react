import React from 'react'
// btnText="visit me"//means if by any chance we don't get btntext the "visit me" will be used as default values
export default function Cards({image}) {
//   console.log(props.userName); //when props is passed as parameter else in case of destructuring which is used here
// console.log(userName);    //here without using props we have directly destructured it and directly using it without props; above syntax is of destructuring props
return (
    <div>
        <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src={image}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover shadow-xl shadow-gray-800"
  />
  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{userName}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      {btnText} →
      
    </button>
  </div> */}
</div>
    </div>
  )
}