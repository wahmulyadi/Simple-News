<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PostingModel extends Model
{
    protected $fillable=[
        'id_user',
        'judul',
        'komentar',
        'tanggal',
    ];

    protected $tanggal =['tanggal'];

    public function user(){
        return $this->belongsTo('App\Models\User', 'id_user', 'id');
    }

    public function AllData()
    {
        return DB::table('posting')
        ->join('users', 'users.id', '=', 'posting.id_user')
        ->get();
    }

    public function InsertData($data)
    {
        DB::table('posting')
        ->insert($data);
    }

    public function DetailData($id_posting)
    {
        return DB::table('posting')
        ->join('users', 'users.id', '=', 'posting.id_user')
        ->where('id_posting', $id_posting)->first();
    }

    public function UpdateData($id_posting, $data)
    {
        DB::table('posting')
        ->where('id_posting', $id_posting)
        ->update($data);
    }

    public function DeleteData($id_posting)
    {
        DB::table('posting')
        ->where('id_posting', $id_posting)
        ->delete();
    }

    public function DetailProfile($id)
    {
        return DB::table('users')
        ->join('posting', 'posting.id_user', '=', 'users.id')
        ->where('id', $id)->first();
    }

     public function UpdateProfile($id, $data)
    {
        DB::table('users')
        ->where('id', $id)
        ->update($data);
    }
}
