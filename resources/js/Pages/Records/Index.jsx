import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Pagination from "@/Components/Pagination";
import { TvIcon, FilmIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XMarkIcon} from '@heroicons/react/20/solid'
import Alert from "@/Components/Alert";

export default function Index(props) {
    const records = usePage().props.records;
    const flash = usePage().props.flash;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Records</h2>}
        >
            <Head title="Dashboard" />

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Records</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the records in your account including their title, release year, and genre.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            href={route('records.create')}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Record
                        </Link>
                    </div>
                </div>

                <Alert feedback={flash.feedback} />

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Title
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                            Type
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                            Year
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                            Runtime
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                            IMDb Rating
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {records.data.map((record) => (
                                        <tr key={record.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0 rounded-md overflow-hidden">
                                                        <img className="w-10 object-center" src={record.poster} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-bold text-gray-900">{record.title}</div>
                                                        <div className="text-gray-500">{ record.genres_format }</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                                                {record.type === 'movie' ? <FilmIcon className="h-8 w-8 text-indigo-700 mx-auto" /> : <TvIcon className="h-8 w-8 text-indigo-700 mx-auto" />}
                                            </td>
                                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{record.released_at_year}</div>
                                            </td>
                                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{record.runtime}</div>
                                            </td>
                                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-600 font-bold">{record.imdb_rating ? record.imdb_rating : 'N/A'}</div>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-4">
                                                <Link
                                                    href={route('records.edit', record.id)}
                                                    className="inline-flex items-center rounded border border-transparent bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                                >
                                                    Edit
                                                </Link>

                                                <Link
                                                    href={route('records.destroy', record.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="inline-flex items-center rounded border border-transparent bg-red-100 px-2.5 py-1.5 text-xs font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <Pagination class="mt-6" total={records.meta.total} from={records.meta.from} to={records.meta.to} links={records.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
