import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function TabView() {
    let [categories] = useState(['Playlists', 'Podcasts', 'Artists', 'Albums'])

    return (
        <div className="w-96 max-w-md px-2 sm:px-0 mx-4">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl p-1">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                    'ring-transparent ring-opacity-60 ring-offset-0 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-gray-700 shadow'
                                        : 'text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}
