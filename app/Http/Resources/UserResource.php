<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'alamat' => $this->alamat,
            'hobby' => $this->hobby,
            'id'    => $this->id,
            'foto' => ($this->foto == null ? asset('/foto/default.png') : asset('storage/' . $this->foto)),
            'foto' => $this->foto
        ];
    }
}