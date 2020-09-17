<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialResource;
use App\Repositories\TestimonialRepository;

class TestimonialController extends Controller
{
    /**
     * Return 3 random testimonials
     *
     * @return TestimonialResource
     */
    public function index()
    {       
        return TestimonialResource::collection(
            TestimonialRepository::getRandomList()
        );
    }
}
