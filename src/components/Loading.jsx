export default function Loading() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:pb-16 py-8 px-6 animate-pulse">

            {/* Image Skeleton */}
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md lg:max-w-full h-[300px] bg-gray-300 rounded-xl"></div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>

                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>

                <div className="h-10 bg-gray-300 rounded w-40 mt-4"></div>
            </div>

        </section>
    );
}