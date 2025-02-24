// components/BlinkingEye.tsx
export default function BlinkingEye() {
  return (
    <div className="eye-container">
      <div className="eyelashes">
        <div className="eye" style={{background: 'white'}}>
          <div className="pupil" style={{background: 'black'}}></div>
        </div>
      </div>
    </div>
  )
}
