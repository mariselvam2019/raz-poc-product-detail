

type Props = {
    item?: any
}

const BadgeComponent = ({item}: any) => {
    return (
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
            <svg className="h-6 w-full mb-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h5 className="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5> 
            <p className="font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
        </div>
    )
}

export default BadgeComponent
