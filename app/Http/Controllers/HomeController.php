<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostingModel;
use App\Models\User;
use \DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data= [
            'title' => 'Home',
            
        ];
        return view('home', $data);
    }

   
}
