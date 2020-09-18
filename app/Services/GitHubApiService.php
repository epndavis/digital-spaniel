<?php

namespace App\Services;

use Exception;
use App\Http\Resources\GitHubResource;

class GitHubApiService extends ApiService
{
    public function __construct()
    {
        $this->endpoint = config('api.github.endpoint');

        parent::__construct();
    }

    /**
     * @param string $repo
     * 
     * @return 
     */
    public function getRepo(string $repo, string $owner)
    {       
        try {
            $response = $this->client->get('/repos//' . $owner . '/' . $repo);
        } catch (Exception $e) {
            report($e);

            return response()->json([
                'error' => $e->getMessage(),
            ], 404);
        }

        $contents = $response->getBody()->getContents();

        return GitHubResource::make(
            json_decode($contents)
        );
    }
}
