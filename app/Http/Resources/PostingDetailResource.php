<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;



class PostingDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id_posting'=> $this->id_posting,
            'id_user'=> $this->id_user,
            'judul'=> $this->judul,
            'tanggal'=> $this->tanggal,
            'komentar' => $this->komentar,
            
            // 'image' => ($this->image == null ? asset('/image/default.png') : asset('image/' . $this->image))
        ];
    }
}