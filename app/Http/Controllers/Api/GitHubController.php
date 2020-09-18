<?php

namespace App\Http\Controllers\Api;

use App\Services\GitHubApiService;
use App\Http\Controllers\Controller;
use App\Http\Resources\GitHubResource;

class GitHubController extends Controller
{
    /**
     * @param string $repo
     * @param GitHubApiService $service
     * 
     * @return GitHubResource
     */
    public function index($repo, GitHubApiService $service)
    {
        return $service->getRepo($repo, 'epndavis');
    }
}
