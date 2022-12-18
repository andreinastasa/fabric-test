import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({ links, from, to, total }) {

    function getClassName(active) {
        if(active) {
            return "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20";
        } else{
            return "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20";
        }
    }

    return (
        links.length >= 3 && (

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <Link href={links[0].url} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Previous
                    </Link>
                    <Link href={links[links.length - 1].url} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Next
                    </Link>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span> of{' '}
                            <span className="font-medium">{total}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

                           {links.map((link, key) => {
                               if (key === 0)
                                   return (
                                       <Link key={key} href={link.url} className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                           <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                       </Link>
                                   )
                               else if (key === links.length - 1)
                                   return (
                                       <Link key={key} href={link.url} className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                           <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                       </Link>
                                   )
                               else
                                   return (
                                       <Link key={key} href={link.url} className={getClassName(link.active)}>
                                           {link.label}
                                       </Link>
                                   )
                           })}

                        </nav>
                    </div>
                </div>
            </div>
        )
    );
}
