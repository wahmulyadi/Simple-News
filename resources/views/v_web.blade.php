@extends('layouts.frontend')
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
				<div class="card-body">
					<h2><b>{{ $data->judul}}</h2></b>
					<h6>Penulis : {{ $data->name }}
					{{ $data->tanggal }} </h6>
					<br>
					<p>{{ $data->komentar}}	</p>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>



@endsection

