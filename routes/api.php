<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        $user =  $request->user();
        return $user;
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});


Route::group([
    'middleware' => ['auth:api'],
], function () { // custom admin routes
    Route::get('attendances',"Admin\AdminController@attendances");
    Route::get('status',"Admin\StatusController@status");
    Route::post('taskupdata',"Admin\TaskController@taskupdata");
    Route::post('posupdata',"Admin\TaskController@posupdata");
    Route::get('attendances/update/{id}',"Admin\AdminController@attendancesUpdate");
    Route::post('checkin',"Admin\AdminController@checkIn");

    Route::resource('clients', 'Admin\ClientController')->except([
        'show', 'edit'
    ]);
    Route::get('clients/all', 'Admin\ClientController@all');

    Route::get('users', 'Settings\ProfileController@users');
}); // this should be the absolute last line of this file
