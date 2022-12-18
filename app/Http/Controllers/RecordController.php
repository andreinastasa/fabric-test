<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecordUpdateRequest;
use App\Http\Requests\StoreRecordRequest;
use App\Http\Resources\RecordResource;
use App\Models\Record;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class RecordController extends Controller
{
    public function index(Request $request) {
        $records = RecordResource::collection(
            Record::filter($request->only('search', 'trashed'))
                ->orderBy('released_at', 'desc')
                ->paginate(config('settings.general.per_page'))
        );

        return Inertia::render('Records/Index', [
            'filters' => $request->all('search', 'trashed'),
            'records' => $records,
        ]);
    }

    public function create(Request $request) {
        return Inertia::render('Records/Create', [
            'record' => new Record(),
        ]);
    }

    public function store(StoreRecordRequest $request) {
        Record::create($request->all());

        return redirect()->route('records.index')->with('feedback', [
            'type' => 'success',
            'message' => 'Record created successfully.',
        ]);
    }

    public function edit(Request $request, Record $record) {
        return Inertia::render('Records/Edit', [
            'record' => new RecordResource($record),
        ]);
    }

    public function update(RecordUpdateRequest $request, Record $record) {

        $record->update($request->all());

        return redirect()->route('records.index')->with('feedback', [
            'type' => 'success',
            'message' => 'Record updated.',
        ]);
    }

    public function destroy(Request $request, Record $record) {
        $record->delete();

        return redirect()->route('records.index')->with('feedback', [
            'type' => 'success',
            'message' => 'Record deleted.',
        ]);
    }

    public function fetch(Request $request) {
        if ( $request->has('imdb_id') ) {
            $response = Http::get(config('services.omdb.api_url_with_key') . '&i=' . $request->get('imdb_id'));
            $movie = $response->json();
            return response($movie);
        }

        if ( $request->has('search') ) {
            $response = Http::get(config('services.omdb.api_url_with_key') . '&s=' . $request->get('search'));
            $movies = $response->json();
            return response($movies);
        }
    }
}
