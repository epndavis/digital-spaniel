<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProjectsApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_projects_api_json_response()
    {
        $response = $this->get('/api/projects');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [ 
                        'title', 
                        'description',
                        'slug',
                        'categories',
                    ],
                ],
                'categories'
            ]);
    }
}
