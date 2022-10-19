<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\User\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function create(UserRequest $request): JsonResponse {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);


        $user = User::where('email', $data['email'])->first();
        if($user) {
            return response()->json(['message' => 'Данный email уже занят'], 403);
        }
        else {
            $user = User::create($data);
            $token = auth()->tokenById($user->id);
            return response()->json(['access_token' => $token]);
        }
    }

    public function getUsers() {
        return User::all();
    }
}
