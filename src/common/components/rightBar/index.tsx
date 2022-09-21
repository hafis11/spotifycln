import React from 'react';


const RightBar: React.FC = () => {
    return (
        <div className='w-full h-full py-4 px-5'>
            <div className='flex w-full flex-row items-center justify-between'>
                <h4 className='text-white font-medium'>Friend Activity</h4>

                <span className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </span>
            </div>


            <div className='py-4 mt-8'>
                <h4 className='text-white text-sm'>Lets friends and followers on Spotify see what you're listening to.</h4>
            </div>

            {
                [1, 2, 3].map((item: number, index: number) => (
                    <div key={index} className='grid grid-cols-3 w-full my-2'>
                        <div className='bg-gray-500 w-12 h-12 rounded-full flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <div className='col-span-2 w-full'>
                            <div role="status" className='max-w-sm animate-pulse'>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[90px]"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90px] mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                ))
            }


            <div className='py-4'>
                <h4 className='text-white text-sm'>Go to Settings {'>'} Social and enable 'Share my listening activity on Spotif.' You can turn this off at any time.</h4>
            </div>

            <div className='w-full flex justify-center py-4'>
                <div className='bg-white rounded-full text-center py-4 w-[80%] cursor-pointer scale-95 hover:scale-100'>
                    <h4 className='font-medium'>SETTINGS</h4>
                </div>
            </div>

        </div>
    )
}

export default RightBar