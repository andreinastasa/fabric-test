<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class RecordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'released_at' => $this->released_at,
            'released_at_nice_format' => Carbon::parse($this->released_at)->format('d M Y'),
            'released_at_year' => $this->released_at_year,
            'runtime' => $this->runtime,
            'country' => $this->country,
            'language' => $this->language,
            'poster' => $this->poster,
            'actors' => $this->actors,
            'director' => $this->director,
            'rated' => $this->rated,
            'meta_score' => $this->meta_score ?? 'N/A',
            'imdb_rating' => $this->imdb_rating ?? 'N/A',
            'imdb_votes' => $this->imdb_votes ?? 'N/A',
            'awards' => $this->awards,
            'box_office' => $this->box_office,
            'genres' => $this->genres,
            'genres_format' => $this->genres ? implode(', ', $this->genres) : null,
            'type' => $this->type,
            'imdb_id' => $this->imdb_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
