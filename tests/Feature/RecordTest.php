<?php

namespace Tests\Feature;

use App\Models\Record;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RecordTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_records_index_page_is_displayed()
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get('/records');

        $response->assertOk();
    }

    public function test_records_create_page_is_displayed()
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get('/records/create');

        $response->assertOk();
    }

    public function test_records_edit_page_is_displayed()
    {
        $user = User::factory()->create();
        $record = Record::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get('/records/'.$record->id.'/edit');

        $response->assertOk();
    }

    public function test_records_can_be_created()
    {
        $user = User::factory()->create();
        $record = Record::factory()->make();

        $response = $this
            ->actingAs($user)
            ->post('/records', $record->toArray());

        $response->assertRedirect('/records');
        $this->assertDatabaseHas('records', $record->toArray());
    }

    public function test_records_can_be_updated()
    {
        $user = User::factory()->create();
        $record = Record::factory()->create();
        $record->title = 'New title';

        $response = $this
            ->actingAs($user)
            ->put('/records/'.$record->id, $record->toArray());

        $response->assertRedirect('/records');
        $this->assertDatabaseHas('records', $record->toArray());
    }

    public function test_records_can_be_deleted()
    {
        $user = User::factory()->create();
        $record = Record::factory()->create();

        $response = $this
            ->actingAs($user)
            ->delete('/records/'.$record->id);

        $response->assertRedirect('/records');
        $this->assertDatabaseMissing('records', $record->toArray());
    }
}
