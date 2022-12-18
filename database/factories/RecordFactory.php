<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Record>
 */
class RecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'imdb_id' => $this->faker->unique()->regexify('[a-z]{2}[0-9]{7}'),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'poster' => $this->faker->imageUrl,
            'released_at' => $this->faker->year,
            'type' => $this->faker->randomElement(['movie', 'series']),
        ];
    }
}
