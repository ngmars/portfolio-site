import {Html, useProgress} from "@react-three/drei"
const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <span className="canvas-loader"/>
            <p style={{ fontSize: 13, color: "#86868b", fontWeight: 500, marginTop: 16 }}>
                {
                    (progress !== 0) ?
                    (`${Math.round(progress)}%`) : ("Loading...")
                }
            </p>
        </Html>
     );
}
 
export default CanvasLoader;