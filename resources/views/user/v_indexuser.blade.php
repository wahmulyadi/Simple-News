@extends('layouts.backend')

@section('content')

@if (session('pesan'))     
    <div class="alert alert-success alert-dismissible">
    	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
     	<h5><i class="icon fas fa-check"></i> {{ session('pesan')}}</h5>                  
   </div>
  @endif

<div class="content">
   <div class="container">
      <div class="row">
		<div class="col-1g-6">
			@foreach ($posting as $data)
			<div class="card">
				<div class="card-tools">
					<a href="../user/edit/{{ $data->id_posting}}" type="button" class="btn btn-primary btn-sm btn-flat">Edit</a>
					<button class="btn btn-sm btn-flat btn-danger" data-toggle="modal" data-target="#delete{{ $data->id_posting }}"><i class="fa fa-trash"></i></button>

					<div class="card-body">
						<h2><b>{{ $data->judul }}</h2></b>
						<h6>{{ $data->tanggal }} {{ $data->name }}</h6>
						<br>
						<p>{{ $data->komentar }}</p>
					</div>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>

@endsection

<!-- /.modal delete -->
@foreach ($posting as $data)
      <div class="modal fade" id="delete{{$data->id_posting}}">
        <div class="modal-dialog">
          <div class="modal-content bg-danger">
            <div class="modal-header">
              <h4 class="modal-title">{{$data->name}}</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Apakah Anda Yakin Ingin Menghapus Data Ini..?</p>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
              <a href="../user/delete/{{ $data->id_posting}}" button type="button" class="btn btn-outline-light">Yes</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
@endforeach