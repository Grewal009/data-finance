import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return(
        <div className="w-full h-screen bg-white py-16 px-4 flex flex-col justify-center">
            <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
                <div className='flex flex-col justify-center px-2'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className='text-justify'>Progress is crucial for every organization. Centralized analytics opens the door for increased communication and knowledge sharing among all departments, as well as growth within the data team.</p>
                    <botton className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto sm:mx-0 py-3  text-[#00df9a] text-center'>Get Started</botton>
                </div>
                
            </div>
        </div>
    )
}

export default Analytics;