import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-gradient-to-br from-victory-purple-light to-victory-purple-dark flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm">
        <h1 className="text-lg font-semibold text-white">Authentication Error</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
              <p className="text-gray-600">We encountered an error during authentication</p>
            </div>

            {params?.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-700">
                  <span className="font-medium">Error:</span> {params.error}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Button
                asChild
                className="w-full h-12 bg-victory-purple hover:bg-victory-purple-dark text-white font-semibold rounded-xl"
              >
                <Link href="/auth/login">Try Again</Link>
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
