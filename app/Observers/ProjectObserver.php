<?php

namespace App\Observers;

use App\Models\Project;
use Illuminate\Support\Str;

class ProjectObserver
{
    /**
     * Handle the project "saving" event.
     *
     * @param  Project $project
     * @return void
     */
    public function saving(Project $project)
    {
        if (empty($project->slug)) {
            $project->slug = Str::slug($project->title);
        }
    }
}
