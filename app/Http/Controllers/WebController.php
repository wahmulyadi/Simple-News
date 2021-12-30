<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WebModel;
use App\Models\User;

class WebController extends Controller
{
    public function __construct(){
        $this->WebModel = new WebModel();
    }

    public function index()
    {
        $data =[
            'title' => 'Beranda Postingan user',
            'posting' => $this->WebModel->AllDataPosting(),
        ];
        return view('v_web', $data);
    }

    public function about()
    {
        $data =[
            'title'=> 'Tentang Aplikasi dan Webiste Pretest',
        ];
        return view('v_about', $data);
    }

    
}
