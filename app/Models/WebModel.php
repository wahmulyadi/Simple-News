<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class WebModel extends Model
{
    public function AllDataPosting()
    {
        return DB::table('posting')
        ->join('users', 'users.id', '=', 'posting.id_user')
        ->get();
    }
}
