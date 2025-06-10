<?php

use App\Http\Controllers\UserLoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/UserLogIn', [UserLoginController::class,'userLogIn']);
