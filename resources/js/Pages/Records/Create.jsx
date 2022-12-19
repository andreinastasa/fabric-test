import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';

export default function Create(props) {

    const { data, setData, errors, post } = useForm({
        movies: [],
        title: "",
        imdb_id: "",
    });


    function handleSubmit(e) {
        e.preventDefault();
        post(route("records.store"));
    }

    function handleTitleChange(e) {
        setData("title", e.target.value);
        if ( !data.imdb_id ) {
            fetchMoviesBySearch(e.target.value);
        }
    }

    function fetchMovieByID(id) {
        // use axios to fetch the movie from the OMDB api
        axios.get('/ajax/fetch', {
            params: {
                imdb_id: id
            }
        }).then((response) => {
            setData({
                title: response.data.Title,
                imdb_id: response.data.imdbID,
                description: response.data.Plot,
                genres: response.data.Genre,
                released_at: response.data.Released,
                runtime: response.data.Runtime,
                director: response.data.Director,
                actors: response.data.Actors,
                meta_score: response.data.Metascore,
                imdb_rating: response.data.imdbRating,
                imdb_votes: response.data.imdbVotes,
                type: response.data.Type,
                poster: response.data.Poster,
            });
        }, (error) => {
            console.log(error);
        });
    }

    function fetchMoviesBySearch(search) {
        // use axios to fetch the movie from the OMDB api
        axios.get('/ajax/fetch', {
            params: {
                search: search
            }
        }).then((response) => {
            setData({
                movies: response.data.Search
            });
        }, (error) => {
            console.log(error);
        });
    }


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Records</h2>}
        >
            <Head title="Add Record" />

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Add Record</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Create a new movie record by searching for a movie title or by entering the IMDb ID.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            href={route('records.index')}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Back to Records
                        </Link>
                    </div>
                </div>

                <div className="mt-5">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-5">
                                        <label htmlFor="imdb_id" className="block text-sm font-medium text-gray-700">
                                            IMDb ID
                                        </label>
                                        <div className="flex items-center mt-1">
                                            <input
                                                type="text"
                                                name="imdb_id"
                                                value={data.imdb_id}
                                                onChange={(e) =>
                                                    setData("imdb_id", e.target.value)
                                                }
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => fetchMovieByID(data.imdb_id)}
                                                className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 whitespace-nowrap ml-2"
                                            >
                                                Fetch
                                            </button>
                                        </div>
                                        <span className="text-red-600">
                                            {errors.imdb_id}
                                        </span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 relative">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={data.title}
                                            onChange={handleTitleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        { data.movies && data.movies.length > 0 && (
                                            // show the list of movies
                                            <div className="absolute bg-white w-full rounded-b-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 shadow sm:text-sm">
                                                { data.movies.map((movie) => (
                                                    <div
                                                        key={movie.imdbID}
                                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                                        onClick={() => fetchMovieByID(movie.imdbID)}
                                                    >
                                                        {movie.Title} ({movie.Year})
                                                    </div>
                                                ))}
                                            </div>


                                        )}

                                        <div className="text-sm text-gray-600">
                                            If you don't have an IMDb ID, you can search for a movie title here.
                                        </div>
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="genres" className="block text-sm font-medium text-gray-700">Genres (comma separated)</label>
                                        <input
                                            type="text"
                                            name="genres"
                                            value={data.genres}
                                            onChange={(e) =>
                                                setData("genres", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.genre}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                        <select
                                            id="type"
                                            name="type"
                                            value={data.type}
                                            onChange={(e) =>
                                                setData("type", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="movie">Movie</option>
                                            <option value="series">Series</option>
                                        </select>
                                        <span className="text-red-600">
                                            {errors.type}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="released_at" className="block text-sm font-medium text-gray-700">Released Date</label>
                                        <input
                                            type="text"
                                            name="released_at"
                                            value={data.released_at}
                                            onChange={(e) =>
                                                setData("released_at", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.released_at}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="runtime" className="block text-sm font-medium text-gray-700">Runtime</label>
                                        <input
                                            type="text"
                                            name="runtime"
                                            value={data.runtime}
                                            onChange={(e) =>
                                                setData("runtime", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.runtime}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Plot</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={5}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value={data.description}
                                        />
                                        <span className="text-red-600">
                                            {errors.plot}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="actors" className="block text-sm font-medium text-gray-700">Actors</label>
                                        <input
                                            type="text"
                                            name="actors"
                                            value={data.actors}
                                            onChange={(e) =>
                                                setData("actors", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.actors}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="directors" className="block text-sm font-medium text-gray-700">Director</label>
                                        <input
                                            type="text"
                                            name="directors"
                                            value={data.director}
                                            onChange={(e) =>
                                                setData("director", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.director}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="imdb_rating" className="block text-sm font-medium text-gray-700">IMDb Rating</label>
                                        <input
                                            type="text"
                                            name="imdb_rating"
                                            value={data.imdb_rating}
                                            onChange={(e) =>
                                                setData("imdb_rating", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.imdb_rating}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="imdb_votes" className="block text-sm font-medium text-gray-700">IMDb Votes</label>
                                        <input
                                            type="text"
                                            name="imdb_votes"
                                            value={data.imdb_votes}
                                            onChange={(e) =>
                                                setData("imdb_votes", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.imdb_votes}
                                        </span>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="meta_score" className="block text-sm font-medium text-gray-700">Metascore</label>
                                        <input
                                            type="text"
                                            name="meta_score"
                                            value={data.meta_score}
                                            onChange={(e) =>
                                                setData("meta_score", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.meta_score}
                                        </span>
                                    </div>


                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="poster" className="block text-sm font-medium text-gray-700">Poster</label>
                                        <input
                                            type="text"
                                            name="poster"
                                            value={data.poster}
                                            onChange={(e) =>
                                                setData("poster", e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="text-red-600">
                                            {errors.poster}
                                        </span>

                                        {data.poster && (
                                            <div className="mt-2">
                                                <img src={data.poster} alt="Poster" className="w-32 shadow-xl rounded-md" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
