<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WebController;
use App\Http\Controllers\PostingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebController::class, 'index'])->name('index');
Route::get('/about', [WebController::class, 'about']);

Auth::routes();

//biodata user
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('user/profile', [PostingController::class, 'profile'])->name('profile');
Route::get('profile/edit/{id}', [PostingController::class, 'editprofile']);
Route::post('profile/update/{id}', [PostingController::class, 'updateprofile']);

//postingan
Route::get('user/posting', [PostingController::class, 'posting'])->name('posting');
Route::get('user/indexuser', [PostingController::class, 'index'])->name('indexuser');
Route::post('user/insert', [PostingController::class, 'insert']);
Route::get('user/edit/{id_posting}', [PostingController::class, 'edit']);
Route::post('user/update/{id_posting}', [PostingController::class, 'update']);
Route::get('user/delete/{id_posting}', [PostingController::class, 'delete']);
