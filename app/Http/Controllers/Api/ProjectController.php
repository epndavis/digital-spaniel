<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectCollection;

class ProjectController extends Controller
{
    /**
     * Select first 4 categories and return all projects with at least 1 of those categories
     * 
     * @return ProjectCollection
     */
    public function index()
    {
        $categories = Category::select('id', 'name')
            ->limit(4)
            ->get();

        $projects = Project::with('categories')
            ->whereHas('categories', function($query) use ($categories) {
                $query->whereIn('id', $categories
                    ->pluck('id')
                    ->toArray()
                );
            })
            ->get();
        
        return new ProjectCollection($projects, $categories->pluck('name')->toArray());
    }
}
