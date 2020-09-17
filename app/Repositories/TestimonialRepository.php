<?php

namespace App\Repositories;

use App\Models\Testimonial;

class TestimonialRepository
{
    /**
     * @param $limit
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function getRandomList($limit = 3)
    {
        return Testimonial::inRandomOrder()
            ->limit($limit)
            ->get();
    }
}
