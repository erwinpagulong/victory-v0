import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Mail } from "lucide-react"

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-victory-purple-light to-victory-purple-dark flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm">
        <h1 className="text-lg font-semibold text-white">Registration Complete</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Victory Cubao!</h2>
              <p className="text-gray-600">Your account has been created successfully</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Check Your Email</span>
              </div>
              <p className="text-sm text-blue-700">
                We've sent you a confirmation email. Please click the link in the email to verify your account before
                signing in.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full h-12 bg-victory-purple hover:bg-victory-purple-dark text-white font-semibold rounded-xl"
              >
                <Link href="/auth/login">Continue to Sign In</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full h-12 border-gray-200 text-gray-700 font-semibold rounded-xl bg-transparent"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
