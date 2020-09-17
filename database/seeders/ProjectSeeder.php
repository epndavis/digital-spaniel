<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $projects = Project::factory()
            ->times(50)
            ->create();

        $projects->each(function($project) {
            $project->categories()->sync(
                Category::inRandomOrder()
                    ->limit(rand(1,3))
                    ->get()
            );
        });
    }
}
