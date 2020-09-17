<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProjectCollection extends ResourceCollection
{
    /**
     * @var mixed
     */
    private $categories;

    /**
     * Create a new resource collection instance.
     *
     * @param mixed  $collection
     * @param mixed $categories
     * @return void
     */
    public function __construct($collection, $categories)
    {
        parent::__construct($collection);

        $this->categories = $categories;
    }

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'categories' => $this->categories,
        ];
    }
}
