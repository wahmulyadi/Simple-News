<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Posting extends Model
{
    //
    protected $table = 'posting';
    protected $fillable = [ 
    'id_posting',
    'id_user',
    'judul',
    'taggal',
    'komentar' ,];
    protected $hidden = ['created_at', 'updated_at'];
   
   
}
