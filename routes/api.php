<?php

use App\Http\Controllers\Api\GitHubController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('projects')->name('projects.')->group(function() {
    Route::get('/', [ProjectController::class, 'index'])->name('index');
});

Route::prefix('testimonials')->name('testimonials.')->group(function() {
    Route::get('/', [TestimonialController::class, 'index'])->name('index');
});

Route::prefix('github')->name('github.')->group(function() {
    Route::get('/{repo}', [GitHubController::class, 'index'])->name('index');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
