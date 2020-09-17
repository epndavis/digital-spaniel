<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestimonialsApiTest extends TestCase
{
    /**
     * @return void
     */
    public function test_testimonials_api_json_response()
    {
        $response = $this->get('/api/testimonials');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [ 
                        'name', 
                        'description',
                        'quote',
                    ],
                ]
            ]);
    }
}
