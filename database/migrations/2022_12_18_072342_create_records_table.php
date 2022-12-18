<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->string('imdb_id');
            $table->string('type')->nullable();
            $table->jsonb('genres')->nullable();

            $table->string('title')->fulltext();
            $table->string('description')->nullable()->fulltext();
            $table->date('released_at')->nullable();
            $table->string('runtime')->nullable();
            $table->text('country')->nullable();
            $table->text('language')->nullable();
            $table->string('poster')->nullable();

            $table->text('actors')->nullable()->fulltext();
            $table->text('director')->nullable()->fulltext();

            $table->string('rated')->nullable();

            $table->decimal('meta_score', 3, 1)->nullable();
            $table->decimal('imdb_rating', 3, 1)->nullable();
            $table->integer('imdb_votes')->nullable();

            $table->text('awards')->nullable();
            $table->string('box_office')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
};
