<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;



class PostingResource extends JsonResource
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
            'id'=> $this->id,
            'id_user'=> $this->id_user,
            'judul'=> $this->judul,
            'taggal'=> $this->taggal,
            'komentar' => $this->komentar,
            // 'image' => ($this->image == null ? asset('/image/defaultalt.png') : asset('image/' . $this->image))
        ];
    }
}
