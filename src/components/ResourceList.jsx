import React from 'react'
import useResources from './useResources';

const ResourceList = ({ resourceName }) => {
    const resources = useResources(resourceName);


    return (
        <div>
            <ul>
                {resources.map(resource => (
                    <li className="font-bold underline" key={resource.id}>{resource.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default ResourceList