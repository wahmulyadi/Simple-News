<?php

namespace App\Http\Repositories;

use App\Http\Resources\BookmarkResource;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class UserRepository
{

   
    public function getDetail($id)
    {
        $now = date('Y-m-d H:i:s');
        $select = [
            'name',
            'email',
            'alamat',
            'hobby',
            'id',
            'foto',
           
        ];

        $data = DB::table('users')
                ->select($select)
                ->where('id', $id)
                ->first();
        
        $data = new UserResource($data);
        return $data;
    }

    public function editPassword($password, $id)
    {
        $upd = DB::table('users')
                ->where('id', $id)
                ->update([
                    'password'  => $password
                ]);
        return $upd;
    }

    public function editProfile($params, $id)
    {
        $upd = DB::table('users')
                ->where('id', $id)
                ->update([
                    'name'  => $params['name'],
                    'email' => $params['email'],
                    'alamat' => $params['phone'],
                    'hobby'  => $params['hobby'],
                    'foto' => $params['foto'],
                ]);
        return $upd;
    }

    public function checkEmail($email)
    {
        $check = DB::table('users')
            ->where('email', $email)
            ->exists();
        return $check;
    }
}
