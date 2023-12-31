<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::limit(100)->get();
        return Inertia::render('User/Index',compact('users'));
    }
}
