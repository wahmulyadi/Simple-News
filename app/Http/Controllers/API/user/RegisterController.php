<?php

namespace App\Http\Controllers\api\user;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Http\Repositories\AuthRepository;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\Auth;

class RegisterController extends ApiController
{
    //
    protected $authRepository;
    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' =>'required|min:3',
            'email' =>'required|string|email|unique:users',
            'password' =>'required|min:8',
          
        ]); 

        if ($validator->fails()) {
            $validate = ($validator->errors());
            return $this->sendError(1, 1, $validate);
        }
       
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

       
        Auth::attempt([
            'email' => $request->email,
            'password'  => $request->password
        ]);

        $success['token'] = Auth::user()->createToken(Auth::guard()->user()->email)->accessToken;
        $success['id']  = Auth::user()->id;
        $success['name']  = Auth::user()->name;
        $success['email']  = Auth::user()->email;
        return $this->sendResponse(0, "Berhasil Registrasi",$success);
    }

    public function reverify(Request $request)
    {
        $user = User::find($request->idx);
        $user->email = $request->email;
        $user->timer_verify = date('Y-m-d H:i:s', strtotime('+10 minutes'));
        $user->save();

        try {
            $user->sendApiEmailVerificationNotification();
            return $this->sendResponse(0, "Berhasil Kirim Email", []);
        } catch (\Exception $e) {
            dd($e);
            return $this->sendError(2, "Gagal Registrasi", (object) array());
        }
    }
}
