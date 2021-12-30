@extends('layouts.backend')

@section('content')

  <div class="card-body">

              @if (session('pesan'))     
                 <div class="alert alert-success alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h5><i class="icon fas fa-check"></i> {{ session('pesan')}}</h5>                  
                </div>
              @endif

    <form action="insert" method="POST" enctype="multipart/form-data">
      @csrf
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <!-- Post -->
                    <div class="post">
                      <div class="user-block">
                     
                        <span class="username">
                          <a href="#">{{ Auth::user ()->name }}</a>
                           <input name="id_user" value="{{ Auth::user()->id }}" type="text" class="form-control" hidden>
                        </span>

                        <span class="description">Shared publicly </span>
                      </div>
                      <!-- /.user-block -->


                     <div class="col-md-4">
                      <input name="tanggal" class="form-control form-control-sm" type="date" value="<?php echo date('Y-m-d'); ?>" readonly> 
                     </div>

                     <div class="col-md-8">
                      <label>Judul</label>
                      <input name="judul" class="form-control form-control-sm" type="text" placeholder="Enter Title...."> 
                     </div>
                      
                      <br>
                      <div class="col-sm-12">
                        <div class="form-group">
                      <label>Postingan</label>
                      <textarea name="komentar" rows="7" class="form-control" placeholder="Enter A Comment...."></textarea> 
                        </div>
                      </div>

                      <div class="card-footer">
                  <button type="submit" class="btn btn-info"><i class="fa fa-save"></i>  Submit</button>
                  
                </div>
  
                    </div>
                    <!-- /.post -->
                  </div>
                  <!-- /.tab-pane -->
                </div>
                </form>
                <!-- /.tab-content -->
              </div><!-- /.card-body -->

@endsection