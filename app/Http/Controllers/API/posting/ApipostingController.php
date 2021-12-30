<?php

namespace App\Http\Controllers\API\posting;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Repositories\PostingRepository;


class ApipostingController extends ApiController
{
    protected $postRepo;
    public function __construct(PostingRepository $postRepo) {
        $this->postRepo = $postRepo;
    }

    
    public function getListPosting(Request $request)
    {
        $id_user = Auth::user()->id;
        $limit = $request->limit;
        $offset = $request->offset;

        $data = $this->postRepo->getList($limit, $offset, $id_user);
        // dd($data);
        if(count($data) > 0){
            return $this->sendResponse(0, 'success', $data);
        } else if(count($data) == 0){
            return $this->sendResponse(0, 'data kosong', []);
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function getDetailPosting($id_posting){
        $id_user = Auth::user()->id;
        $data = $this->postRepo->getDetail($id_posting);
        
        if (!empty($data)) {
            return $this->sendResponse(0, 'success', $data);
        } elseif ($data === false) {
            return $this->sendError(1, 4);
        } else {
            return $this->sendError(1, 4);
        }
    
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
