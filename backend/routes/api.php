<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthController::class,'register'])->name('user.register');
Route::post('/login',[AuthController::class,'login'])->name('user.login');
Route::post('/logout',[AuthController::class,'logout'])->name('user.logout')->middleware('auth:api');

