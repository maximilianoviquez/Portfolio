const BLOB_A = 'M62.6,-16.8C71.8,7.9,63.4,41.8,44.6,53.7C25.8,65.5,-3.4,55.3,-25.5,38.4C-47.6,21.6,-62.5,-1.8,-57.1,-21.3C-51.6,-40.9,-25.8,-56.7,0.4,-56.8C26.7,-57,53.4,-41.5,62.6,-16.8Z';
const BLOB_B = 'M33.8,-42.1C42.4,-33.1,46.9,-21.1,51,-7.6C55,5.9,58.5,20.8,53.6,32.5C48.7,44.3,35.5,52.8,20.3,60.4C5,67.9,-12.3,74.6,-24.7,69.4C-37.1,64.2,-44.7,47.2,-50.2,31.8C-55.8,16.4,-59.4,2.6,-60.1,-13.7C-60.9,-29.9,-58.8,-48.8,-48.3,-57.4C-37.8,-66,-18.9,-64.4,-3.1,-60.6C12.6,-56.9,25.2,-51,33.8,-42.1Z';
const BLOB_C = 'M42.6,-34.3C57.4,-15.4,73.1,2.4,72.3,20.8C71.5,39.1,54.3,58,35.8,62.3C17.3,66.6,-2.4,56.3,-22.8,46.7C-43.3,37.2,-64.4,28.3,-71.1,12.5C-77.7,-3.4,-69.7,-26.4,-55.5,-45.2C-41.2,-64,-20.6,-78.6,-3.4,-75.9C13.9,-73.3,27.8,-53.2,42.6,-34.3Z';

const blobs = [
  { pos: 'top-0 left-0', path: BLOB_A, color: 'var(--color-violet)' },
  { pos: 'top-0 right-0', path: BLOB_B, color: 'var(--color-yellow)' },
  { pos: 'bottom-0 left-0', path: BLOB_C, color: 'var(--color-green)' },
  { pos: 'bottom-0 right-0', path: BLOB_A, color: 'var(--color-blue)' },
];

export function Background() {
  return (
    <div className="fixed inset-0 z-0 blur-[40px] pointer-events-none" aria-hidden="true">
      {blobs.map((blob, i) => (
        <svg
          key={i}
          viewBox="0 0 200 200"
          className={`absolute w-1/2 h-1/2 ${blob.pos} animate-[blob-spin_100s_linear_infinite]`}
        >
          <path d={blob.path} transform="translate(100 100)" fill={blob.color} />
        </svg>
      ))}
    </div>
  );
}
