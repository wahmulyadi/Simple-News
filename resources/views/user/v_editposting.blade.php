@extends('layouts.backend')

@section('content')

  <div class="col-md-12">
        <div class="card card-primary">
           <div class="card-header">
              <h3 class="card-title">Edit Data</h3>
              <!-- /.card-tools -->
            </div>
              <!-- /.card-header -->
              <form action="../update/{{ $posting->id_posting }}" method="POST" enctype="multipart/form-data">
                @csrf
            <div class="card-body">
                
                <div class="row">
                  <div class="col-md-12">
                      <input name="tanggal" class="form-control form-control-sm" type="date" value="<?php echo date('Y-m-d'); ?>" readonly> 
                     </div>

                  <div class="col-sm-6">
                      <div class="form-group">
                        <label>Judul</label>
                        <input name="judul" value="{{ $posting->judul }}" type="text" class="form-control" placeholder="Judul">
                        <div class="text-danger">
                          @error('judul')
                            {{ $message }}
                          @enderror
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Posting</label>
                        <input name="komentar" value="{{ $posting->komentar }}" type="text" class="form-control" placeholder="Postingan">
                        <div class="text-danger">
                          @error('komentar')
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