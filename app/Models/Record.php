<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Record extends Model
{
    use HasFactory;

    protected $fillable = [
        'imdb_id',
        'type',
        'genres',

        'title',
        'description',
        'released_at',
        'runtime',
        'country',
        'language',
        'poster',

        'actors',
        'director',

        'rated',

        'meta_score',
        'imdb_rating',
        'imdb_votes',

        'awards',
        'box_office',
    ];

    protected $casts = [
        'genres' => 'array',
    ];

    // create attribute for released_at_year
    public function getReleasedAtYearAttribute()
    {
        return Carbon::parse($this->released_at)->format('Y');
    }

    public function setReleasedAtAttribute($value)
    {
        $this->attributes['released_at'] = Carbon::parse($value)->format('Y-m-d');
    }

    public function setGenresAttribute($value)
    {
        $this->attributes['genres'] = json_encode(explode(', ', $value));
    }

    public function setImdbVotesAttribute($value)
    {
        $this->attributes['imdb_votes'] = $value === 'N/A' ? null : $this->getNumber($value);
    }

    public function setImdbRatingAttribute($value)
    {
        $this->attributes['imdb_rating'] = $value === 'N/A' ? null : $value;
    }

    public function setMetaScoreAttribute($value)
    {
        $this->attributes['meta_score'] = $value === 'N/A' ? null : $value;
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
            $query->where(fn ($query) =>
                $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
            )
        );

        $query->when($filters['trashed'] ?? false, fn ($query, $trashed) =>
            $trashed ? $query->onlyTrashed() : $query->whereNull('deleted_at')
        );
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
