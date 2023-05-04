import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]"> REACT.</h1>

                <div className='flex justify-between md:w-[60%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h6 className='font-bold text-gray-400 '>Solutions</h6>
                    <ul>
                        <li className='py-1 text-sm'>Analytics</li>
                        <li className='py-1 text-sm'>Marketing</li>
                        <li className='py-1 text-sm'>Commerce</li>
                        <li className='py-1 text-sm'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400 '>Support</h6>
                    <ul>
                        <li className='py-1 text-sm'>Pricing</li>
                        <li className='py-1 text-sm'>Documentation</li>
                        <li className='py-1 text-sm'>Guides</li>
                        <li className='py-1 text-sm'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400 '>Company</h6>
                    <ul>
                        <li className='py-1 text-sm'>About</li>
                        <li className='py-1 text-sm'>Blog</li>
                        <li className='py-1 text-sm'>Press</li>
                        <li className='py-1 text-sm'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400 '>Legal</h6>
                    <ul>
                        <li className='py-1 text-sm'>Claim</li>
                        <li className='py-1 text-sm'>Policy</li>
                        <li className='py-1 text-sm'>Terms</li>
                    </ul>
                </div>

            </div>


        </div>

        
    )
}

export default Footer;
