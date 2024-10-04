import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    How to Use the AI Course Generator
                </h2>
                <div className="space-y-12">
                    <Step
                        number={1}
                        title="Select a Category"
                        description="Choose from options like Programming, Creative, or Health to define the general area of your course."
                        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-04%20093336-97Qm5GSsBoyLswn9isXObVhmZGk1Rz.png"
                    />
                    <Step
                        number={2}
                        title="Define Your Topic"
                        description="Enter a specific topic for your course (e.g., Python Course, Yoga) and provide additional details about what you want to include."
                        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-04%20093353-9dubOCCnzWkXYD2vnJXNe6o2UQp81l.png"
                    />
                    <Step
                        number={3}
                        title="Customize Course Options"
                        description="Set the difficulty level, course duration, whether to include videos, and the number of chapters for your course."
                        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-04%20093416-ns3FJFXMCvknD9NRGPnKtRUIrdrjZA.png"
                    />
                </div>
                <div className="mt-12 text-center">
                    <p className="text-xl text-gray-600">
                        Start creating your personalized AI-generated course today and unlock a world of efficient, tailored learning experiences!
                    </p>
                    <Link 
                        href="/dashboard"
                        className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Get Started
                        <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Step({ number, title, description, imageSrc }) {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                    src={imageSrc}
                    alt={`Step ${number}: ${title}`}
                    width={550}
                    height={300}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-500 text-white font-bold text-sm">
                        {number}
                    </div>
                    <h3 className="ml-3 text-xl font-medium text-gray-900">{title}</h3>
                </div>
                <p className="text-base text-gray-500">{description}</p>
            </div>
        </div>
    );
}

export default Hero;