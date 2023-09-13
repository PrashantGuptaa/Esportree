const Stat = ({ title, value, reputation = false }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center rounded-md border p-4 border-gray-300">
            <p className="text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-green-500 text-2xl font-semibold">{value}</p>
            {reputation && <p className="text-gray-500 dark:text-gray-400 animate-pulse cursor-pointer">Watch video to increase points</p>}
        </div>
    )
}

export default Stat