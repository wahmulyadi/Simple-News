<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\posting\PostingController;
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


Route::group(['prefix' => 'v1'], function () {

    // AUTH
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/register','API\user\RegisterController@register');
        Route::post('/register/finish','API\user\UserController@completeProfile')->middleware('auth:api');
        Route::post ('/login', 'API\user\AuthController@login');
        Route::post('/logout', 'API\user\AuthController@logout')->middleware('auth:api');
       
    });

    Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
        Route::get('profile', 'Api\user\UserController@getProfile');
        Route::post('profile/edit', 'Api\user\UserController@editProfile');
        Route::post('profile/edit/password', 'Api\user\UserController@editPassword');
    });
    Route::group(['prefix' => 'post', 'middleware' => 'auth:api'], function () {
        // Route::get('/list',[PostingController::class,'getListPosting']);
        // Route::get('/detail/{id}', [PostingController::class,'getDetailPosting']);
        Route::post('/list','API\posting\ApipostingController@getListPosting');
        Route::get('/detail/{id_posting}', 'API\posting\ApipostingController@getDetailPosting');
    });
    
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
});
