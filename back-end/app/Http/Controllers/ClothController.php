<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cloth;
class ClothController extends Controller
{
public function index(Request $request )
    {
       
             $name=$request->name;
      if(isset($name)){
           
          $clothes= Cloth::Where('name',$name)->get();
             return response()->json([
                'clothes' => $clothes
            ]);
      }
          else{
            $clothes = Cloth::all();
         return response()->json([
                'clothes' => $clothes
            ]);
          }
    

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//   
        $request->validate(['name'=>'min:3|required','image'=>'mimes:jpg,png|image' ]);
        $cloth= new Cloth();
        $cloth->name=$request->name;
          $cloth->type=$request->type;
          $cloth->age=$request->age	;
          $cloth->price=$request->price;
         
        // if($request->hasfile('image')){
        //     $file=$request->file('image');
        //     $ex=$file->getClientOriginalExtension();
        //     $filename=time().'.'.$ex;
        //     $file->move('uploads/clothes',$filename);
        //     $cloth->image=$filename;
        // }
        $cloth->save();
         return response()->json([
            'status' => true,
            'message' => "clothes save successfully!",
        ], 200);
      
    

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $clothes = Cloth::find($id);
         return response()->json([
                'clothes' => $clothes
            ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
     public function edit()
    {
        

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id=$request->id;
        $cloth = Cloth::find($id);
        // if($request->hasfile('image')){
        //     $file=$request->file('image');
        //     $ex=$file->getClientOriginalExtension();
        //     $filename=time().'.'.$ex;
        //     $file->move('uploads/clothes',$filename);
        //     $cloth->image=$filename;
        // }
    
        $cloth->name=$request->name;
          $cloth->type=$request->type;
          $cloth->age=$request->age	;
          $cloth->price=$request->price;
     
        $cloth->save();
         return response()->json([
            'status' => true,
            'message' => "clothes save successfully!",
        ], 200);
      
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($cloth)
    {
        $cloth = Cloth::find($cloth);
        $cloth->delete();

    }
}
