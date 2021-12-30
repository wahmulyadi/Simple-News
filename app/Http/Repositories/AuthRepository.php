<?php

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\User;
use phpDocumentor\Reflection\Types\Null_;

class AuthRepository
{
    public function insertRegister($request){
        $register = new User([
            'name' =>$request->name,
            'email' =>$request->email,
            'password' =>$request->password,
            'password' =>$request->password,
            'phone' =>$request->phone,
            'gender' =>$request->gender,
            'address' =>$request->address,
            'region' => $request->region,
            'province' => $request->province
        ]);
        return $register->save();
    }

    public function validateRegister($request){
        $validator  = Validator::make($request->all(),[

            'name' =>'required|min:3',
            'email' =>'required|email',
            'password' =>'required|min:8',
            'gender' =>'required|min:4',
            'address' =>'required|min:4',
            'region' => 'required',
            'province' => 'required'
        ]);
        return $validator;
    }



    public function getExpiredToken($tokenId)
    {
        if (empty($tokenId)) {
            return false;
        }

        $users = DB::table('oauth_access_tokens')
        ->where('id', $tokenId)
            ->first();

        $expires = $users->expires_at;

        if ($expires >= date('Y-m-d H:i:s')) {

            return true;
        }
        return false;
    }

    public function deletetoken($tokenId)
    {
        DB::table('users')
        ->where('api_token', '=', $tokenId)
        -> update(['api_token' => '']);
        return false;
    }

}
