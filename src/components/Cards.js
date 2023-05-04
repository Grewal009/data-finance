import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';


const Cards = () => {
    return(
        <div className="w-full py-5 px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto' src={Single} alt=''/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-10 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-10'>1 User only</p>
                        <p className='py-2 border-b mx-10'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  text-black'>Start Trial</button>
                </div>

                <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto' src={Double} alt=''/>
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-10 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-10'>1 User only</p>
                        <p className='py-2 border-b mx-10'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3  text-[#00df9a]'>Start Trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto' src={Triple} alt=''/>
                    <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                    <p className='text-center text-4xl font-bold'>$299</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-10 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-10'>1 User only</p>
                        <p className='py-2 border-b mx-10'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  text-black'>Start Trial</button>
                </div>

            </div>
            
        </div>
    )
}

export default Cards;