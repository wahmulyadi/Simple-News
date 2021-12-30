<?php

namespace App\Http\Controllers\Api\user;

use App\Http\Controllers\ApiController;
use App\Http\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends ApiController
{
    protected $userRepo;
    public function __construct(UserRepository $userRepo) {
        $this->userRepo = $userRepo;
    }

   
    public function getProfile()
    {
        $id = Auth::user()->id;
        $data = $this->userRepo->getDetail($id);
        if (!empty($data)) {
            return $this->sendResponse(0, 'success', $data);
        } elseif ($data === false) {
            return $this->sendError(1, 4);
        } else {
            return $this->sendError(1, 4);
        }
    }

    public function editProfile(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'name'  => 'required',
            'email' => 'required|email'
        ]);
        if($validation->fails()){
            return $this->sendError(1, 'error', $validation->errors());
        }

        $id = Auth::user()->id;

        $params = [
            'name' => $request->name,
            'email' => $request->email,
            'alamat' => $request->alamat,
            'hobby' => $request->hobby,
            'id'    => $request->id,
            'foto'   => $request->foto
        ];
        if(!empty($request->picture)){
            $params['foto'] = uploadFotoWithFileNameApi($request->foto, 'PROFILE');
        }
        $upd = $this->userRepo->editProfile($params, $id);
        if($upd){
            return $this->sendResponse(0, 'success', []);
        } else {
            return $this->sendError(7, 'error');
        }
    }

    public function editPassword(Request $request)
    {
        $user = Auth::user();
        $validation = Validator::make($request->all(),[
            'old_password'  => 'required',
            'password' => 'required|min:6',
            'confirmation_password' => 'required|same:password|min:6'
        ]);

        if($validation->fails()){
            return $this->sendError(1, 'error', $validation->errors());
        }

        if(Hash::check($request->old_password, $user->password)){
            $password = Hash::make($request->password);
            $edit = $this->userRepo->editPassword($password, $user->id);
            if($edit){
                return $this->sendResponse(0, 'success', []);
            } else {
                return $this->sendError(7, 'error');
            }
        } else {
            return $this->sendError(29, 'wrong old password');
        }
    }

    
}
