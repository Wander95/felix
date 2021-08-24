import React from 'react'
import RemoveIcon from '../../../assets/images/Remove.icon'

const BottomSection = () => {
  return (
  <div className="px-12 py-8">
      <h2 className="text-xl">Reclamaciones medicas</h2>


      <div className="flex pt-6">
        <div>
          <button className="relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
            R
            <div className="absolute right-0 top-0 rounded-sm p-1 bg-azulMarino-default  grid place-items-center text-xs text-white-section">
              <RemoveIcon />
            </div>
          </button>
          <span className="block text-sm">21/05/2015</span>
          <span className="block text-sm">CENASA</span>
        </div>
        <div>
          <button className="relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
            R
          </button>
          <span className="block text-sm">21/05/2015</span>
          <span className="block text-sm">CENASA</span>
        </div>
        <div>
          <button className="relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
            R
          </button>
          <span className="block text-sm">21/05/2015</span>
          <span className="block text-sm">CENASA</span>
        </div>
        <div>
          <button className="relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
            R
          </button>
          <span className="block text-sm">21/05/2015</span>
          <span className="block text-sm">CENASA</span>
        </div>
        <div>
          <button className="relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
            R
          </button>
          <span className="block text-sm">21/05/2015</span>
          <span className="block text-sm">CENASA</span>
        </div>
      </div>
    </div>
  )
}

export default BottomSection
