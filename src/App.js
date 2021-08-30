// The map is the basic container, the tile is each square
import IsometricMap, {
  IsometricTile,
  IsometricObject,
} from 'react-isometric-tilemap'
// The styles are needed to display properly
import 'react-isometric-tilemap/build/css/index.css'

import './App.css'
import farmLv1 from './farmLv1.png'
import farmLv1Some from './farmLv1Some.png'

const mapWidth = 10
const mapHeight = 10

const heights = [
  7, 7, 5, 4, 4, 3, 2, 3, 2, 2, 7, 7, 5, 4, 4, 3, 2, 3, 2, 2, 7, 7, 5, 4, 4, 3,
  2, 3, 2, 2, 7, 7, 5, 4, 4, 3, 2, 3, 2, 2, 7, 7, 5, 4, 4, 3, 2, 3, 2, 2, 5, 5,
  5, 4, 3, 3, 2, 3, 2, 2, 5, 5, 4, 4, 3, 3, 2, 3, 1, 1, 5, 5, 3, 3, 3, 3, 2, 3,
  1, 1, 5, 5, 3, 3, 3, 3, 2, 3, 1, 1, 4, 1, 1, 4, 3, 3, 2, 3, 1, 1,
]

function App() {
  return (
    <div className="app">
      <div className="container">
        <IsometricMap
          mapWidth={mapWidth}
          mapHeight={mapHeight}
          tileSize={96}
          slabSize={12}
          margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
          offsetY={0}
        >
          {heights.map((z, index) => {
            if (z === 0) {
              return null
            }
            const x = index % mapWidth
            const y = Math.floor(index / mapWidth)
            const result = [
              <IsometricTile
                className={z <= 1 && 'water'}
                key={`tile${index}`}
                x={x}
                y={y}
                z={z}
              />,
            ]
            const mul = 21
            const adjust = 2
            if (Math.random() < 0.5 && z !== 1) {
              // if (z !== 1) {
              result.push(
                <IsometricObject
                  key={`object${index}`}
                  x={x}
                  y={y}
                  z={z}
                  width={101}
                  height={70}
                  style={{
                    top: -mul * ++z + 2 * z,
                    left: -mul * z + adjust * z,
                  }}
                  frames={[Math.random() < 0.2 ? farmLv1Some : farmLv1]}
                  active
                />,
              )
            }
            return result
          })}
        </IsometricMap>
      </div>
    </div>
  )
}

export default App
