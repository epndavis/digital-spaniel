<?php

namespace App\Services;

use GuzzleHttp\Client;

class ApiService
{
    /**
     * @var string
     */
    protected string $endpoint = '';

    /**
     * @var Client
     */
    protected Client $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => $this->endpoint,
            'headers'  => ['Accept' => 'application/json'],
        ]);
    }
}
