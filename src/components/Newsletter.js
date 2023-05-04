

const Newsletter = () => {
    return(
        <div className="w-full py-20 text-white px-6">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2 pr-5">Want tips & tricks to optimize your work flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" required/>
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 ml-3 py-3 text-black text-center ">Notify Me</button>
                    </div>

                    <p className="">We care about the protection policy of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span>.</p>
                </div>

            </div>
            
        </div>
    )
}

export default Newsletter;