<?php

namespace App\Jobs;

use App\Models\Record;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SaveMovieFromApiJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public string $id;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        $this->id = $id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $response = Http::get(config('services.omdb.api_url_with_key') . '&i=' . $this->id);

        $movie = $response->json();

        if ($movie['Response'] === 'True') {
            Record::firstOrCreate([
                'imdb_id' => $movie['imdbID'],
            ], [
                'type' => $movie['Type'],
                'genres' => $movie['Genre'],

                'title' => $movie['Title'],
                'description' => $movie['Plot'],
                'released_at' => Carbon::parse($movie['Released'])->toDateString(),
                'runtime' => $movie['Runtime'],
                'country' => $movie['Country'],
                'language' => $movie['Language'],
                'poster' => $movie['Poster'],

                'actors' => $movie['Actors'],
                'director' => $movie['Director'],

                'rated' => $movie['Rated'],

                'meta_score' => $movie['Metascore'] === 'N/A' ? null : $movie['Metascore'],
                'imdb_rating' => $movie['imdbRating'] === 'N/A' ? null : $movie['imdbRating'],
                'imdb_votes' => $movie['imdbVotes'],

                'awards' => $movie['Awards'],
                'box_office' => isset($movie['BoxOffice'] ) ? $this->getNumber($movie['BoxOffice']) : null,
            ]);
        }

        Log::info('Movie saved from API: ' . $this->id.' - '.$movie['Title']);
    }

    private function getNumber($string)
    {
        $cleanString = preg_replace('/([^0-9\.,])/i', '', $string);
        $onlyNumbersString = preg_replace('/([^0-9])/i', '', $string);

        $separatorsCountToBeErased = strlen($cleanString) - strlen($onlyNumbersString) - 1;

        $stringWithCommaOrDot = preg_replace('/([,\.])/', '', $cleanString, $separatorsCountToBeErased);
        $removedThousandSeparator = preg_replace('/(\.|,)(?=[0-9]{3,}$)/', '',  $stringWithCommaOrDot);

        return (float) str_replace(',', '.', $removedThousandSeparator);
    }
}
