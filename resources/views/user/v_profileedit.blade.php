@extends('layouts.backend')

@section('content')

  <div class="col-md-12">
        <div class="card card-primary">
           <div class="card-header">
              <h3 class="card-title">Edit Profile</h3>
              <!-- /.card-tools -->
            </div>
              <!-- /.card-header -->
               <form action="../update/edit/{{ $users->id }}" method="post" enctype="multipart/form-data">
                @csrf
            <div class="card-body">
                
                  <div class="col-sm-6">
                      <div class="form-group">
                        <label>Nama</label>
                        <input name="name" value="{{ $users->name }}" type="text" class="form-control" placeholder="Masukkan Nama">
                        <div class="text-danger">
                          @error('name')
                            {{ $message }}
                          @enderror
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Hobby</label>
                        <input name="hobby" value="{{ $users->hobby }}" type="text" class="form-control" placeholder="Masukkan Hobby">
                        <div class="text-danger">
                          @error('hobby')
                            {{ $message }}
                          @enderror
                        </div>
                      </div>
                    </div>
                     <div class="col-sm-6">
                      <div class="form-group">
                        <label>Alamat</label>
                        <input name="alamat" value="{{ $users->alamat }}" type="text" class="form-control" placeholder="Masukkan Alamat">
                        <div class="text-danger">
                          @error('alamat')
                            {{ $message }}
                          @enderror
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Foto User</label>
                          <input type="file" name="foto" class="form-control" accept="image/jpeg,image/jpg,image/png">
                      <div class="text-danger">
                          @error('foto')
                            {{ $message }}
                          @enderror
                        </div>
                      </div>
                    </div>
             
              <div class="card-footer">
                  <button type="submit" class="btn btn-info"><i class="fa fa-save"></i>Simpan</button>
                </div>

            </div>
            </form>
        </div>
    </div>


@endsection