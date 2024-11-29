
import { useForm } from 'react-hook-form';

function Login() {
  const{register, handleSubmit,formState:{error},watch} = useForm();

  const Login =(data)=>{
    console.log(data);

  };
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <h2 className="text-3xl font-bold text-center text-gray-800">Sign in to your account</h2>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(Login)}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            {...Login('email',{required:true})}
            className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div className='pt-1.5'>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            {...Login('password',{required:true})}
            className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="w-full mb-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md shadow-md transition duration-150 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
        <button
          type="button" // Change this to 'button' to prevent form submission
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 rounded-md shadow-md transition duration-150 ease-in-out transform hover:scale-105"
        >
          Create account
        </button>
      </div>
    </form>
  </div>
</div>
  )

}
export default Login;