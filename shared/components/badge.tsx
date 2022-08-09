import {IconGlobe, IconCurrencyDoller} from "../../components/icons"

type Props = {
    item?: any
}

const BadgeComponent = ({item}: any) => {
    return (
        <div className="w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
            {item?.icon === "globe" && <IconGlobe customClass="h-6 w-full mb-1"/>}
            {item?.icon === "doller" && <IconCurrencyDoller customClass="h-6 w-full mb-1"/>}
            <h5 className="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5> 
            <p className="font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
        </div>
    )
}

export default BadgeComponent
