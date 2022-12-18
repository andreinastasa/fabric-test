<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CommandMoviesGetApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_console_command_movies_get_from_omdb_api()
    {
        $this->artisan('movies:get')
            ->expectsOutput('Movies are being saved in the background.')
            ->assertExitCode(0);
    }
}
