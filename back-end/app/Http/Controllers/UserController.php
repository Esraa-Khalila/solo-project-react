<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function log( Request $request){
        // $validator = Validator::make($request->all(), [
        //     'email' => 'required|email',
        //     'password' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json(['validation_errors'=>$validator->errors(),'status'=> 401]);
        // }

        $user = User::where('email', $request->email)->first();
         $matchThese = ['role' => 'admin'];
        if ($user && $matchThese) {
            if ($request->password == $user->password) {
                $logged_user = [ "id" => $user->id ,'userName' =>$user->userName , 'email' => $user->email,'role' => $user->role  ];
                return response()->json([
                    'logged_user'=>$logged_user,
                     'status'=> 200,
                     'message'=> 'Logged In successfully'
                    ]);
                    

      
            } else {
                return response()->json(['error'=>'Check email and password']);
                
            }
        } else {
            return response()->json(['error'=>'email dose not exist']);
                    
        }
    }

}
