<?php

namespace App\Http\Controllers\API\posting;

use App\Http\Controllers\ApiController;
use App\Http\Repositories\PostingRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostingController extends ApiController
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
        if(count($data) > 0){
            return $this->sendResponse(0, 'success', $data);
        } else if(count($data) == 0){
            return $this->sendResponse(0, 'data kosong', []);
        } else {
            return $this->sendError(2, 'Error');
        }
    }
    public function getDetailPosting($id){
        $id_user = Auth::user()->id;
        $data = $this->postRepo->getDetailAlter($id);
        
        if (!empty($data)) {
            return $this->sendResponse(0, 'success', $data);
        } elseif ($data === false) {
            return $this->sendError(1, 4);
        } else {
            return $this->sendError(1, 4);
        }
    
    }

}
