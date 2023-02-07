import './index.scss'
import Logow from '../../../assets/images/logo-w.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={Logow} alt="W" />
      <svg
        width="1080pt"
        height="1080pt"
        version="1.1"
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/1999/xlink"
      >
        <g
          className="svg-container"
          transform="translate(100%, 100%) scale(.1 .-1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M861.37,833.19H705.4c-1.14,0-2.15-0.72-2.53-1.8L575.29,466.73L448.61,831.39c-0.38,1.08-1.39,1.8-2.53,1.8
            H290.1c-1.15,0-2.18-0.74-2.54-1.84L71.6,180.72c-0.27-0.82-0.13-1.71,0.37-2.41c0.5-0.7,1.31-1.11,2.17-1.11h189.19
            c1.18,0,2.23,0.77,2.57,1.91l89.87,298.31l20.28,67.34l121.92-367.57c0.36-1.1,1.39-1.84,2.54-1.84h154.12
            c1.16,0,2.18,0.74,2.54,1.84L755.6,473.9l23.5,70.86l110.15-365.65c0.34-1.13,1.38-1.91,2.57-1.91h185.5
            c0.86,0,1.67,0.41,2.17,1.11c0.5,0.7,0.64,1.6,0.37,2.41L863.92,831.35C863.55,832.45,862.53,833.19,861.37,833.19z
             M707.3,827.83h152.13l214.17-645.26H893.81L781.79,554.42c-0.34,1.12-1.36,1.89-2.53,1.91c-1.11-0.01-2.21-0.73-2.58-1.84
            L652.7,180.71H502.45L378.47,554.49c-0.37,1.11-1.45,1.83-2.58,1.84c-1.17-0.02-2.19-0.79-2.53-1.91l-22.72-75.46l-89.29-296.4
            H77.86l214.18,645.26h152.13l128.57-370.12c0.37-1.08,1.39-1.8,2.53-1.8c0,0,0,0,0,0c1.14,0,2.15,0.72,2.53,1.8L707.3,827.83z"
          />
        </g>
      </svg>
    </div>
  )
}
export default Logo
