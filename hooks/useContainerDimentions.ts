import React, {useEffect, useState} from 'react';

const useContainerDimensions = (containerRef: React.RefObject<HTMLDivElement>) => {
    const getDimensions = () => ({
        width: containerRef.current?.offsetWidth || 0,
        height: containerRef.current?.offsetHeight || 0,
    })

    const [dimensions, setDimensions] = useState({width: 0, height: 0})

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        let dimensionsTimeout = setTimeout(() => {
            if (containerRef.current) {
                setDimensions(getDimensions())
            }
        }, 100)

        window.addEventListener("resize", handleResize)

        return () => {
            clearTimeout(dimensionsTimeout)
            window.removeEventListener("resize", handleResize)
        }
    }, [containerRef])

    return dimensions
}


export {useContainerDimensions};