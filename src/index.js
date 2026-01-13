import { Composition } from "remotion";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Hello"
        component={() => <div style={{fontSize: 80}}>Hello Remotion</div>}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
