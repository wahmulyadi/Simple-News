<?php

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\User;
use phpDocumentor\Reflection\Types\Null_;

use App\Http\Resources\PostingResource;
use App\Http\Resources\PostingDetailResource;

class PostingRepository
{

    public function getList($limit, $offset, $id_user){
        $select = [
            'id_posting',
            'id_user',
            'judul',
            'taggal',
            'komentar' ,
        ];

        $data = DB::table('posting')
                ->select($select)
                ->orderBy('created_at','DESC');
                if($limit != null && $offset != null){
                    $data = $data->limit($limit)
                            ->offset($offset);
                    }
                $data = $data->get();

        $data = PostingResource::collection($data);
        return $data;
    }


    public function getDetailAlter($id){
        $select = [
            'id',
            'id_user',
            'judul',
            'taggal',
            'komentar' ,
        ];
        
        $get = DB::table('alternatifs')->select($select)->where('id', $id)->first();  
      
        $data = (collect($get)->count()) ? new PostingDetailResource($get) : false;;
        return $data;
    }

   

}