import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { Ai } from './Ai';


parentPort?.on('message', (message) => {
    console.log(message)
    const ai = new Ai();
    ai.init();
})