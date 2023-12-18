<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $data = Post::all();
        return Inertia::render('Post', ['data' => $data]);
    }
}
