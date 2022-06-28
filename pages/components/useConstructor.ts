import { useRef } from 'react';

type ConstructorCallback = () => void;
function useConstructor(callback: ConstructorCallback): void {
    let isRun = false;
    if (isRun === false) {
        callback();
        isRun = true;
    }
}
export default useConstructor;