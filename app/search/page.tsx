import SearchPage from "@/components/search-page";

export default function Page() {
    return (
        <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
            <SearchPage />
        </div>
    )
}