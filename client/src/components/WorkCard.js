import React from "react";
import PropTypes from 'prop-types';
function WorkCard({name, works}) {

  WorkCard.propTypes = {
    name: PropTypes.string,
    works: PropTypes.string
  }

return (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Work Information</h3>
    </div>
      
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Author Name</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{name}</dd>
        </div>
          
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Works</dt>
            {works.map(work => {
              return (
                <div key={work}>
                  <ul className="list-disc">
                    <li key={work.toString()}>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{work.title}</dd>
                    </li>
                  </ul>
                </div>
                  )
              })}
          </div>
        </dl>
      </div>
    </div>
  )
}
  
export default WorkCard;