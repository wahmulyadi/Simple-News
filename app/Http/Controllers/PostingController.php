<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostingModel;
use App\Models\User;
use Auth;
use \DB;

class PostingController extends Controller
{
    public function __construct()
    {
        $this->PostingModel = new PostingModel();
        $this->User = new User();
        $this->middleware('auth');    
    }

        public function profile()
    {
        $id_user = Auth::user()->id;
        $posting = DB::table('users')->join('posting', 'posting.id_user', '=', 'users.id')->where('users.id', $id_user)->get();
        $title = 'Profile User';

        return view('user.v_profile', compact('posting','title'));
        // $data= [
        //     'title' => 'Profile User',
        //     'posting' => $this->PostingModel->AllData(),
        // ];
        // return view('user.v_profile', $data);
    }

    public function editprofile($id){
         $data =[
            'title' => 'Edit Data Profile',
            'users'=> $this->PostingModel->DetailProfile($id),
        ];
        return view('user.v_profileedit', $data);
    }

    public function updateprofile(Request $request, $id){

         Request()->validate([
            'name'  => 'required',
            'alamat'  => 'required|max:50',
            'hobby'      => 'required|max:100',
            'foto'      => 'required|max:1024',
        ],
        [
            'name.required' => 'Nama User Wajib di Isi..!!',
            'alamat.required' => 'Email Wajib di Isi..!!',
            'hobby.required' => 'Password Wajib di Isi..!!',
            'foto.required' => 'Foto Posyandu Wajib di Isi..!!',
            'foto.max' => 'Foto Max 1024 KB..!!',
        ]
   );


       if (Request()->foto <> "") {
        //hapus foto lama
        $users = $this->PostingModel->DetailProfile($id);
        if ($users->foto <> "") {
            unlink(public_path('foto'). '/' . $users->foto);
        }
        //jika ingin ganti foto
             $file = Request()->foto;
             $filename = $file->getClientOriginalName();
             $file->move(public_path('foto'), $filename);
            
            $data =[
            'name' => Request()->name,
            'alamat' => Request()->alamat,
            'hobby' => Request()->hobby,
            'foto' => $filename,
        ];
        $this->PostingModel->UpdateProfile($id, $data);
        }else {
        //jika tidak ingin ganti foto
        $data =[
            'name' => Request()->name,
            'alamat' => Request()->alamat,
            'hobby' => Request()->hobby,
        ];

        $this->PostingModel->UpdateProfile($id, $data);
        }
        return redirect()->route('profile')->with('pesan', 'Data Berhasil Di Perbaharui!');
        
    }

    public function posting()
    {
        $data= [
            'title' => 'Posting Konten',
        ];
        return view('user.v_posting', $data);
    }

    public function index()
    {
        $id_user = Auth::user()->id;
        $posting = DB::table('posting')->join('users', 'users.id', '=', 'posting.id_user')->where('posting.id_user', $id_user)->get();
        $title = 'Postingan User';

        return view('user.v_indexuser', compact('posting','title'));

        // $data= [
        //     'title' => 'Postingan User',
        //     'posting' => $this->PostingModel->AllData(),
        // ];
        // return view('user.v_indexuser', $data);
    }

    public function create(){
        return view('user.v_posting');
    }

    public function indexuser(){
        $id_user = Auth::user()->id;
         $posting= DB::table('posting')->join('users',  'users.id', '=', 'posting.id_user')->where('posting.id_user', $id_user)->get();
        return view('user.v_indexuser', compact('posting'));
    }

    public function insert(Request $request){
        // dd($request->all());
        Request()->validate([
            'id_user' => 'required',
            'judul' => 'required',
            'komentar' => 'required',
            'tanggal' => 'required',

        ],
        [
            'judul.required' => 'Judul Wajib Di isi..!!',
            'komentar.required' => 'Postingan Wajib Di isi..!!',
        ]
    );

        $data =[
            'id_user'=> $request->id_user,
            'judul'=> $request->judul,
            'komentar'=> $request->komentar,
            'tanggal'=> $request->tanggal,
        ];
        
        $this->PostingModel->InsertData($data);
        return redirect()->route('index')->with('pesan', 'Postingan Berhasil Di Tambahkan');
    }

    public function edit($id_posting){
        $data =[
            'title' => 'Edit Data Postingan',
            'posting'=> $this->PostingModel->DetailData($id_posting),
        ];
        return view('user.v_editposting', $data);
    }

    public function update(Request $request, $id_posting)
    {
        Request()->validate([
            'judul' => 'required',
            'komentar' => 'required',
            'tanggal' => 'required',
        ],
        [
            'judul.required' => 'Judul Harus Diisi...!!',
            'komentar.required' => 'Postingan Harus Diisi...!!',
        ]);

        $data=[
            'judul' => Request()->judul,
            'komentar' => Request()->komentar,
            'tanggal' => Request()->tanggal,
        ];
        $this->PostingModel->UpdateData($id_posting, $data);
        return redirect()->route('indexuser')->with('pesan', 'Postingan Berhasil Di Ubah');
    }

    public function delete($id_posting)
    {
        $this->PostingModel->DeleteData($id_posting);
        return redirect()->route('indexuser')->with('pesan', 'Data Berhasil Di Hapus!');
    }
    
}
