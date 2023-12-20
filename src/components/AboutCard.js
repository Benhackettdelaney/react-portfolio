const AboutCard = () => {
    return(
        <div className="card lg:card-side bg-base-100 shadow-xl">
 
  <div className="card-body ">
  <div>
        <h1 className="text-4xl font-bold mb-5">About me</h1>
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="justify-items-center  ">
        <div className="mt-12">
        <h1 className="text-2xl"><b>Introduction</b></h1>
        <p>Hi, my name is Ben Hackett Delaney. Welcome to my portfolio</p>
        </div>
        <div className="mt-12">
        <h1 className="text-2xl"><b>Education</b></h1>
        <p >I am a third year student at iadt college in Sallynoggin, Dún Laoghaire</p>
        </div>
        <div className="mt-12">
        <h1 className="text-2xl"><b>Credentials</b></h1>
        <p>Over the past three years i have been learning how to creat website and applications using many different libraries such as basic HTML to react projects. </p>
        </div>
        <div className="mt-12">
        <h1 className="text-2xl"><b>Projects</b></h1>
        <p>The projects seen on this website are projects i have done from when i was in first year to now in third year including integrated projects, countries API, ToDO application and many more</p>
        </div>
        <div className="mt-12">
        <h1 className="text-2xl"><b>Interests</b></h1>
        <p>Some of my interests are playing games and going to work. </p>
        </div>
        </div>
    </div>
  </div>
</div>

    )
}

export default AboutCard;