import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const cards = [
    {
      id: 1,
      categoria: "amplificadores",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-e5b80f93f6eb10bc__hmac-838dc7f6c251eb05d599cb160941fa43e5a23930/images/items/1800/JP-2C-xlarge.jpg.auto.webp",
      nombre:
        "Mesa/Boogie JP-2C Mark IIC+ John Petrucci 60/100-watt Tube Head - Black Taurus",
      descripcion:
        "John Petrucci Signature Mark IIC+ amp head from Mesa/Boogie Tones based on the legendary Mark IIC+ amp heads 100- and 60-watt operation",
      precio: 3349,
    },
    {
      id: 2,
      categoria: "amplificadores",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-07179f6eaf252f04__hmac-dbfe1f3c4a298316b3ba3d0a900f5424d11bec56/images/items/1800/Rockerv503H-xlarge.jpg.auto.webp",
      nombre: "Orange Rockerverb 50 MKIII - 50-watt 2-channel Tube Head",
      descripcion:
        "2-channel, 50-watt high-gain electric guitar amplifier Revoiced channels go from chimey to grinding 12AX7 preamp tubes and EL34 power tubes",
      precio: 2149,
    },
    {
      id: 3,
      categoria: "amplificadores",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-cd6d6a07fefd311f__hmac-b01534e650a1fd81787b9a2e705a222c76479626/images/items/1800/Rebel30MkII-xlarge.jpg.auto.webp",
      nombre: "Egnater Rebel-30 MKII 30-watt Tube Head",
      descripcion:
        "All-tube amp head with a small footprint Tube Mix blends 6V6 and EL84 power tubes Variable wattage control (per channel) from 1 watt to 30 watts",
      precio: 1099,
    },
    {
      id: 4,
      categoria: "guitarras",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-3fc070d26e2435f4__hmac-b39bd52f18ef9e3d1482d40c4cef16c27ecd7338/images/guitars/StratAPERHB/US22064307/US22064307-body-xlarge.jpg.auto.webp",
      nombre:
        "Fender American Performer Stratocaster Honeyburst with Rosewood Fingerboard",
      descripcion:
        "Yosemite single-coil pickups with flat-staggered pole pieces to increase output Modern C profile maple neck 9.5-radius fingerboard with 22 jumbo frets",
      precio: 1399,
    },
    {
      id: 5,
      categoria: "guitarras",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-67d4cc75a1465730__hmac-bad45cc358fb60becd78a56d996f3b38db42216b/images/items/1800/JP15Flame6-xlarge.jpg.auto.webp",
      nombre: "Ernie Ball Music Man JP15 Electric Guitar - Sahara Burst Flame",
      descripcion:
        "Comfortable mahogany body and eye-popping roasted flame maple top, matte finish Fast roasted maple neck and fingerboard with 17 radius Two DiMarzio Illuminator humbucking pickups",
      precio: 3599,
    },
    {
      id: 6,
      categoria: "guitarras",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-4c2d618f7451b3a7__hmac-fed1c4c4b711981d4427431c74cb37f76d4c0c3c/images/items/1800/CU2408MCS-xlarge.jpg.auto.webp",
      nombre: "PRS Custom 24-08 Electric Guitar - McCarty Sunburst",
      descripcion:
        "Exquisite Custom 24 with special finish options Bright-sounding and eye-catching flamed maple top 25-inch-scale Pattern Thin mahogany neck is built for speed and comfort",
      precio: 4310,
    },
    {
      id: 7,
      categoria: "efectos",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-8e7835557a9e4464__hmac-3512a312444e491a63de0c77fe9e9b1fc897bdb1/images/items/1800/QuadCortex-xlarge.jpg.auto.webp",
      nombre:
        "Neural DSP Quad Cortex Quad-Core Digital Effects Modeler/Profiling Floorboard",
      descripcion:
        "Multi-touch guitar and bass modeler with capture technology Quad-Core SHARC DSP delivers a whopping amount of processing power Preloaded with over 50 amps, 70 effects, and 1,000 cabs",
      precio: 1849,
    },
    {
      id: 8,
      categoria: "sintetizadores",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-7a126aebfc168f11__hmac-34cc4f4f4cdf65ea129c28e857a96f812177d307/store/enhanced/items/BehrPolyD/811065-BehrPolyD_detail2.jpg.auto.webp",
      nombre: "Behringer Poly D Polyphonic Analog Synthesizer",
      descripcion:
        "True to the original D-type circuitry Pure analog signal path 37 full-size keys with After Pressure Classic Ladder Filter with lowpass, highpass modes",
      precio: 689,
    },
    {
      id: 9,
      categoria: "interfaces",
      foto: "https://store.focusrite.com/images/products/large/MOSC0029UK_1.png",
      nombre: "Focusrite Scarlett 18i20 3rd Gen USB Audio Interface",
      descripcion:
        "High-performance 24-bit/192kHz converters 8 upgraded 3rd-generation Scarlett mic preamps Direct Monitor circuit for monitoring your input with guaranteed low-latency 2 high-headroom instrument inputs for bass, guitar, or synths",
      precio: 549,
    },
  ];

  const {id} = useParams()

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {cards[id-1].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={cards[id-1].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{cards[id-1].nombre}</h4>
        <p className="card-text">{cards[id-1].descripcion}</p>
        <h5 className="card-text">$ {cards[id-1].precio} USD</h5>
        <button id={cards[id-1].id} className="btn btn-primary">Comprar</button>
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer