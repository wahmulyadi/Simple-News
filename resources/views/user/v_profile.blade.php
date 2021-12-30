@extends('layouts.backend')

@section('content')

@if (session('pesan'))     
      <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>              <h5><i class="icon fas fa-check"></i> {{ session('pesan')}}</h5>                  
      </div>
  @endif


    <div class="col-md-12">
      <center>
            <!-- Profile Image -->
             @foreach ($posting as $data)
             @endforeach
              
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img class="profile-user-img img-fluid img-circle"
                       src="{{ asset('foto/'. $data->foto) }}"
                       alt="User profile picture">
                </div>
                 <a href="../profile/edit/{{ $data->id }}" class="btn btn-xs btn-flat btn-warning"><i class="fa fa-edit"></i></a>

                <h3 class="profile-username text-center">{{ $data->name }}</h3>

              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- About Me Box -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <strong><i class="code-outline"></i> Hobby</strong>

                <p class="text-muted">
                  {{ $data->hobby }}
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Alamat</strong>

                <p class="text-muted">{{ $data->alamat }}</p>

                <hr>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </center>
          </div>

            <!-- /.col -->
    
              </div><!-- /.card-header -->
            
            </div>
            <!-- /.nav-tabs-custom -->
          </div>
          <!-- /.col -->


@endsection
