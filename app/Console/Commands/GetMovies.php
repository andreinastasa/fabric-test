<?php

namespace App\Console\Commands;

use App\Jobs\SaveMovieFromApiJob;
use Illuminate\Console\Command;

class GetMovies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'movies:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->line('Getting movies from API using jobs.');

        $ids = $this->getListOfImdbIds();

        foreach ($ids as $id) {
            SaveMovieFromApiJob::dispatch($id)->onQueue('movies');
        }

        $this->info('Movies are being saved in the background.');
        return Command::SUCCESS;
    }

    private function getListOfImdbIds() {
        return [
            'tt0120737', 'tt0167261', 'tt0167260', 'tt0816692', 'tt0372784', 'tt0468569', 'tt1345836', 'tt15398776', 'tt0133093', 'tt0407887', 'tt0078748', 'tt0338013', 'tt2194499',
            'tt1950186', 'tt0375679', 'tt2543164', 'tt1856101', 'tt3682448', 'tt1371111', 'tt0264464', 'tt11286314', 'tt4729430', 'tt1160419', 'tt0482571', 'tt0352248', 'tt0118799',
            'tt1596363', 'tt1798684', 'tt0246578', 'tt0964517', 'tt0139654', 'tt3659388', 'tt1677720', 'tt0268978', 'tt2119532', 'tt0470752', 'tt0765429', 'tt1631867', 'tt2096673',
            'tt3032476', 'tt9561862', 'tt2442560', 'tt11126994', 'tt7366338', 'tt5753856', 'tt4574334', 'tt0903747',
        ];
    }
}
